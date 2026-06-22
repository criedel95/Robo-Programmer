param(
  [int]$Port = 4220
)

$ErrorActionPreference = "Stop"
$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path

$latestVersion = Get-ChildItem -LiteralPath $projectRoot -Directory |
  Where-Object { $_.Name -match '^V(\d+)(?:\.(\d+))?$' } |
  ForEach-Object {
    [pscustomobject]@{
      Directory = $_
      Major = [int]$Matches[1]
      Minor = if ($Matches[2]) { [int]$Matches[2] } else { 0 }
    }
  } |
  Sort-Object Major, Minor -Descending |
  Select-Object -First 1

if (-not $latestVersion) {
  Add-Type -AssemblyName PresentationFramework
  [System.Windows.MessageBox]::Show(
    "No Robo Programmer version folders were found in:`n$projectRoot",
    "Robo Programmer",
    "OK",
    "Error"
  ) | Out-Null
  exit 1
}

$serverScript = Join-Path $latestVersion.Directory.FullName "Start-RoboProgrammerServer.ps1"
if (-not (Test-Path -LiteralPath $serverScript -PathType Leaf)) {
  Add-Type -AssemblyName PresentationFramework
  [System.Windows.MessageBox]::Show(
    "$($latestVersion.Directory.Name) does not contain Start-RoboProgrammerServer.ps1.",
    "Robo Programmer",
    "OK",
    "Error"
  ) | Out-Null
  exit 1
}

& $serverScript -Port $Port -Path "/"
