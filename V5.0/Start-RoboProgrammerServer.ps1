param(
  [int]$Port = 4220,
  [string]$Path = "/",
  [switch]$NoBrowser
)

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$serverApiVersion = 34

function Get-ContentType {
  param([string]$FilePath)

  switch ([System.IO.Path]::GetExtension($FilePath).ToLowerInvariant()) {
    ".html" { "text/html; charset=utf-8"; break }
    ".css" { "text/css; charset=utf-8"; break }
    ".js" { "application/javascript; charset=utf-8"; break }
    ".json" { "application/json; charset=utf-8"; break }
    ".txt" { "text/plain; charset=utf-8"; break }
    ".cmd" { "text/plain; charset=utf-8"; break }
    ".ps1" { "text/plain; charset=utf-8"; break }
    ".xlsx" { "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"; break }
    default { "application/octet-stream" }
  }
}

function Send-Response {
  param(
    [System.Net.Sockets.NetworkStream]$Stream,
    [int]$StatusCode,
    [string]$StatusText,
    [byte[]]$Body,
    [string]$ContentType = "text/plain; charset=utf-8"
  )

  $headers = @(
    "HTTP/1.1 $StatusCode $StatusText",
    "Content-Type: $ContentType",
    "Content-Length: $($Body.Length)",
    "Connection: close",
    "Cache-Control: no-store",
    "",
    ""
  ) -join "`r`n"

  $headerBytes = [System.Text.Encoding]::ASCII.GetBytes($headers)
  $Stream.Write($headerBytes, 0, $headerBytes.Length)
  if ($Body.Length -gt 0) {
    $Stream.Write($Body, 0, $Body.Length)
  }
}

function Send-JsonResponse {
  param(
    [System.Net.Sockets.NetworkStream]$Stream,
    [int]$StatusCode,
    [string]$StatusText,
    [object]$Data
  )

  $json = $Data | ConvertTo-Json -Depth 8 -Compress
  Send-Response $Stream $StatusCode $StatusText ([System.Text.Encoding]::UTF8.GetBytes($json)) "application/json; charset=utf-8"
}

function Read-HttpRequest {
  param([System.Net.Sockets.NetworkStream]$Stream)

  $memory = [System.IO.MemoryStream]::new()
  $buffer = New-Object byte[] 8192
  $headerEnd = -1
  $contentLength = 0
  while ($memory.Length -lt 20971520) {
    $read = $Stream.Read($buffer, 0, $buffer.Length)
    if ($read -le 0) { break }
    $memory.Write($buffer, 0, $read)
    $text = [System.Text.Encoding]::UTF8.GetString($memory.ToArray())
    if ($headerEnd -lt 0) {
      $headerEnd = $text.IndexOf("`r`n`r`n")
      if ($headerEnd -ge 0 -and $text -match "(?im)^Content-Length:\s*(\d+)\s*$") {
        $contentLength = [int]$Matches[1]
      }
    }
    if ($headerEnd -ge 0 -and $memory.Length -ge ($headerEnd + 4 + $contentLength)) { break }
  }
  if ($memory.Length -ge 20971520) { throw "Request body is too large." }
  return [System.Text.Encoding]::UTF8.GetString($memory.ToArray())
}

function Get-RobotConnectionInfo {
  param([string]$RobotAddress)

  if ([string]::IsNullOrWhiteSpace($RobotAddress)) { throw "Robot address is required." }
  $uri = [System.Uri]$RobotAddress
  if ($uri.Scheme -notin @("http", "https") -or [string]::IsNullOrWhiteSpace($uri.DnsSafeHost)) {
    throw "Robot address must be a valid HTTP or HTTPS address."
  }
  return @{
    HttpOrigin = $uri.GetLeftPart([System.UriPartial]::Authority)
    FtpHost = $uri.DnsSafeHost
  }
}

function New-RobotFtpRequest {
  param(
    [string]$HostName,
    [string]$Path,
    [string]$Method
  )

  $request = [System.Net.FtpWebRequest]::Create("ftp://$HostName/$Path")
  $request.Method = $Method
  $request.Credentials = [System.Net.NetworkCredential]::new("anonymous", "robo-programmer@localhost")
  $request.UseBinary = $true
  $request.UsePassive = $true
  $request.KeepAlive = $false
  $request.Timeout = 15000
  $request.ReadWriteTimeout = 15000
  return $request
}

function Get-RobotFtpFiles {
  param([string]$HostName)

  $request = New-RobotFtpRequest $HostName "" ([System.Net.WebRequestMethods+Ftp]::ListDirectory)
  $response = $request.GetResponse()
  try {
    $reader = [System.IO.StreamReader]::new($response.GetResponseStream())
    try {
      return @($reader.ReadToEnd() -split "`r?`n" | Where-Object { $_ } | ForEach-Object { $_.Trim().ToUpperInvariant() })
    } finally {
      $reader.Dispose()
    }
  } finally {
    $response.Dispose()
  }
}

function Send-RobotFtpFile {
  param(
    [string]$HostName,
    [string]$FileName,
    [string]$Content
  )

  $request = New-RobotFtpRequest $HostName $FileName ([System.Net.WebRequestMethods+Ftp]::UploadFile)
  $bytes = [System.Text.Encoding]::ASCII.GetBytes(($Content -replace "`r?`n", "`r`n"))
  $request.ContentLength = $bytes.Length
  $stream = $request.GetRequestStream()
  try {
    $stream.Write($bytes, 0, $bytes.Length)
  } finally {
    $stream.Dispose()
  }
  $response = $request.GetResponse()
  $response.Dispose()
}

function Ensure-LsEndTrailingBlankLine {
  param([string]$Content)

  return ([regex]::Replace(
    ($Content -replace "`r?`n", "`n"),
    "(?is)(^|`n)\s*/END\s*(?:`n\s*)*$",
    "`$1/END`n"
  ) -replace "`n", "`r`n")
}

function ConvertTo-RobotCompatibleLs {
  param([string]$Content)

  $updates = @()
  $compatibleContent = Ensure-LsEndTrailingBlankLine $Content
  if ($compatibleContent -notmatch "(?im)^\s*TCD:\s+STACK_SIZE") {
    $programName = [regex]::Match($compatibleContent, "(?im)^\s*/PROG\s+([A-Z][A-Z0-9_]*)\s*$").Groups[1].Value
    $lineCount = [regex]::Match($compatibleContent, "(?im)^\s*LINE_COUNT\s*=\s*(\d+)\s*;").Groups[1].Value
    if (-not $lineCount) { $lineCount = "0" }
    $standardHeader = @(
      "/PROG  $programName",
      "/ATTR",
      "OWNER`t`t= MNEDITOR;",
      "COMMENT`t`t= `"`";",
      "PROG_SIZE`t= 163;",
      "CREATE`t`t= DATE 25-09-11  TIME 23:06:10;",
      "MODIFIED`t= DATE 25-09-11  TIME 23:06:10;",
      "FILE_NAME`t= ;",
      "VERSION`t`t= 0;",
      "LINE_COUNT`t= $lineCount;",
      "MEMORY_SIZE`t= 407;",
      "PROTECT`t`t= READ_WRITE;",
      "STORAGE`t`t= SHADOW;",
      "TCD:  STACK_SIZE`t= 0,",
      "      TASK_PRIORITY`t= 50,",
      "      TIME_SLICE`t= 0,",
      "      BUSY_LAMP_OFF`t= 0,",
      "      ABORT_REQUEST`t= 0,",
      "      PAUSE_REQUEST`t= 0;",
      "DEFAULT_GROUP`t= 1,*,*,*,*;",
      "CONTROL_CODE`t= 00000000 00000000;",
      "LOCAL_REGISTERS`t= 0,0,0;"
    ) -join "`r`n"
    $compatibleContent = [regex]::Replace($compatibleContent, "(?ims)^\s*/PROG\s+[^\r\n]+\s*\r?\n/ATTR\s*\r?\n.*?(?=^/MN\s*$)", "$standardHeader`r`n", 1)
    $updates += "Rebuilt the older minimal LS header in the controller-compatible format."
  }
  if ($compatibleContent -notmatch "(?im)^\s*/APPL\s*$" -and $compatibleContent -match "(?im)^\s*/MN\s*$") {
    $appl = "/APPL`r`n`r`nAUTO_SINGULARITY_HEADER;`r`n  ENABLE_SINGULARITY_AVOIDANCE   : TRUE;`r`n"
    $compatibleContent = [regex]::Replace($compatibleContent, "(?im)^\s*/MN\s*$", "$appl/MN", 1)
    $updates += "Added the /APPL compatibility header required by the target controller."
  }
  $compatibleContent = Ensure-LsEndTrailingBlankLine $compatibleContent

  return @{
    content = $compatibleContent
    updates = $updates
  }
}

function Get-RobotFtpFile {
  param(
    [string]$HostName,
    [string]$FileName
  )

  $request = New-RobotFtpRequest $HostName $FileName ([System.Net.WebRequestMethods+Ftp]::DownloadFile)
  $response = $request.GetResponse()
  try {
    $memory = [System.IO.MemoryStream]::new()
    try {
      $response.GetResponseStream().CopyTo($memory)
      return $memory.ToArray()
    } finally {
      $memory.Dispose()
    }
  } finally {
    $response.Dispose()
  }
}

function Get-RobotLsSourceBytes {
  param(
    [string]$HttpOrigin,
    [string]$ProgramName
  )

  if ($ProgramName -notmatch "^[A-Z][A-Z0-9_]{0,35}$") {
    throw "Robot LS source requested an invalid program name: $ProgramName"
  }
  $text = Get-RobotPlainTextPage $HttpOrigin "/MD/$ProgramName.LS"
  if ($text -notmatch "(?im)^\s*/PROG\s+$([regex]::Escape($ProgramName))\s*$" -or $text -notmatch "(?im)^\s*/END\s*$") {
    throw "The robot did not return complete LS source for $ProgramName."
  }
  if (-not $text.EndsWith("`n")) { $text += "`n" }
  return [System.Text.Encoding]::UTF8.GetBytes($text)
}

function New-RobotBackupZip {
  param(
    [string]$HostName,
    [string[]]$SelectedFiles,
    [string]$BackupMode
  )

  Add-Type -AssemblyName System.IO.Compression
  $memory = [System.IO.MemoryStream]::new()
  $archive = [System.IO.Compression.ZipArchive]::new($memory, [System.IO.Compression.ZipArchiveMode]::Create, $true)
  $results = @()
  try {
    foreach ($name in $SelectedFiles) {
      try {
        $bytes = Get-RobotFtpFile $HostName $name
        $entry = $archive.CreateEntry($name, [System.IO.Compression.CompressionLevel]::Optimal)
        $entryStream = $entry.Open()
        try {
          $entryStream.Write($bytes, 0, $bytes.Length)
        } finally {
          $entryStream.Dispose()
        }
        $results += @{ name = $name; success = $true; bytes = $bytes.Length; error = "" }
      } catch {
        $results += @{ name = $name; success = $false; bytes = 0; error = $_.Exception.Message }
      }
    }

    $manifest = @{
      format = "robo-programmer-robot-backup"
      version = 1
      createdAt = [DateTime]::UtcNow.ToString("o")
      ftpHost = $HostName
      backupMode = $BackupMode
      requestedFileCount = $SelectedFiles.Count
      successfulFileCount = @($results | Where-Object { $_.success }).Count
      failedFileCount = @($results | Where-Object { -not $_.success }).Count
      files = $results
    } | ConvertTo-Json -Depth 6
    $manifestBytes = [System.Text.Encoding]::UTF8.GetBytes($manifest)
    $manifestEntry = $archive.CreateEntry("robot-backup-manifest.json", [System.IO.Compression.CompressionLevel]::Optimal)
    $manifestStream = $manifestEntry.Open()
    try {
      $manifestStream.Write($manifestBytes, 0, $manifestBytes.Length)
    } finally {
      $manifestStream.Dispose()
    }
  } finally {
    $archive.Dispose()
  }
  try {
    return $memory.ToArray()
  } finally {
    $memory.Dispose()
  }
}

