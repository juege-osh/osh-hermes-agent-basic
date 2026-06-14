#!/usr/bin/env bash

set -euo pipefail

echo "== Hermes verification =="

HERMES_BIN=""
if command -v hermes >/dev/null 2>&1; then
  HERMES_BIN="$(command -v hermes)"
elif [ -x "$HOME/.local/bin/hermes" ]; then
  HERMES_BIN="$HOME/.local/bin/hermes"
  export PATH="$HOME/.local/bin:$PATH"
  echo "[WARN] hermes not on current PATH, using $HERMES_BIN"
  echo "[INFO] Add ~/.local/bin to PATH or reload your shell"
else
  echo "[FAIL] hermes command not found"
  exit 1
fi

echo "[OK] hermes command found: $HERMES_BIN"

echo
echo "== Version =="
"$HERMES_BIN" --version || true

echo
echo "== Doctor =="
"$HERMES_BIN" doctor || true

echo
echo "== Hermes home =="
if [ -d "$HOME/.hermes" ]; then
  echo "[OK] $HOME/.hermes exists"
  find "$HOME/.hermes" -maxdepth 2 -type f | sort | sed -n '1,40p'
else
  echo "[WARN] $HOME/.hermes does not exist yet"
fi

echo
echo "== Env hints =="
if [ -f ".env" ]; then
  echo "[OK] local .env exists"
else
  echo "[WARN] local .env not found"
fi

for key in OPENAI_API_KEY ANTHROPIC_API_KEY OPENROUTER_API_KEY NOUS_API_KEY; do
  if [ -n "${!key:-}" ]; then
    echo "[OK] $key is set in current shell"
  else
    echo "[INFO] $key is not set in current shell"
  fi
done

echo
echo "== Summary =="
echo "If hermes command exists, doctor runs, and you have at least one provider key, you can continue with hermes setup."
