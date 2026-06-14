#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
LOG_DIR="$ROOT_DIR/logs"
mkdir -p "$LOG_DIR"

echo "[1/6] Checking curl"
command -v curl >/dev/null 2>&1 || { echo "curl is required"; exit 1; }

echo "[2/6] Installing uv if missing"
if ! command -v uv >/dev/null 2>&1; then
  curl -LsSf https://astral.sh/uv/install.sh | sh
  export PATH="$HOME/.local/bin:$HOME/.cargo/bin:$PATH"
fi

echo "[3/6] Installing Python 3.11 via uv if missing"
uv python install 3.11

echo "[4/6] Installing Hermes Agent with official installer"
curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash -s -- --skip-setup | tee "$LOG_DIR/install-hermes.log"

echo "[5/6] Checking Hermes binary"
if ! command -v hermes >/dev/null 2>&1; then
  if [ -x "$HOME/.local/bin/hermes" ]; then
    export PATH="$HOME/.local/bin:$PATH"
  fi
fi
command -v hermes >/dev/null 2>&1 || { echo "Hermes binary not found after install"; exit 1; }

echo "[6/6] Printing next steps"
cat <<'EOF'
Hermes install finished.

Next:
1. Copy .env.example to .env
2. Fill at least one provider key
3. Run: bash scripts/verify-hermes-install.sh
4. Run: hermes setup
EOF