function Handle-RobotBackupRequest {
  param(
    [System.Net.Sockets.NetworkStream]$Stream,
    [string]$Target,
    [string]$RequestBody
  )

  try {
    $payload = $RequestBody | ConvertFrom-Json
    $connection = Get-RobotConnectionInfo ([string]$payload.robotAddress)

    if ($Target -eq "/robot-backup/inventory") {
      $availableFiles = @(Get-RobotFtpFiles $connection.FtpHost)
      Send-JsonResponse $Stream 200 "OK" @{
        ok = $true
        ftpHost = $connection.FtpHost
        files = $availableFiles
      }
      return
    }

    if ($Target -eq "/robot-backup/file") {
      $name = ([string]$payload.file).Trim().ToUpperInvariant()
      if ($name -notmatch "^[A-Z0-9_.-]+$") {
        throw "Robot backup requested an unsafe filename: $name"
      }
      try {
        Send-Response $Stream 200 "OK" (Get-RobotFtpFile $connection.FtpHost $name) "application/octet-stream"
      } catch {
        if ($name -match "^([A-Z][A-Z0-9_]{0,35})\.LS$") {
          Send-Response $Stream 200 "OK" (Get-RobotLsSourceBytes $connection.HttpOrigin $Matches[1]) "application/octet-stream"
        } else {
          throw
        }
      }
      return
    }

    $availableFiles = @(Get-RobotFtpFiles $connection.FtpHost)
    $availableSet = @{}
    foreach ($availableName in $availableFiles) { $availableSet[$availableName] = $true }
    $selectedFiles = @(@($payload.files) | ForEach-Object { ([string]$_).Trim().ToUpperInvariant() } | Select-Object -Unique)
    if (-not $selectedFiles.Count) { throw "Select at least one robot file to back up." }
    if ($selectedFiles.Count -gt 5000) { throw "Too many robot files were selected." }
    foreach ($name in $selectedFiles) {
      if ($name -notmatch "^[A-Z0-9_.-]+$" -or -not $availableSet.ContainsKey($name)) {
        throw "Robot backup selection contains an unavailable or unsafe filename: $name"
      }
    }

    $zipBytes = New-RobotBackupZip $connection.FtpHost $selectedFiles ([string]$payload.backupMode)
    Send-Response $Stream 200 "OK" $zipBytes "application/zip"
  } catch {
    Send-JsonResponse $Stream 400 "Bad Request" @{ ok = $false; error = $_.Exception.Message }
  }
}

function Test-RoboProjectPathCandidate {
  param(
    [string]$CandidatePath,
    [string[]]$LsFiles
  )

  if (-not (Test-Path -LiteralPath $CandidatePath -PathType Container)) { return $false }
  $hasProjectConfig = @(Get-ChildItem -LiteralPath $CandidatePath -File -ErrorAction SilentlyContinue | Where-Object {
    $_.Name -ieq "robo-project.json" -or $_.Extension -ieq ".roboproject"
  }).Count -gt 0
  if (-not $hasProjectConfig) { return $false }

  $lsPath = Join-Path $CandidatePath "LS Files"
  if (-not (Test-Path -LiteralPath $lsPath -PathType Container)) {
    $lsPath = $CandidatePath
  }

  if (-not (Test-Path -LiteralPath $lsPath -PathType Container)) { return $false }
  foreach ($fileName in @($LsFiles | Select-Object -First 20)) {
    $safeName = [System.IO.Path]::GetFileName([string]$fileName)
    if ([string]::IsNullOrWhiteSpace($safeName)) { continue }
    if (-not (Test-Path -LiteralPath (Join-Path $lsPath $safeName) -PathType Leaf)) {
      return $false
    }
  }

  return $true
}

function Resolve-RoboProjectPath {
  param(
    [string]$ProjectName,
    [string[]]$LsFiles
  )

  $safeName = [System.IO.Path]::GetFileName($ProjectName)
  if ([string]::IsNullOrWhiteSpace($safeName) -or $safeName -ne $ProjectName) {
    throw "Invalid project name."
  }

  $roots = New-Object System.Collections.Generic.List[string]
  $userProfile = $env:USERPROFILE
  foreach ($path in @(
    [Environment]::GetFolderPath("MyDocuments"),
    [Environment]::GetFolderPath("Desktop"),
    (Join-Path $userProfile "Documents"),
    (Join-Path $userProfile "Desktop"),
    (Join-Path $userProfile "Downloads")
  )) {
    if ($path -and (Test-Path -LiteralPath $path -PathType Container) -and -not $roots.Contains($path)) {
      $roots.Add($path)
    }
  }
  if ($userProfile -and (Test-Path -LiteralPath $userProfile -PathType Container)) {
    $oneDriveRoots = New-Object System.Collections.Generic.List[string]
    foreach ($oneDriveRoot in @($env:OneDrive, $env:OneDriveCommercial, $env:OneDriveConsumer)) {
      if ($oneDriveRoot -and (Test-Path -LiteralPath $oneDriveRoot -PathType Container) -and -not $oneDriveRoots.Contains($oneDriveRoot)) {
        $oneDriveRoots.Add($oneDriveRoot)
      }
    }
    Get-ChildItem -LiteralPath $userProfile -Directory -Filter "OneDrive*" -ErrorAction SilentlyContinue | ForEach-Object {
      if (-not $oneDriveRoots.Contains($_.FullName)) { $oneDriveRoots.Add($_.FullName) }
    }
    $oneDriveRoots | ForEach-Object {
      $oneDriveRootPath = [string]$_
      foreach ($oneDrivePath in @(
        (Join-Path $oneDriveRootPath "Documents"),
        (Join-Path $oneDriveRootPath "Desktop"),
        (Join-Path $oneDriveRootPath "Projects")
      )) {
        if ((Test-Path -LiteralPath $oneDrivePath -PathType Container) -and -not $roots.Contains($oneDrivePath)) {
          $roots.Add($oneDrivePath)
        }
      }
    }
  }

  $matches = New-Object System.Collections.Generic.List[string]
  foreach ($searchRoot in $roots) {
    if ($matches.Count -gt 1) { break }
    try {
      Get-ChildItem -LiteralPath $searchRoot -Directory -Filter $safeName -Recurse -ErrorAction SilentlyContinue | ForEach-Object {
        if ($matches.Count -le 1 -and (Test-RoboProjectPathCandidate $_.FullName $LsFiles)) {
          if (-not $matches.Contains($_.FullName)) { $matches.Add($_.FullName) }
        }
      }
    } catch {
    }
  }

  if ($matches.Count -eq 1) { return $matches[0] }
  if ($matches.Count -gt 1) { throw "Multiple matching project folders were found." }
  throw "No matching project folder was found in common Windows locations."
}

function Handle-ProjectPathRequest {
  param(
    [System.Net.Sockets.NetworkStream]$Stream,
    [string]$RequestBody
  )

  try {
    $payload = $RequestBody | ConvertFrom-Json
    $projectPath = Resolve-RoboProjectPath ([string]$payload.projectName) @($payload.lsFiles)
    Send-JsonResponse $Stream 200 "OK" @{ ok = $true; path = $projectPath }
  } catch {
    Send-JsonResponse $Stream 404 "Not Found" @{ ok = $false; error = $_.Exception.Message }
  }
}

function ConvertFrom-FanucNumber {
  param([string]$Value)

  $text = ([string]$Value).Trim()
  if ($text.StartsWith("-.")) {
    $text = $text.Replace("-.", "-0.")
  } elseif ($text.StartsWith("+.")) {
    $text = $text.Replace("+.", "+0.")
  } elseif ($text.StartsWith(".")) {
    $text = "0$text"
  }
  return [double]::Parse($text, [System.Globalization.CultureInfo]::InvariantCulture)
}

function Get-TextSection {
  param(
    [string]$Text,
    [string]$StartPattern,
    [string]$EndPattern
  )

  $pattern = "(?is)$StartPattern(?<section>.*?)(?:$EndPattern|$)"
  $match = [regex]::Match($Text, $pattern)
  if ($match.Success) { return $match.Groups["section"].Value }
  return ""
}

function Get-RobotPositionValues {
  param([string]$SectionText)

  $values = @{}
  foreach ($axis in @("X", "Y", "Z", "W", "P", "R")) {
    $match = [regex]::Match($SectionText, "(?m)\b$axis\s*:\s*([+-]?(?:\d+(?:\.\d*)?|\.\d+))")
    if ($match.Success) {
      $values[$axis] = ConvertFrom-FanucNumber $match.Groups[1].Value
    }
  }
  return $values
}

function Get-RobotExtAxes {
  param([string]$SectionText)

  return ,@([regex]::Matches($SectionText, "EXTAXS:\s*(\d+):\s*([+-]?(?:\d+(?:\.\d*)?|\.\d+))") | ForEach-Object {
    @{
      axis = "E$($_.Groups[1].Value)"
      value = ConvertFrom-FanucNumber $_.Groups[2].Value
    }
  })
}

function Get-RobotPositionSnapshot {
  param([string]$HttpOrigin)

  $request = [System.Net.HttpWebRequest]::Create("$HttpOrigin/MD/CURPOS.DG")
  $request.Method = "GET"
  $request.Timeout = 15000
  $response = $request.GetResponse()
  try {
    $reader = [System.IO.StreamReader]::new($response.GetResponseStream())
    try {
      $content = $reader.ReadToEnd()
    } finally {
      $reader.Dispose()
    }
  } finally {
    $response.Dispose()
  }

  $text = [regex]::Replace($content, "(?is)<script.*?</script>", " ")
  $text = [regex]::Replace($text, "(?is)<[^>]+>", " ")
  $text = [System.Net.WebUtility]::HtmlDecode($text)
  $text = [regex]::Replace($text, "`r`n|`r", "`n")

  $jointSection = Get-TextSection $text "CURRENT JOINT POSITION:" "Frame\s+#:"
  $userFrameSection = Get-TextSection $text "CURRENT USER FRAME POSITION:" "Tool\s+#:\s*\d+\s*`n\s*CURRENT WORLD POSITION:"
  $worldSection = Get-TextSection $text "CURRENT WORLD POSITION:" "$"

  $joints = @([regex]::Matches($jointSection, "Joint\s+(\d+):\s*([+-]?(?:\d+(?:\.\d*)?|\.\d+))") | ForEach-Object {
    @{
      axis = "J$($_.Groups[1].Value)"
      value = ConvertFrom-FanucNumber $_.Groups[2].Value
    }
  })

  $frameToolMatch = [regex]::Match($text, "Frame\s+#:\s*(\d+)\s+Tool\s+#:\s*(\d+)")
  $worldToolMatch = [regex]::Match($text, "Tool\s+#:\s*(\d+)\s*`n\s*CURRENT WORLD POSITION:")
  $groupMatch = [regex]::Match($text, "Group\s+#:\s*(\d+)")
  $dateMatch = [regex]::Match($text, "(?m)^\s*DATE:\s*(.+?)\s*$")
  $fNumberMatch = [regex]::Match($text, "(?m)^\s*F Number:\s*(.+?)\s*$")
  $versionMatch = [regex]::Match($text, "(?m)^\s*VERSION\s*:\s*(.+?)\s*$")
  $ufConfigMatch = [regex]::Match($userFrameSection, "(?m)^\s*CFG:\s*(.+?)\s*$")
  $worldConfigMatch = [regex]::Match($worldSection, "(?m)^\s*CFG:\s*(.+?)\s*$")

  if (-not $joints.Count -and -not $frameToolMatch.Success) {
    throw "The robot current-position page did not contain readable position data."
  }

  return @{
    ok = $true
    capturedAt = [DateTime]::UtcNow.ToString("o")
    controllerDate = if ($dateMatch.Success) { $dateMatch.Groups[1].Value.Trim() } else { "" }
    controller = @{
      fNumber = if ($fNumberMatch.Success) { $fNumberMatch.Groups[1].Value.Trim() } else { "" }
      version = if ($versionMatch.Success) { $versionMatch.Groups[1].Value.Trim() } else { "" }
    }
    group = if ($groupMatch.Success) { [int]$groupMatch.Groups[1].Value } else { $null }
    frame = if ($frameToolMatch.Success) { [int]$frameToolMatch.Groups[1].Value } else { $null }
    tool = if ($frameToolMatch.Success) { [int]$frameToolMatch.Groups[2].Value } else { $null }
    joints = $joints
    jointExtAxes = Get-RobotExtAxes $jointSection
    userFrame = @{
      frame = if ($frameToolMatch.Success) { [int]$frameToolMatch.Groups[1].Value } else { $null }
      tool = if ($frameToolMatch.Success) { [int]$frameToolMatch.Groups[2].Value } else { $null }
      config = if ($ufConfigMatch.Success) { $ufConfigMatch.Groups[1].Value.Trim() } else { "" }
      values = Get-RobotPositionValues $userFrameSection
      extAxes = Get-RobotExtAxes $userFrameSection
    }
    world = @{
      tool = if ($worldToolMatch.Success) { [int]$worldToolMatch.Groups[1].Value } else { $null }
      config = if ($worldConfigMatch.Success) { $worldConfigMatch.Groups[1].Value.Trim() } else { "" }
      values = Get-RobotPositionValues $worldSection
      extAxes = Get-RobotExtAxes $worldSection
    }
  }
}

