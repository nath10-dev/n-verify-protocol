# Deployment Guide

## Production Deployment

### 1. GitHub Repository
```bash
git clone https://github.com/nath10-dev/n-verify-protocol.git
cd n-verify-protocol
```

### 2. Environment Setup
```bash
# Backend
cp backend/.env.example backend/.env
# Edit with production values

# Frontend  
cp frontend/.env.example frontend/.env.local
```

### 3. Build & Start

**Using Docker:**
```bash
cd docker
docker-compose -f docker-compose.prod.yml up -d
```

**Manual:**
```bash
# Backend
cd backend
npm install
npm run build
npm start

# Frontend
cd frontend
npm install
npm run build
npm start
```

### 4. Blockchain Deploy

```bash
cd contracts
npm install
npx hardhat run scripts/deploy-sepolia.ts --network sepolia
```

### 5. Verify
- Check backend: `curl http://localhost:4000/health`
- Check frontend: `curl http://localhost:3000`
- Check blockchain: Verify contract on Etherscan

## Environment Variables

### Backend (.env)
```
DATABASE_URL=postgresql://user:pass@prod-db:5432/nverify
REDIS_URL=redis://prod-redis:6379
JWT_SECRET=super-secure-random-32-char-string
OPENAI_API_KEY=sk-...
ETHEREUM_RPC_URL=https://sepolia.infura.io/v3/...
PRIVATE_KEY=0x... (use env var, never commit)
```

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=https://api.nverify.io
NEXT_PUBLIC_VERIFICATION_REGISTRY_ADDRESS=0x...
```

## SSL/HTTPS
- Use Cloudflare or Let's Encrypt
- Set up proper CORS origins

## Monitoring
- Set up Datadog/Sentry
- Configure alerts
- Log aggregation
