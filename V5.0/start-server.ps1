param(
  [int]$Port = 4220,
  [string]$AppRoot = "",
  [string]$OpenProject = "",
  [switch]$RunServer
)

$ErrorActionPreference = "Stop"

if ([string]::IsNullOrWhiteSpace($AppRoot)) {
  $AppRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
}

$AppRoot = [System.IO.Path]::GetFullPath($AppRoot)

function Get-ContentType {
  param([string]$Path)

  switch ([System.IO.Path]::GetExtension($Path).ToLowerInvariant()) {
    ".html" { "text/html; charset=utf-8"; break }
    ".js" { "text/javascript; charset=utf-8"; break }
    ".css" { "text/css; charset=utf-8"; break }
    ".json" { "application/json; charset=utf-8"; break }
    ".txt" { "text/plain; charset=utf-8"; break }
    ".cmd" { "text/plain; charset=utf-8"; break }
    ".ps1" { "text/plain; charset=utf-8"; break }
    ".xlsx" { "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"; break }
    ".png" { "image/png"; break }
    ".jpg" { "image/jpeg"; break }
    ".jpeg" { "image/jpeg"; break }
    ".svg" { "image/svg+xml"; break }
    default { "application/octet-stream" }
  }
}

function Test-PortListening {
  param([int]$PortToCheck)

  try {
    $client = New-Object System.Net.Sockets.TcpClient
    $async = $client.BeginConnect("127.0.0.1", $PortToCheck, $null, $null)
    $connected = $async.AsyncWaitHandle.WaitOne(300, $false)
    if ($connected) {
      $client.EndConnect($async)
      $client.Close()
      return $true
    }
    $client.Close()
    return $false
  } catch {
    return $false
  }
}

function Start-StaticServer {
  $listener = New-Object System.Net.HttpListener
  $listener.Prefixes.Add("http://127.0.0.1:$Port/")
  $listener.Start()

  while ($listener.IsListening) {
    $context = $listener.GetContext()
    try {
      $requestPath = [uri]::UnescapeDataString($context.Request.Url.AbsolutePath.TrimStart("/"))
      if ([string]::IsNullOrWhiteSpace($requestPath)) {
        $requestPath = "index.html"
      }

      $relativePath = $requestPath -replace "/", [System.IO.Path]::DirectorySeparatorChar
      $fullPath = [System.IO.Path]::GetFullPath((Join-Path $AppRoot $relativePath))

      if (-not $fullPath.StartsWith($AppRoot, [System.StringComparison]::OrdinalIgnoreCase) -or -not (Test-Path -LiteralPath $fullPath -PathType Leaf)) {
        $context.Response.StatusCode = 404
        $bytes = [System.Text.Encoding]::UTF8.GetBytes("Not found")
      } else {
        $context.Response.StatusCode = 200
        $context.Response.ContentType = Get-ContentType -Path $fullPath
        $bytes = [System.IO.File]::ReadAllBytes($fullPath)
      }

      $context.Response.ContentLength64 = $bytes.Length
      $context.Response.OutputStream.Write($bytes, 0, $bytes.Length)
    } catch {
      $context.Response.StatusCode = 500
      $bytes = [System.Text.Encoding]::UTF8.GetBytes("Server error")
      $context.Response.ContentLength64 = $bytes.Length
      $context.Response.OutputStream.Write($bytes, 0, $bytes.Length)
    } finally {
      $context.Response.OutputStream.Close()
    }
  }
}

if ($RunServer) {
  Start-StaticServer
  exit
}

$encodedRoot = [uri]::EscapeDataString($AppRoot)
$projectQuery = ""
if (-not [string]::IsNullOrWhiteSpace($OpenProject)) {
  $projectQuery = "project=$OpenProject&"
}
$url = "http://127.0.0.1:$Port/?${projectQuery}appRoot=$encodedRoot"

if (-not (Test-PortListening -PortToCheck $Port)) {
  $scriptPath = $MyInvocation.MyCommand.Path
  $serverArgs = @(
    "-NoProfile",
    "-ExecutionPolicy", "Bypass",
    "-File", "`"$scriptPath`"",
    "-Port", "$Port",
    "-AppRoot", "`"$AppRoot`"",
    "-RunServer"
  )

  Start-Process -WindowStyle Hidden -FilePath "powershell.exe" -ArgumentList $serverArgs | Out-Null
  Start-Sleep -Milliseconds 900
}

Write-Output $url