function Handle-RobotPositionRequest {
  param(
    [System.Net.Sockets.NetworkStream]$Stream,
    [string]$RequestBody
  )

  try {
    $payload = $RequestBody | ConvertFrom-Json
    $connection = Get-RobotConnectionInfo ([string]$payload.robotAddress)
    $snapshot = Get-RobotPositionSnapshot $connection.HttpOrigin
    $snapshot.robotAddress = $connection.HttpOrigin
    Send-JsonResponse $Stream 200 "OK" $snapshot
  } catch {
    Send-JsonResponse $Stream 400 "Bad Request" @{ ok = $false; error = $_.Exception.Message }
  }
}

function Get-RobotPlainTextPage {
  param(
    [string]$HttpOrigin,
    [string]$Path,
    [int]$TimeoutMs = 15000
  )

  $request = [System.Net.HttpWebRequest]::Create("$HttpOrigin$Path")
  $request.Method = "GET"
  $request.Timeout = $TimeoutMs
  $response = $request.GetResponse()
  try {
    $reader = [System.IO.StreamReader]::new($response.GetResponseStream())
    try {
      $content = $reader.ReadToEnd()
    } finally {
      $reader.Dispose()
    }
  } finally {
    $response.Dispose()
  }

  $text = [regex]::Replace($content, "(?is)<script.*?</script>", " ")
  $text = [regex]::Replace($text, "(?is)<style.*?</style>", " ")
  $text = [regex]::Replace($text, "(?is)<br\s*/?>", "`n")
  $text = [regex]::Replace($text, "(?is)</(?:tr|p|div|li|h\d)>", "`n")
  $text = [regex]::Replace($text, "(?is)<[^>]+>", " ")
  $text = [System.Net.WebUtility]::HtmlDecode($text)
  $text = [regex]::Replace($text, "`r`n|`r", "`n")
  $text = [regex]::Replace($text, "[ \t]+", " ")
  $text = [regex]::Replace($text, "(?m)^[ \t]+|[ \t]+$", "")
  return $text.Trim()
}

