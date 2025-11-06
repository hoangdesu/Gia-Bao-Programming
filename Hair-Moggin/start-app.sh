#!/usr/bin/env bash
set -euo pipefail

# Resolve project directories relative to this script
ROOT_DIR="$(cd "$(dirname "$0")" && pwd)"
BACKEND_DIR="$ROOT_DIR/backend"
FRONTEND_DIR="$ROOT_DIR/frontend"

# Start backend (Flask) in the background
if [ -d "$BACKEND_DIR" ]; then
  # Activate virtual environment if present
  if [ -f "$BACKEND_DIR/.venv/bin/activate" ]; then
    # shellcheck source=/dev/null
    source "$BACKEND_DIR/.venv/bin/activate"
  else
    echo "Warning: $BACKEND_DIR/.venv not found; backend dependencies may be missing." >&2
  fi

  (
    cd "$BACKEND_DIR"
    export FLASK_APP=app.py
    export FLASK_ENV=development
    flask run --debug --host 0.0.0.0 --port 5679
  ) &
  BACKEND_PID=$!
else
  echo "Error: Backend directory not found at $BACKEND_DIR" >&2
  exit 1
fi

# Ensure backend is terminated when this script exits
cleanup() {
  if [ "${BACKEND_PID:-}" != "" ] && kill -0 "$BACKEND_PID" 2>/dev/null; then
    kill "$BACKEND_PID" 2>/dev/null || true
  fi
}
trap cleanup EXIT INT TERM

# Start frontend (Vite) in the foreground so you can see logs
if [ -d "$FRONTEND_DIR" ]; then
  cd "$FRONTEND_DIR"
  npm run dev
else
  echo "Error: Frontend directory not found at $FRONTEND_DIR" >&2
  exit 1
fi

