#!/bin/bash
# Gera o site e publica o resultado no branch "deploy" do GitHub (o cPanel da HostGator puxa esse branch).
# Uso: npm run publicar
set -euo pipefail
cd "$(dirname "$0")/.."
REMOTO=$(git remote get-url origin)
COMMIT=$(git rev-parse --short HEAD)
[ -z "$(git status --porcelain)" ] || { echo "Há alterações sem commit. Faça o commit antes de publicar."; exit 1; }
npm run build
cp .cpanel.yml dist/
cd dist
rm -rf .git
git init -q -b deploy
git add -A
git -c user.name="$(git -C .. config user.name)" -c user.email="$(git -C .. config user.email)" commit -q -m "build: $COMMIT"
git -c credential.helper= -c credential.helper="!gh auth git-credential" push -q -f "$REMOTO" deploy
rm -rf .git
echo "Publicado no branch deploy (build de $COMMIT). No cPanel: Git Version Control > rlfocus-site > Pull or Deploy > Update from Remote > Deploy HEAD Commit."
