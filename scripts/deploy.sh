#!/usr/bin/env bash
# Deploy the built site to /www/wwwroot/yuyiyi.asia
#
# Runs on the server. By default it deploys the existing build at
# yuyiyi.asia/ via rsync WITHOUT rebuilding — build is expected to be
# done already (e.g. locally or in CI). Pass --build to rebuild first.
#
# Usage:
#   ./scripts/deploy.sh          # deploy existing build only (no node)
#   ./scripts/deploy.sh --build  # rebuild (npm run build) then deploy
#
# Requires: rsync. With --build also requires npm. If you run it as root
# it also fixes ownership to www:www (the BaoTa/宝塔 panel default).
# Otherwise make sure the current user can write to /www/wwwroot/yuyiyi.asia.

set -euo pipefail

# Resolve paths relative to this script (scripts/ -> repo root).
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

SRC="$REPO_ROOT/yuyiyi.asia"
DEST="/www/wwwroot/yuyiyi.asia"

# --- Argument parsing -------------------------------------------------------
BUILD=false
for arg in "$@"; do
    case "$arg" in
        --build) BUILD=true ;;
        --no-build|--skip-build) BUILD=false ;;
        -h|--help)
            sed -n '2,15p' "$0"
            exit 0
            ;;
        *)
            echo "Unknown argument: $arg" >&2
            exit 1
            ;;
    esac
done

# --- Build ------------------------------------------------------------------
if $BUILD; then
    echo "==> Building (npm run build)…"
    (cd "$REPO_ROOT" && npm run build)
fi

if [[ ! -d "$SRC" ]]; then
    echo "ERROR: build output not found at $SRC" >&2
    echo "Run 'npm run build' first, or pass --build to this script." >&2
    exit 1
fi

# --- Deploy (rsync incremental, --delete prunes removed files) ---------------
echo "==> Deploying $SRC/ -> $DEST/"
mkdir -p "$DEST"

# Detect the user that should own the files (BaoTa uses www:www by default).
OWNER="www"
GROUP="www"
if [[ "$(id -u)" -eq 0 ]]; then
    # Running as root: preserve www:www ownership on the destination while
    # copying, instead of leaving root-owned files behind.
    rsync -a --delete \
        --human-readable \
        --info=stats1 \
        --chown="$OWNER:$GROUP" \
        "$SRC/" "$DEST/"
    echo "==> Ensuring ownership $OWNER:$GROUP …"
    chown -R "$OWNER:$GROUP" "$DEST" 2>/dev/null || true
else
    # Not root: just sync; rsync will use the current user's ownership.
    rsync -a --delete \
        --human-readable \
        --info=stats1 \
        "$SRC/" "$DEST/"
    echo "==> Not root — skipped chown. Make sure this user owns $DEST."
fi

echo "==> Done. Deployed to $DEST"
