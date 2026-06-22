@echo off
setlocal

set "ROBO_ROOT=%~dp0"

powershell -NoProfile -ExecutionPolicy Bypass -Command ^
  "$root = $env:ROBO_ROOT.TrimEnd('\');" ^
  "$launcher = Join-Path $root 'Launch Robo Programmer.cmd';" ^
  "if (-not (Test-Path -LiteralPath $launcher -PathType Leaf)) { throw 'Launch Robo Programmer.cmd was not found. Extract the full Robo Programmer zip before creating the shortcut.' };" ^
  "$desktop = [Environment]::GetFolderPath('Desktop');" ^
  "$shortcutPath = Join-Path $desktop 'Robo Programmer.lnk';" ^
  "if (Test-Path -LiteralPath $shortcutPath -PathType Leaf) { Remove-Item -LiteralPath $shortcutPath -Force };" ^
  "$shell = New-Object -ComObject WScript.Shell;" ^
  "$shortcut = $shell.CreateShortcut($shortcutPath);" ^
  "$shortcut.TargetPath = $launcher;" ^
  "$shortcut.WorkingDirectory = $root;" ^
  "$icon = Join-Path $root 'assets\robo-programmer.ico';" ^
  "if (Test-Path -LiteralPath $icon -PathType Leaf) { $shortcut.IconLocation = $icon + ',0' };" ^
  "$shortcut.Description = 'Open Robo Programmer in your browser';" ^
  "$shortcut.Save();"

if errorlevel 1 (
  echo.
  echo Unable to create the Robo Programmer Desktop shortcut.
  echo Make sure the full zip was extracted, then try again.
  echo.
  pause
  exit /b 1
)

echo.
echo Robo Programmer shortcut created or updated on your Desktop.
echo You can move the shortcut, but keep this extracted folder in the same location.
echo.
pause

endlocal
