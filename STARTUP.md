# N-Verify Protocol - Startup Guide

## Step 1: GitHub Setup
- Create repo on GitHub: https://github.com/nath10-dev/n-verify-protocol

## Step 2: Push Code
```bash
cd /root/.openclaw/workspace/projects/n-verify
git init
git add .
git commit -m "MVP"
git remote add origin https://github.com/nath10-dev/n-verify-protocol.git
git push -u origin main
```

## Step 3: Install
```bash
cd backend && npm install
cd frontend && npm install
cd contracts && npm install
```

## Step 4: Run
```bash
# Docker
cd docker && docker-compose up -d

# Backend
npm run dev

# Frontend
npm run dev
```
