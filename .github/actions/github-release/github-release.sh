#!/usr/bin/env sh

set -eu

tag="${1:?Usage: $0 <git_tag>}"

git rev-parse --verify --quiet "refs/tags/$tag" >/dev/null || {
  echo "Tag not found: $tag" >&2
  exit 1
}

version="${tag#v}"

notes="$(
  awk -v version="$version" '
    $0 ~ "^## \\[" version "\\]" { found = 1; next }
    found && /^## \[/ { exit }
    found && !seen && /^[[:space:]]*$/ { next }
    found { seen = 1; print }
  ' CHANGELOG.md
)"

[ -n "$notes" ] || {
  echo "No release notes found for $tag" >&2
  exit 1
}

printf '%s\n' "$notes" | gh release create "$tag" \
  --verify-tag \
  --title "$tag" \
  --notes-file -
