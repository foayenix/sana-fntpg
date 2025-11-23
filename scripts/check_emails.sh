#!/usr/bin/env bash
set -euo pipefail

echo "Scanning repository for email addresses (excluding node_modules and .next)..."

# Find emails in tracked files, ignoring binaries and build output
emails=$(git grep -hE -o --no-color -I "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}" -- ':!node_modules' ':!.next' || true)

if [ -z "${emails}" ]; then
  echo "No email addresses found in source files."
  exit 0
fi

echo "Found the following email addresses (unique):"
echo "${emails}" | sort -u

allowed=("hello@mysana.io")

echo ""
echo "Checking for addresses not in allowlist..."
bad=$(echo "${emails}" | sort -u | grep -v -xF "${allowed[0]}" || true)

if [ -n "${bad}" ]; then
  echo "WARNING: The following email addresses are present and do NOT match the allowed address (${allowed[0]}):"
  echo "${bad}"
  exit 2
else
  echo "All found email addresses match ${allowed[0]}."
  exit 0
fi