function Get-RobotSummarySnapshot {
  param([string]$HttpOrigin)

  $text = Get-RobotPlainTextPage $HttpOrigin "/MD/SUMMARY.DG?_TEMPLATE=FRS:SUMMTMP"
  $lines = @($text -split "`n" | ForEach-Object { $_.Trim() } | Where-Object { $_ })

  function Find-SummaryValue {
    param([string[]]$Patterns)
    foreach ($pattern in $Patterns) {
      $match = [regex]::Match($text, $pattern, [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)
      if ($match.Success) { return $match.Groups[1].Value.Trim() }
    }
    return ""
  }

  return @{
    options = @{
      asciiProgramLoader = ($text -match "Ascii\s+Program\s+Loader")
      ftpInterface = ($text -match "FTP|File\s+Transfer")
    }
    state = @{
      mode = Find-SummaryValue @("\bMode\s*[:=]\s*([^`n]+)", "\bRemote/Local\s*[:=]\s*([^`n]+)")
      program = Find-SummaryValue @("\bProgram\s*[:=]\s*([^`n]+)", "\bSelected\s+Program\s*[:=]\s*([^`n]+)")
      runState = Find-SummaryValue @("\bRun\s*State\s*[:=]\s*([^`n]+)", "\bCycle\s*[:=]\s*([^`n]+)", "\bState\s*[:=]\s*([^`n]+)")
      servo = Find-SummaryValue @("\bServo\s*[:=]\s*([^`n]+)", "\bServo\s+Power\s*[:=]\s*([^`n]+)")
      override = Find-SummaryValue @("\bOverride\s*[:=]\s*([^`n]+)", "\bSpeed\s+Override\s*[:=]\s*([^`n]+)")
    }
    rawHighlights = @($lines | Where-Object { $_ -match "(?i)(mode|program|state|cycle|servo|override|fault|alarm|error|hold|remote|local)" } | Select-Object -First 12)
  }
}

function Get-RobotAlarmSnapshot {
  param([string]$HttpOrigin)

  $text = Get-RobotPlainTextPage $HttpOrigin "/MD/ERRALL.LS"
  $lines = @($text -split "`n" | ForEach-Object { $_.Trim() } | Where-Object { $_ })
  return @($lines | Where-Object { $_ -match "(?i)(SRVO-|INTP-|MOTN-|PROG-|SYST-|HOST-|ASBN-|WARN|ALARM|FAULT|ERROR)" } | Select-Object -First 20)
}

function Get-RobotProgramSourceContext {
  param(
    [string]$HttpOrigin,
    [string]$ProgramName,
    [int]$ActiveLine
  )

  if ($ProgramName -notmatch '^[A-Z][A-Z0-9_]{0,35}$') { return @() }
  $text = Get-RobotPlainTextPage $HttpOrigin "/MD/$ProgramName.LS"
  $mnMatch = [regex]::Match($text, '(?is)/MN\s*(.*?)(?=\n\s*/(?:POS|END)\b)')
  if (-not $mnMatch.Success) { return @() }

  $programLines = @($mnMatch.Groups[1].Value -split "`n" | ForEach-Object {
    $lineMatch = [regex]::Match($_, '^\s*(\d+)\s*:\s*(.*?)\s*$')
    if ($lineMatch.Success) {
      [pscustomobject]@{
        number = [int]$lineMatch.Groups[1].Value
        text = $lineMatch.Groups[2].Value.TrimEnd()
        active = ([int]$lineMatch.Groups[1].Value -eq $ActiveLine)
      }
    }
  } | Where-Object { $null -ne $_ })
  if (-not $programLines.Count) { return @() }

  $activeIndex = -1
  for ($index = 0; $index -lt $programLines.Count; $index += 1) {
    if ($programLines[$index].active) { $activeIndex = $index; break }
  }
  if ($activeIndex -lt 0) { return @($programLines | Select-Object -First 15) }
  $start = [Math]::Max(0, $activeIndex - 6)
  $end = [Math]::Min($programLines.Count - 1, $activeIndex + 6)
  return @($programLines[$start..$end])
}

function Get-RobotProgramMonitorSnapshot {
  param([string]$HttpOrigin)

  $text = Get-RobotPlainTextPage $HttpOrigin "/MD/PRGSTATE.DG"
  $sectionMatch = [regex]::Match($text, '(?is)TASK STATES:\s*(.*?)(?:PROGRAM STATES:|$)')
  if (-not $sectionMatch.Success) { throw "The robot Program State page did not contain a task-state section." }
  $taskBlocks = @()
  $currentBlock = $null
  foreach ($rawLine in @($sectionMatch.Groups[1].Value -split "`n")) {
    $startMatch = [regex]::Match($rawLine, '^\s*(\d+)\s+([A-Z0-9_-]+)\s+(.+?)\s*$')
    $isTaskStart = $startMatch.Success -and $startMatch.Groups[3].Value -match '(?i)^(?:status\s*=|[A-Z_]+\s*@)'
    if ($isTaskStart) {
      if ($null -ne $currentBlock) { $taskBlocks += $currentBlock }
      $currentBlock = [pscustomobject]@{
        number = [int]$startMatch.Groups[1].Value
        name = $startMatch.Groups[2].Value.Trim()
        header = $startMatch.Groups[3].Value.Trim()
        detailLines = [System.Collections.Generic.List[string]]::new()
      }
      continue
    }
    if ($null -ne $currentBlock) { $currentBlock.detailLines.Add($rawLine) }
  }
  if ($null -ne $currentBlock) { $taskBlocks += $currentBlock }

  $tasks = @($taskBlocks | ForEach-Object {
    $taskNumber = [int]$_.number
    $taskName = [string]$_.name
    $header = [string]$_.header
    $details = @($_.detailLines) -join "`n"
    $statusMatch = [regex]::Match($header, '(?i)status\s*=\s*([A-Z_]+)')
    $runningMatch = [regex]::Match($header, '(?i)^([A-Z_]+)\s*@\s*(\d+)\s+in\s+(\S+)\s+of\s+(\S+)')
    $detailLine = [regex]::Match($details, '(?im)^\s*Line:\s*(\d+)').Groups[1].Value
    $detailRoutine = [regex]::Match($details, '(?im)Routine:\s*([^\r\n]+)').Groups[1].Value.Trim()
    $detailProgram = [regex]::Match($details, '(?im)Program:\s*(.*?)\s+Type:').Groups[1].Value.Trim()
    $detailType = [regex]::Match($details, '(?im)Type:\s*([A-Z]+)').Groups[1].Value.Trim().ToUpperInvariant()
    $detailDepth = [regex]::Match($details, '(?im)Routine\s+depth:\s*(\d+)').Groups[1].Value
    $status = if ($statusMatch.Success) { $statusMatch.Groups[1].Value.ToUpperInvariant() } elseif ($runningMatch.Success) { $runningMatch.Groups[1].Value.ToUpperInvariant() } else { "UNKNOWN" }
    $line = if ($runningMatch.Success) { [int]$runningMatch.Groups[2].Value } elseif ($detailLine) { [int]$detailLine } else { $null }
    $routine = if ($runningMatch.Success) { $runningMatch.Groups[3].Value.Trim() } else { $detailRoutine }
    $program = if ($runningMatch.Success) { $runningMatch.Groups[4].Value.Trim() } else { $detailProgram }
    [pscustomobject]@{
      number = $taskNumber
      name = $taskName
      status = $status
      active = ($status -notin @('ABORTED', 'UNINIT', 'UNKNOWN'))
      historical = ($status -eq 'ABORTED' -and $details -match '(?i)History\s+Data')
      line = $line
      routine = $routine
      program = $program
      type = $detailType
      depth = if ($detailDepth) { [int]$detailDepth } else { 0 }
    }
  } | Sort-Object number)

  $monitorTasks = @($tasks | Where-Object { $_.type -ne 'PC' })
  $primary = $monitorTasks | Where-Object { $_.status -eq 'RUNNING' -and $_.type -eq 'TP' } | Select-Object -First 1
  if ($null -eq $primary) { $primary = $monitorTasks | Where-Object { $_.status -eq 'RUNNING' } | Select-Object -First 1 }
  if ($null -eq $primary) { $primary = $monitorTasks | Where-Object { $_.active -and $_.type -eq 'TP' } | Select-Object -First 1 }
  if ($null -eq $primary) { $primary = $monitorTasks | Where-Object { $_.active } | Select-Object -First 1 }

  $source = @()
  $warnings = @()
  if ($null -ne $primary -and $primary.type -eq 'TP' -and $primary.program) {
    try {
      $source = @(Get-RobotProgramSourceContext $HttpOrigin ([string]$primary.program) ([int]$primary.line))
    } catch {
      $warnings += "Program source unavailable: $($_.Exception.Message)"
    }
  }

  return @{
    ok = $true
    capturedAt = [DateTime]::UtcNow.ToString('o')
    robotAddress = $HttpOrigin
    primaryTask = $primary
    tasks = $monitorTasks
    source = $source
    warnings = $warnings
    counts = @{
      total = $monitorTasks.Count
      running = @($monitorTasks | Where-Object { $_.status -eq 'RUNNING' }).Count
      active = @($monitorTasks | Where-Object { $_.active }).Count
      tp = @($monitorTasks | Where-Object { $_.type -eq 'TP' }).Count
      vision = @($monitorTasks | Where-Object { $_.type -ne 'TP' }).Count
      hiddenPc = @($tasks | Where-Object { $_.type -eq 'PC' }).Count
    }
  }
}

function Get-RobotRawTextPage {
  param(
    [string]$HttpOrigin,
    [string]$Path,
    [int]$TimeoutMs = 15000
  )

  if ([string]::IsNullOrWhiteSpace($Path) -or -not $Path.StartsWith("/")) {
    throw "Robot page paths must start with /."
  }
  $request = [System.Net.HttpWebRequest]::Create("$HttpOrigin$Path")
  $request.Method = "GET"
  $request.Timeout = $TimeoutMs
  $request.ReadWriteTimeout = $TimeoutMs
  $response = $request.GetResponse()
  try {
    $reader = [System.IO.StreamReader]::new($response.GetResponseStream())
    try {
      return $reader.ReadToEnd()
    } finally {
      $reader.Dispose()
    }
  } finally {
    $response.Dispose()
  }
}

function Get-RobotHtcgOrigin {
  param([string]$HttpOrigin)

  $homePage = Get-RobotRawTextPage $HttpOrigin "/" 10000
  $portMatch = [regex]::Match($homePage, 'htcg_port\s*=\s*parseInt\(["''](\d+)["'']\)', [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)
  if (-not $portMatch.Success) {
    throw "The robot homepage did not advertise its iRProgrammer service port."
  }

  $builder = [System.UriBuilder]::new([System.Uri]$HttpOrigin)
  $builder.Port = [int]$portMatch.Groups[1].Value
  $builder.Path = ""
  $builder.Query = ""
  $builder.Fragment = ""
  return $builder.Uri.GetLeftPart([System.UriPartial]::Authority)
}

function Send-RobotXmlVariablePayload {
  param(
    [string]$HtcgOrigin,
    [string]$Xml
  )

  $bytes = [System.Text.Encoding]::UTF8.GetBytes($Xml)
  $request = [System.Net.HttpWebRequest]::Create("$HtcgOrigin/SOFTPART/XMLJSON?func=SETVAR")
  $request.Method = "POST"
  $request.ContentType = "text/plain; charset=UTF-8"
  $request.ContentLength = $bytes.Length
  $request.Timeout = 15000
  $request.ReadWriteTimeout = 15000

  $requestStream = $request.GetRequestStream()
  try {
    $requestStream.Write($bytes, 0, $bytes.Length)
  } finally {
    $requestStream.Dispose()
  }

  $response = $null
  try {
    $response = $request.GetResponse()
  } catch {
    $rootError = $_.Exception
    while ($null -ne $rootError.InnerException) { $rootError = $rootError.InnerException }
    if ($rootError -is [System.Net.WebException] -and $rootError.Status -eq [System.Net.WebExceptionStatus]::ServerProtocolViolation) {
      # Some FANUC HTTP servers apply SETVAR successfully, then terminate with a malformed
      # status line. The caller always reads POSREG.VA afterward, so verification remains
      # authoritative and a real write failure will still be detected and rolled back.
      return
    }
    throw
  }
  try {
    if ([int]$response.StatusCode -ne 200) {
      throw "The robot variable service returned HTTP $([int]$response.StatusCode)."
    }
  } finally {
    $response.Dispose()
  }
}

function Send-RobotCometPositionRegister {
  param(
    [string]$HtcgOrigin,
    [int]$Group,
    [int]$Index,
    [string]$Value
  )

  if ($Group -lt 1 -or $Index -lt 1) { throw "Invalid Position Register group or index." }
  $variableName = [System.Uri]::EscapeDataString("`$POSREG[$Group,$Index]")
  $encodedValue = [System.Uri]::EscapeDataString($Value)
  $sequence = [DateTimeOffset]::UtcNow.ToUnixTimeMilliseconds()
  $path = "/COMET/rpc?func=VMIP_WRITEVA&prog_name=*POSREG*&var_name=$variableName&value=$encodedValue&_=$sequence"
  $resultText = Get-RobotRawTextPage $HtcgOrigin $path 15000
  try {
    $result = $resultText | ConvertFrom-Json
  } catch {
    throw "The robot returned an invalid response to the Position Register write."
  }
  $rpc = @($result.FANUC.RPC)[0]
  if ($null -eq $rpc -or [string]$rpc.status -notin @("0", "0x0")) {
    $message = if ($null -ne $rpc -and $rpc.message) { [string]$rpc.message } else { "Unknown controller error." }
    throw "The robot rejected the Position Register write: $message"
  }
}

function ConvertFrom-RobotOptionsSummaryText {
  param([string]$Text)

  $lines = @($Text -split "`n" | ForEach-Object { ([string]$_ -replace '\s+', ' ').Trim() } | Where-Object { $_ })
  $configStart = -1
  $configEnd = $lines.Count
  for ($index = 0; $index -lt $lines.Count; $index += 1) {
    if ($configStart -lt 0 -and $lines[$index] -match '(?i)^FEATURE:\s*ORD\s+NO:$') {
      $configStart = $index + 1
      continue
    }
    if ($configStart -ge 0 -and $lines[$index] -match '(?i)^CONFIG2::') {
      $configEnd = $index
      break
    }
  }
  if ($configStart -lt 0) { throw "The robot summary did not contain a loaded software CONFIG section." }

  $options = @()
  $seen = @{}
  for ($index = $configStart; $index -lt $configEnd; $index += 1) {
    $match = [regex]::Match($lines[$index], '^(.*?)\s+(\S{4})$')
    if (-not $match.Success) { continue }
    $name = $match.Groups[1].Value.Trim()
    $orderNumber = $match.Groups[2].Value.Trim()
    if (-not $name) { continue }
    $key = "$($name.ToUpperInvariant())|$($orderNumber.ToUpperInvariant())"
    if ($seen.ContainsKey($key)) { continue }
    $seen[$key] = $true
    $options += [pscustomobject]@{
      name = $name
      orderNumber = $orderNumber
    }
  }

  function Find-RobotOptionSummaryValue {
    param([string[]]$Patterns)
    foreach ($pattern in $Patterns) {
      $match = [regex]::Match($Text, $pattern, [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)
      if ($match.Success) { return $match.Groups[1].Value.Trim() }
    }
    return ""
  }

  return @{
    options = @($options)
    controller = @{
      product = Find-RobotOptionSummaryValue @('(?m)^\s*VERSION\s*:\s*([^\r\n]+)')
      version = Find-RobotOptionSummaryValue @('(?m)^\s*\$VERSION\s*:\s*([^\r\n]+)')
      softwareEdition = Find-RobotOptionSummaryValue @('(?m)^\s*Software\s+Edition\s+No\.\s*:\s*([^\r\n]+)')
      rootVersion = Find-RobotOptionSummaryValue @('(?m)^\s*Root\s+Version\s*:\s*([^\r\n]+)')
      controllerId = Find-RobotOptionSummaryValue @('(?m)^\s*Controller\s+ID\s*:\s*([^\r\n]+)')
      robotNumber = Find-RobotOptionSummaryValue @('(?m)^\s*Robot\s+No\.\s*:\s*([^\r\n]+)')
    }
  }
}

function Get-RobotOptionsSnapshot {
  param([string]$HttpOrigin)

  $text = Get-RobotPlainTextPage $HttpOrigin "/MD/SUMMARY.DG?_TEMPLATE=FRS:SUMMTMP" 30000
  return ConvertFrom-RobotOptionsSummaryText $text
}

function Handle-LsFileExportRequest {
  param(
    [System.Net.Sockets.NetworkStream]$Stream,
    [string]$RequestBody
  )

  try {
    $payload = $RequestBody | ConvertFrom-Json
    $requestedFiles = @($payload.files)
    if (-not $requestedFiles.Count) { throw "Select at least one LS file to export." }
    if ($requestedFiles.Count -gt 500) { throw "No more than 500 LS files can be exported at once." }

    $safeFiles = New-Object System.Collections.Generic.List[object]
    $seenNames = [System.Collections.Generic.HashSet[string]]::new([System.StringComparer]::OrdinalIgnoreCase)
    foreach ($item in $requestedFiles) {
      $name = ([string]$item.name).Trim()
      $unsafeName = [string]::IsNullOrWhiteSpace($name) -or
        [System.IO.Path]::GetFileName($name) -cne $name -or
        [System.IO.Path]::GetExtension($name) -ine ".LS" -or
        $name.IndexOfAny([System.IO.Path]::GetInvalidFileNameChars()) -ge 0
      if ($unsafeName) {
        throw "LS export contains an unsafe filename: $name"
      }
      if (-not $seenNames.Add($name)) { throw "LS export contains a duplicate filename: $name" }
      $safeFiles.Add([pscustomobject]@{ name = $name; content = [string]$item.content })
    }

    Add-Type -AssemblyName System.Windows.Forms
    $dialog = New-Object System.Windows.Forms.FolderBrowserDialog
    try {
      $dialog.Description = "Choose where to export $($safeFiles.Count) Robo Programmer LS file$(if ($safeFiles.Count -eq 1) { '' } else { 's' })."
      $dialog.ShowNewFolderButton = $true
      $documentsPath = [Environment]::GetFolderPath([Environment+SpecialFolder]::MyDocuments)
      if (-not [string]::IsNullOrWhiteSpace($documentsPath)) { $dialog.SelectedPath = $documentsPath }
      $dialogResult = $dialog.ShowDialog()
      if ($dialogResult -ne [System.Windows.Forms.DialogResult]::OK -or [string]::IsNullOrWhiteSpace($dialog.SelectedPath)) {
        Send-JsonResponse $Stream 200 "OK" @{ ok = $true; cancelled = $true }
        return
      }
      $destinationPath = [System.IO.Path]::GetFullPath($dialog.SelectedPath)
    } finally {
      $dialog.Dispose()
    }

    if (-not (Test-Path -LiteralPath $destinationPath -PathType Container)) {
      throw "The selected export folder is unavailable."
    }
    $conflicts = @($safeFiles | Where-Object { Test-Path -LiteralPath (Join-Path $destinationPath $_.name) -PathType Leaf })
    if ($conflicts.Count) {
      $conflictNames = @($conflicts | Select-Object -First 10 | ForEach-Object { $_.name })
      $remaining = $conflicts.Count - $conflictNames.Count
      $conflictText = ($conflictNames -join "`r`n")
      if ($remaining -gt 0) { $conflictText += "`r`n...and $remaining more" }
      $choice = [System.Windows.Forms.MessageBox]::Show(
        "$($conflicts.Count) LS file$(if ($conflicts.Count -eq 1) { ' already exists' } else { 's already exist' }) in this folder. Overwrite?`r`n`r`n$conflictText",
        "Robo Programmer - Confirm LS Export",
        [System.Windows.Forms.MessageBoxButtons]::YesNo,
        [System.Windows.Forms.MessageBoxIcon]::Warning,
        [System.Windows.Forms.MessageBoxDefaultButton]::Button2
      )
      if ($choice -ne [System.Windows.Forms.DialogResult]::Yes) {
        Send-JsonResponse $Stream 200 "OK" @{ ok = $true; cancelled = $true }
        return
      }
    }

    $encoding = [System.Text.UTF8Encoding]::new($false)
    $exported = New-Object System.Collections.Generic.List[string]
    $failures = New-Object System.Collections.Generic.List[object]
    foreach ($file in $safeFiles) {
      try {
        [System.IO.File]::WriteAllText((Join-Path $destinationPath $file.name), $file.content, $encoding)
        $exported.Add($file.name)
      } catch {
        $failures.Add([pscustomobject]@{ name = $file.name; error = $_.Exception.Message })
      }
    }
    Send-JsonResponse $Stream 200 "OK" @{
      ok = $true
      cancelled = $false
      destination = $destinationPath
      exported = @($exported)
      failures = @($failures)
    }
  } catch {
    Send-JsonResponse $Stream 400 "Bad Request" @{ ok = $false; error = $_.Exception.Message }
  }
}

function Send-RobotCometVariable {
  param(
    [string]$HtcgOrigin,
    [string]$ProgramName,
    [string]$VariableName,
    [string]$Value
  )

  if ([string]::IsNullOrWhiteSpace($ProgramName) -or [string]::IsNullOrWhiteSpace($VariableName)) {
    throw "Invalid robot variable write request."
  }
  $encodedProgram = [System.Uri]::EscapeDataString($ProgramName)
  $encodedVariable = [System.Uri]::EscapeDataString($VariableName)
  $encodedValue = [System.Uri]::EscapeDataString($Value)
  $sequence = [DateTimeOffset]::UtcNow.ToUnixTimeMilliseconds()
  $path = "/COMET/rpc?func=VMIP_WRITEVA&prog_name=$encodedProgram&var_name=$encodedVariable&value=$encodedValue&_=$sequence"
  $resultText = Get-RobotRawTextPage $HtcgOrigin $path 15000
  try {
    $result = $resultText | ConvertFrom-Json
  } catch {
    throw "The robot returned an invalid response to the variable write."
  }
  $rpc = @($result.FANUC.RPC)[0]
  if ($null -eq $rpc -or [string]$rpc.status -notin @("0", "0x0")) {
    $message = if ($null -ne $rpc -and $rpc.message) { [string]$rpc.message } else { "Unknown controller error." }
    throw "The robot rejected the variable write: $message"
  }
}

function Send-RobotIoValue {
  param(
    [string]$HtcgOrigin,
    [int]$IoType,
    [int]$Index,
    [int]$Value
  )

  if ($IoType -lt 1 -or $Index -lt 1 -or $Value -notin @(0, 1)) {
    throw "Invalid robot I/O write request."
  }
  $sequence = [DateTimeOffset]::UtcNow.ToUnixTimeMilliseconds()
  $path = "/COMET/rpc?func=IOVALSET&type=$IoType&index=$Index&value=$Value&_=$sequence"
  $resultText = Get-RobotRawTextPage $HtcgOrigin $path 15000
  try {
    $result = $resultText | ConvertFrom-Json
  } catch {
    throw "The robot returned an invalid response to the I/O write."
  }
  $rpc = @($result.FANUC.RPC)[0]
  if ($null -eq $rpc -or [string]$rpc.status -notin @("0", "0x0")) {
    $message = if ($null -ne $rpc -and $rpc.message) { [string]$rpc.message } else { "Unknown controller error." }
    throw "The robot rejected the I/O write: $message"
  }
}

function ConvertTo-RobotPositionRegisterCometValue {
  param([string]$FormattedBlock)

  $value = [regex]::Replace($FormattedBlock, '(?s)^\s*\[\d+,\d+\]\s*=\s*', '', 1)
  if ([string]::IsNullOrWhiteSpace($value)) { throw "Position Register write data is empty." }
  return $value
}

function Handle-RobotCommentRequest {
  param(
    [System.Net.Sockets.NetworkStream]$Stream,
    [string]$Target,
    [string]$RequestBody
  )

  try {
    $payload = $RequestBody | ConvertFrom-Json
    $connection = Get-RobotConnectionInfo ([string]$payload.robotAddress)

    if ($Target -eq "/robot-comments/read") {
      $pages = @()
      $ioComments = $null
      foreach ($category in @($payload.categories)) {
        $readCode = [string]$category.readCode
        if ($readCode -notmatch "^\d+$") { throw "Invalid robot comment read code." }
        $range = [string]$category.range
        if ($range -and $range -notmatch "^&[A-Za-z0-9_=&%-]*$") { throw "Invalid robot comment range." }
        $directItems = $null
        $limit = 24
        $source = "COMGET"
        if ($readCode -eq "28") {
          $directItems = @(ConvertFrom-RobotNumericRegisterText (Get-RobotNumericRegisterText $connection.FtpHost $connection.HttpOrigin) | ForEach-Object {
            [pscustomobject]@{ type = "R"; index = $_.index; comment = $_.comment; state = "" }
          })
          $limit = 16
          $source = "NUMREG.VA"
        } elseif ($readCode -eq "80") {
          $directItems = @(ConvertFrom-RobotPositionRegisterText (Get-RobotPositionRegisterText $connection.FtpHost $connection.HttpOrigin) | ForEach-Object {
            [pscustomobject]@{ type = "PR"; index = $_.index; comment = $_.comment; state = "" }
          })
          $limit = 16
          $source = "POSREG.VA"
        } elseif ($readCode -in @("32", "33", "34", "35", "76")) {
          if ($null -eq $ioComments) {
            $ioComments = @(ConvertFrom-RobotIoCommentText (Get-RobotIoStateText $connection.FtpHost $connection.HttpOrigin))
          }
          $types = switch ($readCode) {
            "32" { @("RI", "RO") }
            "33" { @("DI", "DO") }
            "34" { @("GI", "GO") }
            "35" { @("AI", "AO") }
            "76" { @("F") }
          }
          $directItems = @($ioComments | Where-Object { $_.type -in $types })
          $source = "IOSTATE.DG"
        }

        if ($null -ne $directItems) {
          $pages += @{
            readCode = $readCode
            range = $range
            source = $source
            html = ConvertTo-RobotCommentHtml $directItems $limit
          }
          continue
        }

        $pagePath = "/karel/ComGet?sFc=$readCode$range"
        $pages += @{
          readCode = $readCode
          range = $range
          source = $source
          html = Get-RobotRawTextPage $connection.HttpOrigin $pagePath 20000
        }
      }
      Send-JsonResponse $Stream 200 "OK" @{ ok = $true; pages = $pages }
      return
    }

    if ($Target -eq "/robot-comments/set") {
      $comment = [string]$payload.comment
      $index = [int]$payload.index
      $writeCode = [string]$payload.writeCode
      if ($index -lt 1) { throw "Invalid robot comment index." }
      if ($writeCode -notmatch "^\d+$") { throw "Invalid robot comment write code." }
      $encodedComment = [System.Uri]::EscapeDataString($comment)
      $pagePath = "/karel/ComSet?sComment=$encodedComment&sIndx=$index&sFc=$writeCode"
      [void](Get-RobotRawTextPage $connection.HttpOrigin $pagePath 20000)
      Send-JsonResponse $Stream 200 "OK" @{ ok = $true }
      return
    }

    throw "Unsupported robot comment action."
  } catch {
    Send-JsonResponse $Stream 400 "Bad Request" @{ ok = $false; error = $_.Exception.Message }
  }
}

function ConvertTo-RobotPositionNumber {
  param([double]$Value)

  if ([double]::IsNaN($Value) -or [double]::IsInfinity($Value)) {
    throw "Position Register values must be finite numbers."
  }
  return $Value.ToString("0.000", [System.Globalization.CultureInfo]::InvariantCulture)
}

function ConvertTo-RobotPositionXmlNumber {
  param([double]$Value)

  if ([double]::IsNaN($Value) -or [double]::IsInfinity($Value)) {
    throw "Position Register values must be finite numbers."
  }
  return $Value.ToString("0.000000", [System.Globalization.CultureInfo]::InvariantCulture)
}

function ConvertFrom-RobotPositionRegisterText {
  param([string]$Text)

  $normalized = $Text -replace "`r?`n", "`n"
  $registerMatches = [regex]::Matches($normalized, "(?m)^\s*\[(\d+),(\d+)\]\s*=\s*'([^']*)'\s*([^\r\n]*)$")
  $registers = @()
  for ($matchIndex = 0; $matchIndex -lt $registerMatches.Count; $matchIndex++) {
    $match = $registerMatches[$matchIndex]
    $blockEnd = if ($matchIndex + 1 -lt $registerMatches.Count) { $registerMatches[$matchIndex + 1].Index } else { $normalized.Length }
    $block = $normalized.Substring($match.Index, $blockEnd - $match.Index).TrimEnd("`n")
    $group = [int]$match.Groups[1].Value
    $index = [int]$match.Groups[2].Value
    $comment = $match.Groups[3].Value.Trim()
    $uninitialized = $block -match "(?i)\bUninitialized\b"
    $mode = if ($uninitialized) { "uninitialized" } elseif ($block -match "(?m)^\s*J\d+\s*=") { "joint" } else { "cartesian" }
    $values = [ordered]@{}
    foreach ($valueMatch in [regex]::Matches($block, "(?im)\b(J\d+|X|Y|Z|W|P|R)\s*[:=]\s*([+-]?(?:\d+(?:\.\d*)?|\.\d+))")) {
      $value = 0.0
      if ([double]::TryParse($valueMatch.Groups[2].Value, [System.Globalization.NumberStyles]::Float, [System.Globalization.CultureInfo]::InvariantCulture, [ref]$value)) {
        $values[$valueMatch.Groups[1].Value.ToUpperInvariant()] = $value
      }
    }
    $config = "N U T, 0, 0, 0"
    $configMatch = [regex]::Match($block, "(?im)\bConfig:\s*([NF]\s+[UD]\s+[TB]\s*,\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+)")
    if ($configMatch.Success) { $config = [regex]::Replace($configMatch.Groups[1].Value.Trim(), "\s+", " ") }
    $registers += [pscustomobject]@{
      group = $group
      index = $index
      comment = $comment
      mode = $mode
      config = $config
      values = [pscustomobject]$values
    }
  }
  return @($registers)
}

function Get-RobotPositionRegisterText {
  param(
    [string]$HostName,
    [string]$HttpOrigin = ""
  )

  if (-not [string]::IsNullOrWhiteSpace($HttpOrigin)) {
    try {
      return Get-RobotRawTextPage $HttpOrigin "/MD/POSREG.VA" 15000
    } catch {
      # Older controllers may not publish POSREG.VA over HTTP; retain FTP as a read fallback.
    }
  }
  $bytes = Get-RobotFtpFile $HostName "POSREG.VA"
  return [System.Text.Encoding]::ASCII.GetString($bytes)
}

function Get-RobotNumericRegisterText {
  param(
    [string]$HostName,
    [string]$HttpOrigin = ""
  )

  if (-not [string]::IsNullOrWhiteSpace($HttpOrigin)) {
    try {
      return Get-RobotRawTextPage $HttpOrigin "/MD/NUMREG.VA" 15000
    } catch {
      # Older controllers may not publish NUMREG.VA over HTTP; retain FTP as a read fallback.
    }
  }
  $bytes = Get-RobotFtpFile $HostName "NUMREG.VA"
  return [System.Text.Encoding]::ASCII.GetString($bytes)
}

function Get-RobotIoStateText {
  param(
    [string]$HostName,
    [string]$HttpOrigin = ""
  )

  if (-not [string]::IsNullOrWhiteSpace($HttpOrigin)) {
    try {
      return Get-RobotRawTextPage $HttpOrigin "/MD/IOSTATE.DG" 15000
    } catch {
      # Retain FTP as a fallback for controllers that do not publish IOSTATE.DG over HTTP.
    }
  }
  $bytes = Get-RobotFtpFile $HostName "IOSTATE.DG"
  return [System.Text.Encoding]::ASCII.GetString($bytes)
}

function ConvertFrom-RobotNumericRegisterText {
  param([string]$Text)

  $registers = @()
  $normalized = [System.Net.WebUtility]::HtmlDecode(([string]$Text)) -replace "`r?`n", "`n"
  foreach ($rawLine in @($normalized -split "`n")) {
    $line = $rawLine.Trim()
    if (-not $line) { continue }
    $match = [regex]::Match($line, "^\s*\[(\d+)\]\s*=\s*([-+]?(?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][-+]?\d+)?)\s*(?:'([^']*)')?", [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)
    if (-not $match.Success) {
      $match = [regex]::Match($line, "^\s*R\[(\d+)(?::([^\]]*))?\]\s*[:=]\s*([-+]?(?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][-+]?\d+)?)", [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)
      if ($match.Success) {
        $registers += [pscustomobject]@{
          index = [int]$match.Groups[1].Value
          value = [double]$match.Groups[3].Value
          comment = $match.Groups[2].Value.Trim()
        }
      }
      continue
    }
    $registers += [pscustomobject]@{
      index = [int]$match.Groups[1].Value
      value = [double]$match.Groups[2].Value
      comment = $match.Groups[3].Value.Trim()
    }
  }
  return @($registers | Sort-Object index)
}

function ConvertFrom-RobotFlagStateText {
  param([string]$Text)

  $flags = @()
  $withoutTags = [regex]::Replace([string]$Text, "<[^>]+>", " ")
  $normalized = [System.Net.WebUtility]::HtmlDecode($withoutTags) -replace "`r?`n", "`n"
  foreach ($rawLine in @($normalized -split "`n")) {
    $matches = @([regex]::Matches($rawLine, "\bFLG\[\s*(\d+)\]\s+(ON|OFF)\b", [System.Text.RegularExpressions.RegexOptions]::IgnoreCase))
    for ($matchIndex = 0; $matchIndex -lt $matches.Count; $matchIndex++) {
      $match = $matches[$matchIndex]
      $commentStart = $match.Index + $match.Length
      $commentEnd = if ($matchIndex + 1 -lt $matches.Count) { $matches[$matchIndex + 1].Index } else { $rawLine.Length }
      $comment = if ($commentEnd -gt $commentStart) { $rawLine.Substring($commentStart, $commentEnd - $commentStart).Trim() } else { "" }
      $flags += [pscustomobject]@{
        index = [int]$match.Groups[1].Value
        state = $match.Groups[2].Value.ToUpperInvariant()
        comment = $comment
      }
    }
  }
  return @($flags | Sort-Object index)
}

function ConvertFrom-RobotIoCommentText {
  param([string]$Text)

  $typeMap = @{
    DIN = "DI"
    DOUT = "DO"
    GIN = "GI"
    GOUT = "GO"
    AIN = "AI"
    AOUT = "AO"
    RI = "RI"
    RO = "RO"
    FLG = "F"
  }
  $items = @()
  $withoutTags = [regex]::Replace([string]$Text, "<[^>]+>", " ")
  $normalized = [System.Net.WebUtility]::HtmlDecode($withoutTags) -replace "`r?`n", "`n"
  foreach ($rawLine in @($normalized -split "`n")) {
    $matches = @([regex]::Matches(
      $rawLine,
      "\b(DIN|DOUT|GIN|GOUT|AIN|AOUT|RI|RO|FLG)\[\s*(\d+)\]\s+(ON|OFF|[-+]?(?:\d+(?:\.\d*)?|\.\d+))\b",
      [System.Text.RegularExpressions.RegexOptions]::IgnoreCase
    ))
    for ($matchIndex = 0; $matchIndex -lt $matches.Count; $matchIndex++) {
      $match = $matches[$matchIndex]
      $commentStart = $match.Index + $match.Length
      $commentEnd = if ($matchIndex + 1 -lt $matches.Count) { $matches[$matchIndex + 1].Index } else { $rawLine.Length }
      $comment = if ($commentEnd -gt $commentStart) { $rawLine.Substring($commentStart, $commentEnd - $commentStart).Trim() } else { "" }
      $robotType = $match.Groups[1].Value.ToUpperInvariant()
      $items += [pscustomobject]@{
        type = $typeMap[$robotType]
        index = [int]$match.Groups[2].Value
        state = $match.Groups[3].Value.ToUpperInvariant()
        comment = $comment
      }
    }
  }
  return @($items | Sort-Object type, index)
}

function ConvertTo-RobotCommentHtml {
  param(
    [object[]]$Items,
    [int]$Limit
  )

  $rows = @($Items | ForEach-Object {
    $type = [System.Net.WebUtility]::HtmlEncode([string]$_.type)
    $index = [int]$_.index
    $state = [System.Net.WebUtility]::HtmlEncode([string]$_.state)
    $comment = [System.Net.WebUtility]::HtmlEncode([string]$_.comment)
    $reference = "${type}[$index]"
    "<tr><td>$reference $state</td><td><input name=`"strComment$index`" maxlength=`"$Limit`" value=`"$comment`"></td></tr>"
  })
  return "<table><tbody>$($rows -join '')</tbody></table>"
}

function Find-RobotNumericRegister {
  param(
    [object[]]$Registers,
    [int]$Index
  )

  return $Registers | Where-Object { [int]$_.index -eq $Index } | Select-Object -First 1
}

function ConvertTo-RobotNumericRegisterValueText {
  param([double]$Value)

  if ([double]::IsNaN($Value) -or [double]::IsInfinity($Value)) { throw "Numeric Register value must be a finite number." }
  return $Value.ToString("0.###############", [System.Globalization.CultureInfo]::InvariantCulture)
}

function Handle-RobotNumericRegisterRequest {
  param(
    [System.Net.Sockets.NetworkStream]$Stream,
    [string]$Target,
    [string]$RequestBody
  )

  try {
    $payload = $RequestBody | ConvertFrom-Json
    $connection = Get-RobotConnectionInfo ([string]$payload.robotAddress)
    $text = Get-RobotNumericRegisterText $connection.FtpHost $connection.HttpOrigin
    $registers = @(ConvertFrom-RobotNumericRegisterText $text)
    if ($Target -eq "/robot-numeric-registers/read") {
      Send-JsonResponse $Stream 200 "OK" @{
        ok = $true
        registers = $registers
        count = $registers.Count
        capturedAt = (Get-Date).ToUniversalTime().ToString("o")
      }
      return
    }

    if ($Target -eq "/robot-numeric-registers/set") {
      $index = [int]$payload.register.index
      $value = [double]$payload.register.value
      if ($index -lt 1) { throw "Invalid Numeric Register index." }
      $original = Find-RobotNumericRegister $registers $index
      if ($null -eq $original) { throw "R[$index] was not found on the online robot." }
      $valueText = ConvertTo-RobotNumericRegisterValueText $value
      $htcgOrigin = Get-RobotHtcgOrigin $connection.HttpOrigin

      $writeErrors = @()
      $writeSucceeded = $false
      foreach ($programName in @("*NUMREG*", "*SYSTEM*")) {
        try {
          Send-RobotCometVariable $htcgOrigin $programName "`$NUMREG[$index]" $valueText
          $writeSucceeded = $true
          break
        } catch {
          $writeErrors += "${programName}: $($_.Exception.Message)"
        }
      }
      if (-not $writeSucceeded) {
        throw "Numeric Register write failed. $($writeErrors -join ' ')"
      }

      $actual = $null
      foreach ($delay in @(150, 350, 750)) {
        Start-Sleep -Milliseconds $delay
        $verified = @(ConvertFrom-RobotNumericRegisterText (Get-RobotNumericRegisterText $connection.FtpHost $connection.HttpOrigin))
        $actual = Find-RobotNumericRegister $verified $index
        if ($null -ne $actual -and [Math]::Abs([double]$actual.value - $value) -le 0.000001) { break }
      }
      if ($null -eq $actual -or [Math]::Abs([double]$actual.value - $value) -gt 0.000001) {
        $actualText = if ($null -eq $actual) { "not found" } else { [string]$actual.value }
        throw "The controller did not report R[$index] = $valueText after the live write (actual: $actualText)."
      }

      Send-JsonResponse $Stream 200 "OK" @{ ok = $true; register = $actual }
      return
    }

    throw "Unsupported Numeric Register action."
  } catch {
    Send-JsonResponse $Stream 400 "Bad Request" @{ ok = $false; error = $_.Exception.Message }
  }
}

function Handle-RobotFlagRequest {
  param(
    [System.Net.Sockets.NetworkStream]$Stream,
    [string]$Target,
    [string]$RequestBody
  )

  try {
    $payload = $RequestBody | ConvertFrom-Json
    $connection = Get-RobotConnectionInfo ([string]$payload.robotAddress)
    $text = Get-RobotIoStateText $connection.FtpHost $connection.HttpOrigin
    $flags = @(ConvertFrom-RobotFlagStateText $text)
    if ($Target -eq "/robot-flags/read") {
      Send-JsonResponse $Stream 200 "OK" @{
        ok = $true
        flags = $flags
        count = $flags.Count
        capturedAt = (Get-Date).ToUniversalTime().ToString("o")
      }
      return
    }

    if ($Target -eq "/robot-flags/set") {
      $index = [int]$payload.flag.index
      $state = ([string]$payload.flag.state).Trim().ToUpperInvariant()
      if ($index -lt 1) { throw "Invalid Flag index." }
      if ($state -notin @("ON", "OFF")) { throw "Flag state must be ON or OFF." }
      $original = $flags | Where-Object { [int]$_.index -eq $index } | Select-Object -First 1
      if ($null -eq $original) { throw "F[$index] was not found on the online robot." }

      $htcgOrigin = Get-RobotHtcgOrigin $connection.HttpOrigin
      Send-RobotIoValue $htcgOrigin 35 $index $(if ($state -eq "ON") { 1 } else { 0 })

      $actual = $null
      foreach ($delay in @(150, 350, 750)) {
        Start-Sleep -Milliseconds $delay
        $verified = @(ConvertFrom-RobotFlagStateText (Get-RobotIoStateText $connection.FtpHost $connection.HttpOrigin))
        $actual = $verified | Where-Object { [int]$_.index -eq $index } | Select-Object -First 1
        if ($null -ne $actual -and [string]$actual.state -eq $state) { break }
      }
      if ($null -eq $actual -or [string]$actual.state -ne $state) {
        $actualText = if ($null -eq $actual) { "not found" } else { [string]$actual.state }
        throw "The controller did not report F[$index] = $state after the live write (actual: $actualText)."
      }

      Send-JsonResponse $Stream 200 "OK" @{ ok = $true; flag = $actual }
      return
    }

    throw "Unsupported Flag action."
  } catch {
    Send-JsonResponse $Stream 400 "Bad Request" @{ ok = $false; error = $_.Exception.Message }
  }
}

function Format-RobotPositionRegisterBlock {
  param(
    [int]$Group,
    [int]$Index,
    [string]$Comment,
    [string]$Mode,
    [object]$Values,
    [string]$Config
  )

  if ($Group -lt 1 -or $Index -lt 1) { throw "Invalid Position Register group or index." }
  $safeComment = ([string]$Comment).Trim()
  if ($safeComment.Length -gt 16) { throw "Position Register comments are limited to 16 characters." }
  if ($safeComment.Contains("'")) { throw "Position Register comments cannot contain an apostrophe." }
  if ($Mode -notin @("joint", "cartesian")) { throw "Position Register mode must be joint or cartesian." }

  if ($Mode -eq "joint") {
    $axes = @($Values.PSObject.Properties.Name | Where-Object { $_ -match '^J\d+$' } | Sort-Object { [int]($_.Substring(1)) })
    if ($axes.Count -lt 1) { throw "At least one joint value is required." }
    $valueParts = foreach ($axis in $axes) {
      $number = [double]$Values.$axis
      "{0} = {1,10} deg" -f $axis, (ConvertTo-RobotPositionNumber $number)
    }
    $lines = @("    [$Group,$Index] =   '$safeComment'   Group: $Group")
    for ($offset = 0; $offset -lt $valueParts.Count; $offset += 3) {
      $last = [Math]::Min($offset + 2, $valueParts.Count - 1)
      $lines += "  " + (($valueParts[$offset..$last]) -join "   ") + " "
    }
    return ($lines -join "`r`n")
  }

  $configText = [regex]::Replace(([string]$Config).Trim(), "\s+", " ")
  if ($configText -notmatch '^[NF] [UD] [TB], -?\d+, -?\d+, -?\d+$') {
    throw "Invalid Cartesian configuration."
  }
  $requiredAxes = @("X", "Y", "Z", "W", "P", "R")
  foreach ($axis in $requiredAxes) {
    if ($null -eq $Values.PSObject.Properties[$axis]) { throw "Missing $axis value." }
  }
  $lines = @(
    "    [$Group,$Index] =   '$safeComment' "
    "  Group: $Group   Config: $configText"
    ("  X: {0,9}   Y: {1,9}   Z: {2,9}" -f (ConvertTo-RobotPositionNumber ([double]$Values.X)), (ConvertTo-RobotPositionNumber ([double]$Values.Y)), (ConvertTo-RobotPositionNumber ([double]$Values.Z)))
    ("  W: {0,9}   P: {1,9}   R: {2,9}" -f (ConvertTo-RobotPositionNumber ([double]$Values.W)), (ConvertTo-RobotPositionNumber ([double]$Values.P)), (ConvertTo-RobotPositionNumber ([double]$Values.R)))
  )
  return ($lines -join "`r`n")
}

function Format-RobotPositionRegisterXml {
  param(
    [int]$Group,
    [int]$Index,
    [string]$Mode,
    [object]$Values,
    [string]$Config,
    [switch]$AllowUninitialized
  )

  if ($Group -lt 1 -or $Index -lt 1) { throw "Invalid Position Register group or index." }
  if ($Mode -eq "uninitialized" -and $AllowUninitialized) {
    return "<?xml version=`"1.0`" encoding=`"UTF-8`"?>`r<XMLVAR>`r <PROG name=`"*POSREG*`">`r  <ARRAY name = `"`$POSREG[$Group,$Index]`" prot = `"RW`" force =`"TRUE`">********</ARRAY>`r </PROG>`r</XMLVAR>"
  }
  if ($Mode -notin @("joint", "cartesian")) { throw "Position Register mode must be joint or cartesian." }

  $lines = @(
    '<?xml version="1.0" encoding="UTF-8"?>'
    '<XMLVAR>'
    ' <PROG name="*POSREG*">'
    "  <ARRAY name = `"`$POSREG[$Group,$Index]`" prot = `"RW`">"
  )

  if ($Mode -eq "cartesian") {
    $configText = [regex]::Replace(([string]$Config).Trim(), "\s+", " ")
    if ($configText -notmatch '^[NF] [UD] [TB], -?\d+, -?\d+, -?\d+$') {
      throw "Invalid Cartesian configuration."
    }
    foreach ($axis in @("X", "Y", "Z", "W", "P", "R")) {
      if ($null -eq $Values.PSObject.Properties[$axis]) { throw "Missing $axis value." }
    }
    $lines += "  gnum: $Group rep: 2 axes: 6 utool: 255 uframe: 255 Config: $configText"
    $lines += "  X:   $(ConvertTo-RobotPositionXmlNumber ([double]$Values.X))   Y:     $(ConvertTo-RobotPositionXmlNumber ([double]$Values.Y))   Z:   $(ConvertTo-RobotPositionXmlNumber ([double]$Values.Z))"
    $lines += "  W:   $(ConvertTo-RobotPositionXmlNumber ([double]$Values.W))   P:     $(ConvertTo-RobotPositionXmlNumber ([double]$Values.P))   R:   $(ConvertTo-RobotPositionXmlNumber ([double]$Values.R))"
  } else {
    $axes = @($Values.PSObject.Properties.Name | Where-Object { $_ -match '^J\d+$' } | Sort-Object { [int]($_.Substring(1)) })
    if ($axes.Count -lt 1) { throw "At least one joint value is required." }
    for ($axisIndex = 0; $axisIndex -lt $axes.Count; $axisIndex++) {
      if ($axes[$axisIndex] -ne "J$($axisIndex + 1)") { throw "Joint Position Register axes must be sequential starting at J1." }
    }
    $lines += "  gnum: $Group rep: 9 axes: $($axes.Count) utool: 255 uframe: 255 Config: "
    for ($offset = 0; $offset -lt $axes.Count; $offset += 3) {
      $last = [Math]::Min($offset + 2, $axes.Count - 1)
      $parts = foreach ($axis in $axes[$offset..$last]) {
        "$axis = $(ConvertTo-RobotPositionXmlNumber ([double]$Values.$axis) ) deg"
      }
      $lines += "  " + ($parts -join " ") + " "
    }
  }

  $lines += @('  </ARRAY>', ' </PROG>', '</XMLVAR>')
  return ($lines -join "`r")
}

function Set-RobotPositionRegisterComment {
  param(
    [string]$HttpOrigin,
    [int]$Index,
    [string]$Comment
  )

  $encodedComment = [System.Uri]::EscapeDataString($Comment)
  [void](Get-RobotRawTextPage $HttpOrigin "/karel/ComSet?sComment=$encodedComment&sIndx=$Index&sFc=3" 20000)
}

function Update-RobotPositionRegisterText {
  param(
    [string]$Text,
    [int]$Group,
    [int]$Index,
    [string]$Replacement
  )

  $normalized = $Text -replace "`r?`n", "`n"
  $registerMatches = [regex]::Matches($normalized, "(?m)^\s*\[(\d+),(\d+)\]\s*=\s*'([^']*)'\s*([^\r\n]*)$")
  for ($matchIndex = 0; $matchIndex -lt $registerMatches.Count; $matchIndex++) {
    $match = $registerMatches[$matchIndex]
    if ([int]$match.Groups[1].Value -ne $Group -or [int]$match.Groups[2].Value -ne $Index) { continue }
    $blockEnd = if ($matchIndex + 1 -lt $registerMatches.Count) { $registerMatches[$matchIndex + 1].Index } else { $normalized.Length }
    $prefix = $normalized.Substring(0, $match.Index)
    $suffix = $normalized.Substring($blockEnd)
    $updated = $prefix + ($Replacement -replace "`r?`n", "`n") + "`n" + $suffix.TrimStart("`n")
    return ($updated -replace "`n", "`r`n")
  }
  throw "PR[$Index] was not found in group $Group."
}

function Test-RobotPositionRegisterMatch {
  param([object]$Actual, [object]$Expected)

  if ($null -eq $Actual) { return $false }
  if ([string]$Actual.comment -ne [string]$Expected.comment -or [string]$Actual.mode -ne [string]$Expected.mode) { return $false }
  if ($Expected.mode -eq "cartesian" -and [string]$Actual.config -ne [string]$Expected.config) { return $false }
  foreach ($property in $Expected.values.PSObject.Properties) {
    $actualProperty = $Actual.values.PSObject.Properties[$property.Name]
    if ($null -eq $actualProperty -or [Math]::Abs([double]$actualProperty.Value - [double]$property.Value) -gt 0.001) { return $false }
  }
  return $true
}

function Handle-RobotPositionRegisterRequest {
  param(
    [System.Net.Sockets.NetworkStream]$Stream,
    [string]$Target,
    [string]$RequestBody
  )

  try {
    $payload = $RequestBody | ConvertFrom-Json
    $connection = Get-RobotConnectionInfo ([string]$payload.robotAddress)
    $currentText = Get-RobotPositionRegisterText $connection.FtpHost $connection.HttpOrigin
    $registers = @(ConvertFrom-RobotPositionRegisterText $currentText)

    if ($Target -eq "/robot-position-registers/read") {
      Send-JsonResponse $Stream 200 "OK" @{ ok = $true; registers = $registers; count = $registers.Count }
      return
    }

    if ($Target -eq "/robot-position-registers/set") {
      $group = [int]$payload.register.group
      $index = [int]$payload.register.index
      $mode = ([string]$payload.register.mode).ToLowerInvariant()
      $comment = [string]$payload.register.comment
      $config = [string]$payload.register.config
      $writeXml = Format-RobotPositionRegisterXml $group $index $mode $payload.register.values $config
      $normalizedConfig = if ($mode -eq "cartesian") { [regex]::Replace($config.Trim(), "\s+", " ") } else { $config }
      $expected = [pscustomobject]@{ group = $group; index = $index; comment = $comment.Trim(); mode = $mode; config = $normalizedConfig; values = $payload.register.values }
      $original = $registers | Where-Object { $_.group -eq $group -and $_.index -eq $index } | Select-Object -First 1
      if ($null -eq $original) { throw "PR[$index] was not found in group $group." }
      $htcgOrigin = Get-RobotHtcgOrigin $connection.HttpOrigin

      try {
        Send-RobotXmlVariablePayload $htcgOrigin $writeXml
        if ([string]$original.comment -ne $comment.Trim()) {
          Set-RobotPositionRegisterComment $connection.HttpOrigin $index $comment.Trim()
        }

        $actual = $null
        foreach ($delay in @(250, 500, 750)) {
          Start-Sleep -Milliseconds $delay
          $verifiedRegisters = @(ConvertFrom-RobotPositionRegisterText (Get-RobotPositionRegisterText $connection.FtpHost $connection.HttpOrigin))
          $actual = $verifiedRegisters | Where-Object { $_.group -eq $group -and $_.index -eq $index } | Select-Object -First 1
          if (Test-RobotPositionRegisterMatch $actual $expected) { break }
        }
        if (-not (Test-RobotPositionRegisterMatch $actual $expected)) {
          throw "The controller did not report the requested Position Register values after the live write."
        }
      } catch {
        $writeError = $_.Exception.Message
        $rollbackError = ""
        try {
          if ([string]$original.mode -eq "uninitialized") {
            $rollbackXml = Format-RobotPositionRegisterXml ([int]$original.group) ([int]$original.index) "uninitialized" $original.values ([string]$original.config) -AllowUninitialized
          } else {
            $rollbackXml = Format-RobotPositionRegisterXml ([int]$original.group) ([int]$original.index) ([string]$original.mode) $original.values ([string]$original.config)
          }
          Send-RobotXmlVariablePayload $htcgOrigin $rollbackXml
          if ([string]$original.comment -ne $comment.Trim()) {
            Set-RobotPositionRegisterComment $connection.HttpOrigin ([int]$original.index) ([string]$original.comment)
          }
        } catch {
          $rollbackError = " Rollback also failed: $($_.Exception.Message)"
        }
        throw "Position Register write failed: $writeError$rollbackError"
      }

      Send-JsonResponse $Stream 200 "OK" @{ ok = $true; register = $actual }
      return
    }

    throw "Unsupported Position Register action."
  } catch {
    Send-JsonResponse $Stream 400 "Bad Request" @{ ok = $false; error = $_.Exception.Message }
  }
}
function Handle-RobotLiveStateRequest {
  param(
    [System.Net.Sockets.NetworkStream]$Stream,
    [string]$RequestBody
  )

  try {
    $payload = $RequestBody | ConvertFrom-Json
    $connection = Get-RobotConnectionInfo ([string]$payload.robotAddress)
    $position = Get-RobotPositionSnapshot $connection.HttpOrigin
    $position.robotAddress = $connection.HttpOrigin
    $summary = $null
    $alarms = @()
    $warnings = @()
    try {
      $summary = Get-RobotSummarySnapshot $connection.HttpOrigin
    } catch {
      $warnings += "Summary unavailable: $($_.Exception.Message)"
    }
    try {
      $alarms = @(Get-RobotAlarmSnapshot $connection.HttpOrigin)
    } catch {
      $warnings += "Alarms unavailable: $($_.Exception.Message)"
    }
    Send-JsonResponse $Stream 200 "OK" @{
      ok = $true
      capturedAt = [DateTime]::UtcNow.ToString("o")
      robotAddress = $connection.HttpOrigin
      position = $position
      summary = $summary
      alarms = $alarms
      warnings = $warnings
    }
  } catch {
    Send-JsonResponse $Stream 400 "Bad Request" @{ ok = $false; error = $_.Exception.Message }
  }
}
function Handle-RobotOptionsRequest {
  param(
    [System.Net.Sockets.NetworkStream]$Stream,
    [string]$RequestBody
  )

  try {
    $payload = $RequestBody | ConvertFrom-Json
    $connection = Get-RobotConnectionInfo ([string]$payload.robotAddress)
    $snapshot = Get-RobotOptionsSnapshot $connection.HttpOrigin
    Send-JsonResponse $Stream 200 "OK" @{
      ok = $true
      capturedAt = [DateTime]::UtcNow.ToString("o")
      robotAddress = $connection.HttpOrigin
      controller = $snapshot.controller
      options = @($snapshot.options)
    }
  } catch {
    Send-JsonResponse $Stream 400 "Bad Request" @{ ok = $false; error = $_.Exception.Message }
  }
}
function Handle-RobotHeartbeatRequest {
  param(
    [System.Net.Sockets.NetworkStream]$Stream,
    [string]$RequestBody
  )

  try {
    $payload = $RequestBody | ConvertFrom-Json
    $connection = Get-RobotConnectionInfo ([string]$payload.robotAddress)
    [void](Get-RobotRawTextPage $connection.HttpOrigin "/MD/CURPOS.DG" 10000)
    Send-JsonResponse $Stream 200 "OK" @{
      ok = $true
      capturedAt = [DateTime]::UtcNow.ToString("o")
      robotAddress = $connection.HttpOrigin
    }
  } catch {
    Send-JsonResponse $Stream 400 "Bad Request" @{ ok = $false; error = $_.Exception.Message }
  }
}
function Handle-RobotProgramMonitorRequest {
  param(
    [System.Net.Sockets.NetworkStream]$Stream,
    [string]$RequestBody
  )

  try {
    $payload = $RequestBody | ConvertFrom-Json
    $connection = Get-RobotConnectionInfo ([string]$payload.robotAddress)
    $snapshot = Get-RobotProgramMonitorSnapshot $connection.HttpOrigin
    Send-JsonResponse $Stream 200 "OK" $snapshot
  } catch {
    Send-JsonResponse $Stream 400 "Bad Request" @{ ok = $false; error = $_.Exception.Message }
  }
}
function Get-ByteHash {
  param([byte[]]$Bytes)

  $sha = [System.Security.Cryptography.SHA256]::Create()
  try {
    return [System.BitConverter]::ToString($sha.ComputeHash($Bytes))
  } finally {
    $sha.Dispose()
  }
}

function Get-RobotAsciiLoaderErrors {
  param([string]$HttpOrigin)

  $request = [System.Net.HttpWebRequest]::Create("$HttpOrigin/MD/ERRALL.LS")
  $request.Method = "GET"
  $request.Timeout = 15000
  $response = $request.GetResponse()
  try {
    $reader = [System.IO.StreamReader]::new($response.GetResponseStream())
    try {
      $content = $reader.ReadToEnd()
      return @([regex]::Matches($content, "(?m)^[^\r\n]*ASBN-\d+[^\r\n]*$") | ForEach-Object {
        $line = $_.Value
        $timestamp = [regex]::Match($line, "\d{2}-[A-Z]{3}-\d{2}\s+\d{2}:\d{2}:\d{2}").Value
        $messages = @([regex]::Matches($line, "ASBN-\d+\s+[^`"]+") | ForEach-Object {
          ($_.Value -replace "\s+$", "")
        })
        (@($timestamp) + $messages | Where-Object { $_ }) -join " | "
      } | Select-Object -Unique)
    } finally {
      $reader.Dispose()
    }
  } finally {
    $response.Dispose()
  }
}

function Test-AsciiProgramLoader {
  param([string]$HttpOrigin)

  $request = [System.Net.HttpWebRequest]::Create("$HttpOrigin/MD/SUMMARY.DG?_TEMPLATE=FRS:SUMMTMP")
  $request.Method = "GET"
  $request.Timeout = 15000
  $response = $request.GetResponse()
  try {
    $reader = [System.IO.StreamReader]::new($response.GetResponseStream())
    try {
      return $reader.ReadToEnd() -match "Ascii Program Loader"
    } finally {
      $reader.Dispose()
    }
  } finally {
    $response.Dispose()
  }
}

function Handle-RobotExportRequest {
  param(
    [System.Net.Sockets.NetworkStream]$Stream,
    [string]$Target,
    [string]$RequestBody
  )

  try {
    $payload = $RequestBody | ConvertFrom-Json
    $connection = Get-RobotConnectionInfo ([string]$payload.robotAddress)

    if ($Target -eq "/robot-export/preflight") {
      $ftpAvailable = $false
      $ftpMessage = ""
      $existingFiles = @()
      try {
        $existingFiles = @(Get-RobotFtpFiles $connection.FtpHost)
        $ftpAvailable = $true
        $ftpMessage = "FTP connection succeeded and the robot file directory was inventoried."
      } catch {
        $ftpMessage = $_.Exception.Message
      }

      $asciiProgramLoader = $false
      $asciiMessage = ""
      try {
        $asciiProgramLoader = Test-AsciiProgramLoader $connection.HttpOrigin
        $asciiMessage = if ($asciiProgramLoader) {
          "The robot reports the ASCII Program Loader option."
        } else {
          "The robot did not report the ASCII Program Loader option."
        }
      } catch {
        $asciiMessage = $_.Exception.Message
      }

      Send-JsonResponse $Stream 200 "OK" @{
        ok = $true
        ready = ($ftpAvailable -and $asciiProgramLoader)
        canImport = $ftpAvailable
        canExport = ($ftpAvailable -and $asciiProgramLoader)
        ftpHost = $connection.FtpHost
        requirements = @{
          ftpInterface = @{
            available = $ftpAvailable
            message = $ftpMessage
          }
          asciiProgramLoader = @{
            available = $asciiProgramLoader
            message = $asciiMessage
          }
        }
        files = $existingFiles
      }
      return
    }

    if (-not (Test-AsciiProgramLoader $connection.HttpOrigin)) {
      throw "The robot did not report the ASCII Program Loader option."
    }
    $existingFiles = @(Get-RobotFtpFiles $connection.FtpHost)

    $results = @()
    foreach ($file in @($payload.files)) {
      $name = ([string]$file.name).ToUpperInvariant()
      if ($name -notmatch "^[A-Z][A-Z0-9_]{0,35}\.LS$") {
        $results += @{ name = $name; success = $false; tpPresent = $false; error = "Invalid FANUC LS filename." }
        continue
      }
      $tpName = $name.Substring(0, $name.Length - 3) + ".TP"
      $programName = $name.Substring(0, $name.Length - 3)
      $existingProgram = ($existingFiles -contains $name -or $existingFiles -contains $tpName)
      $overwriteAuthorized = [bool]$payload.allowOverwrite -and [bool]$file.allowOverwrite
      if (-not $overwriteAuthorized -and $existingProgram) {
        $results += @{ name = $name; success = $false; tpPresent = ($existingFiles -contains $tpName); error = "This existing robot program was not authorized for replacement. Enable overwrite, select it again, and confirm the replacement warning." }
        continue
      }
      try {
        $compatibleLs = $null
        $beforeErrors = @(Get-RobotAsciiLoaderErrors $connection.HttpOrigin)
        $beforeTpHash = ""
        if ($existingFiles -contains $tpName) {
          try {
            $beforeTpHash = Get-ByteHash (Get-RobotFtpFile $connection.FtpHost $tpName)
          } catch {
          }
        }
        $compatibleLs = ConvertTo-RobotCompatibleLs ([string]$file.content)
        Send-RobotFtpFile $connection.FtpHost $name ([string]$compatibleLs.content)
        $verifiedFiles = @()
        $tpPresent = $false
        $tpUpdated = $false
        for ($attempt = 1; $attempt -le 10; $attempt++) {
          Start-Sleep -Milliseconds 750
          $verifiedFiles = @(Get-RobotFtpFiles $connection.FtpHost)
          $tpPresent = $verifiedFiles -contains $tpName
          if ($tpPresent) {
            if (-not $beforeTpHash) {
              $tpUpdated = $true
              break
            }
            try {
              $tpUpdated = (Get-ByteHash (Get-RobotFtpFile $connection.FtpHost $tpName)) -ne $beforeTpHash
              if ($tpUpdated) { break }
            } catch {
            }
          }
        }
        $afterErrors = @(Get-RobotAsciiLoaderErrors $connection.HttpOrigin)
        $newErrors = @($afterErrors | Where-Object { $beforeErrors -notcontains $_ } | Select-Object -First 3)
        if (($newErrors -join " ") -notmatch [regex]::Escape($programName)) { $newErrors = @() }
        $lsPresent = $verifiedFiles -contains $name
        $results += @{
          name = $name
          success = ($lsPresent -and $tpPresent -and $newErrors.Count -eq 0)
          lsPresent = $lsPresent
          tpPresent = $tpPresent
          tpUpdated = $tpUpdated
          compatibilityUpdates = [object[]]@($compatibleLs.updates)
          loaderErrors = [object[]]$newErrors
          error = if ($newErrors.Count) {
            $newErrors -join " | "
          } elseif (-not $lsPresent) {
            "Uploaded LS file was not found during verification."
          } elseif (-not $tpPresent) {
            "ASCII Program Loader did not create a TP program."
          } elseif ($beforeTpHash -and -not $tpUpdated) {
            "TP exists, but Robo Programmer could not confirm that it was rebuilt."
          } else {
            ""
          }
        }
        $existingFiles = $verifiedFiles
      } catch {
        $uploadError = $_.Exception.Message
        Start-Sleep -Milliseconds 500
        $failureErrors = @()
        try {
          $recentErrors = @(Get-RobotAsciiLoaderErrors $connection.HttpOrigin | Where-Object { $beforeErrors -notcontains $_ } | Select-Object -First 3)
          if (($recentErrors -join " ") -match [regex]::Escape($programName)) {
            $failureErrors = $recentErrors
          }
        } catch {
        }
        if ($failureErrors.Count -eq 1 -and $failureErrors[0] -match "ASBN-008") {
          $failureErrors = @("The robot refused to replace '$programName'. The existing program was preserved. Confirm it is stopped, not selected for execution, and not protected, then retry.")
        }
        $filesAfterFailure = @()
        try { $filesAfterFailure = @(Get-RobotFtpFiles $connection.FtpHost) } catch {}
        $results += @{
          name = $name
          success = $false
          lsPresent = ($filesAfterFailure -contains $name)
          tpPresent = ($filesAfterFailure -contains $tpName)
          tpUpdated = $false
          compatibilityUpdates = if ($compatibleLs) { [object[]]@($compatibleLs.updates) } else { [object[]]@() }
          loaderErrors = [object[]]$failureErrors
          error = if ($failureErrors.Count) { $failureErrors -join " | " } else { $uploadError }
        }
      }
    }
    Send-JsonResponse $Stream 200 "OK" @{ ok = $true; files = $existingFiles; results = $results }
  } catch {
    Send-JsonResponse $Stream 400 "Bad Request" @{ ok = $false; error = $_.Exception.Message }
  }
}

function Get-SafeFilePath {
  param([string]$RequestTarget)

  $pathOnly = ($RequestTarget -split "\?")[0]
  if ([string]::IsNullOrWhiteSpace($pathOnly) -or $pathOnly -eq "/") {
    $pathOnly = "/index.html"
  }

  $relative = [System.Uri]::UnescapeDataString($pathOnly.TrimStart("/")).Replace("/", [System.IO.Path]::DirectorySeparatorChar)
  $fullPath = [System.IO.Path]::GetFullPath((Join-Path $root $relative))
  $rootPath = [System.IO.Path]::GetFullPath($root)

  if (-not $fullPath.StartsWith($rootPath, [System.StringComparison]::OrdinalIgnoreCase)) {
    return $null
  }

  return $fullPath
}

$requestedPort = $Port
while ($true) {
  $baseUrl = "http://127.0.0.1:$Port"
  $launchUrl = "$baseUrl$Path"
  $listener = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Parse("127.0.0.1"), $Port)
  try {
    $listener.Start()
    break
  } catch {
    try {
      $existing = Invoke-RestMethod -UseBasicParsing -Uri "$baseUrl/app-root.json" -TimeoutSec 1
      if ($existing.root -eq $root -and [int]$existing.serverApiVersion -eq $serverApiVersion) {
        Write-Host "Robo Programmer is already running on port $Port. Opening the existing current server."
        if (-not $NoBrowser) { Start-Process $launchUrl }
        Start-Sleep -Seconds 2
        exit 0
      }
    } catch {
    }
    $Port++
    if ($Port -gt ($requestedPort + 20)) {
      throw "Unable to find an available local port for Robo Programmer."
    }
  }
}

Write-Host "Robo Programmer V5.0"
Write-Host "Serving from: $root"
Write-Host "Opening: $launchUrl"
Write-Host "Keep this window open while using the tool."
Write-Host "Close this window to stop the local server."
if (-not $NoBrowser) {
  Start-Process $launchUrl
}

try {
  while ($true) {
    $client = $listener.AcceptTcpClient()
    try {
      $stream = $client.GetStream()
      $request = Read-HttpRequest $stream
      if ([string]::IsNullOrWhiteSpace($request)) { continue }
      $requestLine = ($request -split "`r?`n")[0]
      $parts = $requestLine -split " "
      $method = $parts[0]
      $target = if ($parts.Length -gt 1) { $parts[1] } else { "/" }
      $pathOnly = ($target -split "\?")[0]
      $bodyOffset = $request.IndexOf("`r`n`r`n")
      $requestBody = if ($bodyOffset -ge 0) { $request.Substring($bodyOffset + 4) } else { "" }

      if ($method -eq "POST" -and $pathOnly -in @("/robot-export/preflight", "/robot-export/upload")) {
        Handle-RobotExportRequest $stream $pathOnly $requestBody
        continue
      }

      if ($method -eq "POST" -and $pathOnly -in @("/robot-backup/inventory", "/robot-backup/file", "/robot-backup/download")) {
        Handle-RobotBackupRequest $stream $pathOnly $requestBody
        continue
      }

      if ($method -eq "POST" -and $pathOnly -eq "/project-path/resolve") {
        Handle-ProjectPathRequest $stream $requestBody
        continue
      }

      if ($method -eq "POST" -and $pathOnly -eq "/ls-files/export") {
        Handle-LsFileExportRequest $stream $requestBody
        continue
      }

      if ($method -eq "POST" -and $pathOnly -in @("/robot-comments/read", "/robot-comments/set")) {
        Handle-RobotCommentRequest $stream $pathOnly $requestBody
        continue
      }

      if ($method -eq "POST" -and $pathOnly -in @("/robot-position-registers/read", "/robot-position-registers/set")) {
        Handle-RobotPositionRegisterRequest $stream $pathOnly $requestBody
        continue
      }
      if ($method -eq "POST" -and $pathOnly -in @("/robot-numeric-registers/read", "/robot-numeric-registers/set")) {
        Handle-RobotNumericRegisterRequest $stream $pathOnly $requestBody
        continue
      }
      if ($method -eq "POST" -and $pathOnly -in @("/robot-flags/read", "/robot-flags/set")) {
        Handle-RobotFlagRequest $stream $pathOnly $requestBody
        continue
      }
      if ($method -eq "POST" -and $pathOnly -eq "/robot-live/state") {
        Handle-RobotLiveStateRequest $stream $requestBody
        continue
      }
      if ($method -eq "POST" -and $pathOnly -eq "/robot-options/read") {
        Handle-RobotOptionsRequest $stream $requestBody
        continue
      }
      if ($method -eq "POST" -and $pathOnly -eq "/robot-online/ping") {
        Handle-RobotHeartbeatRequest $stream $requestBody
        continue
      }
      if ($method -eq "POST" -and $pathOnly -eq "/robot-program-monitor/state") {
        Handle-RobotProgramMonitorRequest $stream $requestBody
        continue
      }

      if ($method -eq "POST" -and $pathOnly -eq "/robot-position/current") {
        Handle-RobotPositionRequest $stream $requestBody
        continue
      }

      if ($method -ne "GET" -and $method -ne "HEAD") {
        $body = [System.Text.Encoding]::UTF8.GetBytes("Method not allowed.")
        Send-Response $stream 405 "Method Not Allowed" $body
        continue
      }

      if (($target -split "\?")[0] -eq "/app-root.json") {
        $json = "{`"root`":`"$($root.Replace('\', '\\'))`",`"version`":`"5.0`",`"serverApiVersion`":$serverApiVersion}"
        $bodyBytes = if ($method -eq "HEAD") { [byte[]]::new(0) } else { [System.Text.Encoding]::UTF8.GetBytes($json) }
        Send-Response $stream 200 "OK" $bodyBytes "application/json; charset=utf-8"
        continue
      }

      $filePath = Get-SafeFilePath $target
      if (-not $filePath -or -not (Test-Path -LiteralPath $filePath -PathType Leaf)) {
        $body = [System.Text.Encoding]::UTF8.GetBytes("File not found.")
        Send-Response $stream 404 "Not Found" $body
        continue
      }

      $bodyBytes = if ($method -eq "HEAD") { [byte[]]::new(0) } else { [System.IO.File]::ReadAllBytes($filePath) }
      Send-Response $stream 200 "OK" $bodyBytes (Get-ContentType $filePath)
    } catch {
      try {
        $body = [System.Text.Encoding]::UTF8.GetBytes("Server error.")
        Send-Response $stream 500 "Internal Server Error" $body
      } catch {
      }
    } finally {
      $client.Close()
    }
  }
} finally {
  $listener.Stop()
}

