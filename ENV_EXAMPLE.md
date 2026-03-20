# N-Verify Protocol - Environment Variables

## Backend (.env)
```
PORT=4000
NODE_ENV=development
DATABASE_URL=postgresql://user:pass@localhost:5432/nverify
REDIS_URL=redis://localhost:6379
JWT_SECRET=your-secret-key
OPENAI_API_KEY=sk-...
PINATA_API_KEY=...
PINATA_API_SECRET=...
ETHEREUM_RPC_URL=https://sepolia.infura.io/v3/...
CONTRACT_ADDRESS=0x...
```

## Frontend (.env)
```
NEXT_PUBLIC_API_URL=http://localhost:4000/api
NEXT_PUBLIC_WALLET_CONNECT_ID=...
```
