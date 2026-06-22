# Disclaimer and Donations

Robo Programmer is a personal project created mostly with AI assistance. It is free for everyone to use. If you find it useful, Bitcoin donations are appreciated and help pay for the AI compute used to develop the project.

**Bitcoin (BTC) donation address:** `bc1qma2t9e56qfg2a2lfjvdgx433mn544v04zhtzel`

## License

Copyright 2026 Christian W. R. Riedelsheimer.

Robo Programmer is free to use, modify, and distribute under the Apache License 2.0 subject to the Commons Clause License Condition v1.0. The license does **not** grant anyone other than the copyright holder the right to sell Robo Programmer or provide a paid product or service whose value derives entirely or substantially from it. See [LICENSE](LICENSE) for the complete terms.

This is a source-available license with a commercial restriction; it is not an OSI-approved open-source license. Third-party components remain subject to their respective licenses.

# Robo Programmer

A starter web app for editing Fanuc LS programs.

## Current Features

- LS editor with a starter program loaded by default
- Format button for `/MN` line numbering and simple spacing cleanup
- Check button for first-pass diagnostics
- Diagnostic quick fixes with before/after review before applying changes
- Project-wide exact reference search with read, write, jump, definition, motion, and comment classifications
- Conflict-checked project-wide reassignment for registers, flags, labels, and positions
- Automatic Data Assignments description movement during supported tag reassignment
- Autocomplete suggestions for common LS commands and sections
- Program map for program name, section count, motion lines, labels, and positions
- New project creation that asks for a parent location, then creates a project folder with `LS Files`, `Spreadsheet`, and `History`
- Per-project launcher files for reopening a project session
- Refresh button for syncing the editor file list with the project `LS Files` folder
- Portable `.ROBO` project packages that export the full project folder and unpack back into an editable project

## Open The App

Extract the zip first. Do not run it from inside the compressed folder.

Double-click:

```text
Robo Programmer V5.0.cmd
```

You can also double-click `Launch Robo Programmer.cmd`; both launchers do the same thing.

To add a convenient Desktop icon without installing anything, double-click:

```text
Create Desktop Shortcut.cmd
```

The shortcut points back to the extracted Robo Programmer folder, so keep that folder in the same location after creating it.
Running the helper from a newer deployment automatically replaces the existing `Robo Programmer` Desktop shortcut.

That starts a visible local PowerShell web server window and opens the app in your default browser. Keep that server window open while using the tool. Python is not required.

If Windows SmartScreen asks, choose to run the file. The launcher only starts a local server for this extracted folder and opens:

```text
http://127.0.0.1:4220/
```

## ROBO Project Packages

Use **File > Export Project as ROBO** to create one portable `.ROBO` file. The package includes the full project folder, empty project directories, and any unsaved LS editor changes.

Use **Open ROBO Package** to validate the package, choose a destination, unpack it into a new uniquely named folder, and open it as a normal editable project. `.ROBO` files are ZIP-compatible packages containing a versioned `robo-project.json` manifest.

## Next Milestones

1. Expand lint rules for robot-specific command patterns.
2. Add a visual program-flow map.
3. Add a project health dashboard.
4. Add robot backup and comparison workflows.
