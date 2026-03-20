# N-Verify Protocol
# CEO Agent Brief

See CEO_BRIEF.md for full instructions.

## Quick Start

```bash
# Backend
cd backend
npm install
cp .env.example .env
# Edit .env with your values
npm run dev

# Frontend (new terminal)
cd frontend
npm install
npm run dev

# Docker
cd docker
docker-compose up
```

## Environment Variables

### Backend (.env)
```
DATABASE_URL=postgresql://user:pass@localhost:5432/nverify
REDIS_URL=redis://localhost:6379
JWT_SECRET=your-secret
OPENAI_API_KEY=sk-...
```

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:4000
```

## Tech Stack

- Frontend: Next.js 14, Tailwind CSS, Zustand
- Backend: Node.js, Express, PostgreSQL, Redis
- AI: OpenAI GPT-4, LangChain
- Blockchain: Solidity, Hardhat, Ethereum
- Storage: IPFS

## Status: Building MVP

Day 1: Foundation complete
