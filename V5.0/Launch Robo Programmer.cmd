@echo off
setlocal

set "ROOT=%~dp0"
set "PORT=4220"

powershell -NoProfile -ExecutionPolicy Bypass -File "%ROOT%Start-RoboProgrammerServer.ps1" -Port %PORT% -Path "/"

endlocal
