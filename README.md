# Robo Programmer

Robo Programmer is a Windows-focused Fanuc LS programming and diagnostic application. It combines a browser-based editor with PowerShell launchers.  Refer to Robo Programmer Instructions.txt for a full set of functions and instruction.
Use in tandem with a live Fanuc robot or Roboguide to get the most out of this.  When connected, Robo Programmer acts similar to an online PLC editor, where programs can be monitored and modified from Robo Programmer on your PC.  Comments, registers, and positions register can be read/written.  Backups can be pulled and downloaded directly to your PC.  Live position and line-by-line program monitoring are available.  

For the Online Robot portion of this project to run with all features, two robot options are required:

FTP Interface (R796)

ASCII Program Loader (J716)

> This repository is private and under active development. The current maintained source is **V5.0**.

## Current version

The application source and version-specific documentation live in [`V5.0`](V5.0/README.md).

Key capabilities include:

- Fanuc LS editing, formatting, diagnostics, and quick fixes
- Project-wide reference search and conflict-checked tag reassignment
- Program mapping and assignment workbook integration
- Portable `.ROBO` project import and export
- Local browser operation
- Robot backup, comparison, and live robot workflows

## Run locally

For the portable Windows experience, open `V5.0` and run:

```text
Robo Programmer V5.0.cmd
```


Generated installers are written to `Build Exports` and are intentionally excluded from source control.

## Repository layout

```text
V5.0/                         Maintained application source
Build Exports/                Generated installers (ignored)
Test Exports/                 Generated test packages (ignored)
V1.0/ ... V4.4/               Local historical snapshots (ignored)
Launch-Latest-RoboProgrammer.ps1
```

If you find it useful, Bitcoin donations are appreciated and help pay for the AI compute used to develop the project.
**Bitcoin (BTC) donation address:** `bc1qma2t9e56qfg2a2lfjvdgx433mn544v04zhtzel`

** I know there are bugs.  This is still in development and is being tested on real integrator projects.  Constructive feedback is appreciated. **

## License

Copyright 2026 Christian W. R. Riedelsheimer.

See [`V5.0/LICENSE`](V5.0/LICENSE) for the complete source-available license terms. The license includes a commercial restriction and is not OSI-approved open source.
