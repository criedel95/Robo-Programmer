param(
  [string]$Source = (Split-Path -Parent $MyInvocation.MyCommand.Path),
  [string]$Destination = "C:\Users\criedelsheimer\Documents\Fanuc Programmer Project\Test Exports\V5.0",
  [string]$Label = "Latest"
)

$ErrorActionPreference = "Stop"

$requiredFiles = @(
  "index.html",
  "styles.css",
  "app.js",
  "assignments-popout.html",
  "assignments-popout.js",
  "Data Assignments.xlsx",
  "Create Desktop Shortcut.cmd",
  "Launch Robo Programmer.cmd",
  "Robo Programmer V5.0.cmd",
  "Start-RoboProgrammerServer.ps1",
  "LICENSE",
  "NOTICE",
  "README.md",
  "Robo Programmer Instructions.txt"
)

foreach ($file in $requiredFiles) {
  $path = Join-Path $Source $file
  if (-not (Test-Path -LiteralPath $path -PathType Leaf)) {
    throw "Missing required deploy file: $path"
  }
}

$node = "$env:USERPROFILE\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
if (Test-Path -LiteralPath $node) {
  & $node --check (Join-Path $Source "app.js")
}

if (-not (Test-Path -LiteralPath $Destination)) {
  New-Item -ItemType Directory -Path $Destination | Out-Null
}

$stamp = Get-Date -Format "yyyyMMdd-HHmm"
$zipName = "Robo Programmer V5.0 $Label $stamp.zip"
$zipPath = Join-Path $Destination $zipName

Compress-Archive -Path (Join-Path $Source "*") -DestinationPath $zipPath -Force

Add-Type -AssemblyName System.IO.Compression.FileSystem
$zip = [System.IO.Compression.ZipFile]::OpenRead($zipPath)
try {
  $entries = @($zip.Entries | ForEach-Object { $_.FullName })
  foreach ($file in $requiredFiles) {
    if ($entries -notcontains $file) {
      throw "Zip validation failed. Missing from archive: $file"
    }
  }
} finally {
  $zip.Dispose()
}

Write-Host "Created deployable zip:"
Write-Host $zipPath
Write-Host ""
Write-Host "Tester instructions:"
Write-Host "1. Extract the zip."
Write-Host "2. Optional: double-click Create Desktop Shortcut.cmd."
Write-Host "3. Double-click Launch Robo Programmer.cmd or the new Desktop shortcut."
