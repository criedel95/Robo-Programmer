# Robo Programmer

Robo Programmer is a Windows-focused Fanuc LS programming and diagnostic application. It combines a browser-based editor with an optional Electron desktop build and portable PowerShell launchers.

> This repository is private and under active development. The current maintained source is **V5.0**.

## Current version

The application source and version-specific documentation live in [`V5.0`](V5.0/README.md).

Key capabilities include:

- Fanuc LS editing, formatting, diagnostics, and quick fixes
- Project-wide reference search and conflict-checked tag reassignment
- Program mapping and assignment workbook integration
- Portable `.ROBO` project import and export
- Local browser and Electron desktop operation
- Robot backup, comparison, and live robot workflows

## Run locally

For the portable Windows experience, open `V5.0` and run:

```text
Robo Programmer V5.0.cmd
```

For desktop development:

```powershell
cd V5.0
npm install
npm run desktop
```

To build the Windows installer:

```powershell
cd V5.0
npm install
npm run build:windows
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

## License

Copyright 2026 Christian W. R. Riedelsheimer.

See [`V5.0/LICENSE`](V5.0/LICENSE) for the complete source-available license terms. The license includes a commercial restriction and is not OSI-approved open source.
