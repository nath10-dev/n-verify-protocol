#!/bin/bash

# Run this to push N-Verify to GitHub!

cd /root/.openclaw/workspace/projects/n-verify

git config --global user.email "yoopn@nverify.io"
git config --global user.name "Yoopn"

git add .
git commit -m "MVP - N-Verify Protocol"

git remote add origin https://github.com/nath10-dev/n-verify-protocol.git

git push -u origin main

echo "Done!"
