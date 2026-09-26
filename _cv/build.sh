#!/usr/bin/env bash
# Renders the CV pages in this folder to PDFs in ../assets using headless Chrome.
set -euo pipefail
cd "$(dirname "$0")"

CHROME="${CHROME:-/c/Program Files/Google/Chrome/Application/chrome.exe}"

render() {
  "$CHROME" --headless=new --disable-gpu --no-pdf-header-footer \
    --run-all-compositor-stages-before-draw --virtual-time-budget=10000 \
    --print-to-pdf="$(cygpath -w "$PWD/../assets/$2")" \
    "file:///$(cygpath -m "$PWD/$1")"
}

render cv.en.html aleksi-lehtomaki-cv.pdf
render cv.fi.html aleksi-lehtomaki-cv-fi.pdf
