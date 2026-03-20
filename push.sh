#!/bin/bash
# N-Verify Git Push Script
# Run: bash push.sh

cd /root/.openclaw/workspace/projects/n-verify

git config --global user.email "yoopn@nverify.io"
git config --global user.name "Yoopn"

git add .
git commit -m "MVP - N-Verify Protocol"

git remote add origin https://github.com/nath10-dev/n-verify-protocol.git 2>/dev/null || true

git push -u origin main
