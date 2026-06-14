#!/usr/bin/env bash

set -euo pipefail

if [ -f ".env" ]; then
  echo ".env already exists, skipping"
  exit 0
fi

cp .env.example .env
echo ".env created from .env.example"
