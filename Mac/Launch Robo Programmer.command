#!/bin/zsh
cd "$(dirname "$0")"

if ! command -v node >/dev/null 2>&1; then
  echo "Robo Programmer needs Node.js to run this Mac test build."
  echo
  echo "Install Node.js from https://nodejs.org, then double-click this launcher again."
  echo
  read "?Press Return to close."
  exit 1
fi

node server.mjs
