#!/bin/bash
set -e
export PATH="$HOME/.npm-global/bin:$PATH"
npm install -g pnpm@11.1.1 --prefix "$HOME/.npm-global"
cd artifacts/lol-website
pnpm install --ignore-scripts
export VITE_API_ORIGIN=https://lol-site-api.onrender.com
pnpm run build
