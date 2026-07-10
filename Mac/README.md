# Robo Programmer V5.0 Mac Test Build

This is an isolated Mac test build that uses the current Robo Programmer browser UI with a Node.js local server.

Start it from Terminal:

```sh
cd "/path/to/Robo Programmer/Mac"
node server.mjs
```

Or make the launcher executable once and double-click it after that:

```sh
chmod +x "Open Robo Programmer.command" "Launch Robo Programmer.command" start-server.sh
```

Then run:

```sh
./"Open Robo Programmer.command"
```

Keep the Terminal window open while using Robo Programmer. Closing it stops the local server.

This test build is intentionally separate from the Windows `V5.0` folder.
