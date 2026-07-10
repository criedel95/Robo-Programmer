# Robo Programmer Mac Test Build

This folder is an isolated Mac experiment. It is copied from the Windows `V5.0` app, but uses `server.mjs` instead of the PowerShell server.

Start from Terminal:

```sh
cd "/path/to/Robo Programmer/Mac"
node server.mjs
```

Or double-click `Open Robo Programmer.command` after marking it executable:

```sh
chmod +x "Open Robo Programmer.command" "Launch Robo Programmer.command" start-server.sh
```

The goal of this test build is API compatibility with the current browser UI while avoiding Windows-only PowerShell launch/server behavior.
