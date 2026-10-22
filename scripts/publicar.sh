#!/bin/bash
# Gera o site e publica o resultado no branch "deploy" do GitHub (o cPanel da HostGator puxa esse branch).
# Cada publicação é um commit novo EM CIMA do anterior, para o "Update from Remote" do cPanel avançar sem conflito.
# Uso: npm run publicar
set -euo pipefail
cd "$(dirname "$0")/.."
RAIZ=$(pwd)
REMOTO=$(git remote get-url origin)
COMMIT=$(git rev-parse --short HEAD)
GIT_CRED=(-c credential.helper= -c "credential.helper=!gh auth git-credential")
[ -z "$(git status --porcelain)" ] || { echo "Há alterações sem commit. Faça o commit antes de publicar."; exit 1; }
npm run build
cp .cpanel.yml dist/
TMP=$(mktemp -d)
trap 'rm -rf "$TMP"' EXIT
git "${GIT_CRED[@]}" clone -q --depth 1 --branch deploy "$REMOTO" "$TMP/deploy" 2>/dev/null || { git init -q -b deploy "$TMP/deploy"; }
cd "$TMP/deploy"
find . -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} +
cp -R "$RAIZ/dist/." .
git add -A
if git diff --cached --quiet; then echo "Nada mudou no site publicado."; exit 0; fi
git -c user.name="$(git -C "$RAIZ" config user.name)" -c user.email="$(git -C "$RAIZ" config user.email)" commit -q -m "build: $COMMIT"
git "${GIT_CRED[@]}" push -q "$REMOTO" HEAD:deploy
echo "Publicado no branch deploy (build de $COMMIT). No cPanel: Git Version Control > rlfocus-site > Pull or Deploy > Update from Remote > Deploy HEAD Commit."
