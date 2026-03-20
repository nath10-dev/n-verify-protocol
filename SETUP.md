# N-Verify Protocol - Environment Setup

## Quick Setup (5 minutes)

```bash
# 1. Clone repository
git clone https://github.com/nath10-dev/n-verify-protocol.git
cd n-verify-protocol

# 2. Start Docker
cd docker
docker-compose up -d

# 3. Backend
cd ../backend
cp .env.example .env
# Edit .env with your API keys
npm install
npm run dev

# 4. Frontend (new terminal)
cd ../frontend
npm install
npm run dev
```

## Requirements

- Node.js 20+
- Docker 25.0+
- PostgreSQL 16
- Redis 7.2

## Environment Variables

### Backend (.env)
```
DATABASE_URL=postgresql://nverify:password@localhost:5432/nverify
REDIS_URL=redis://localhost:6379
JWT_SECRET=your-secret-key
OPENAI_API_KEY=sk-...
```

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:4000
```

## Troubleshooting

### Port already in use
```bash
# Find process
lsof -i :4000
# Kill it
kill -9 PID
```

### Database connection failed
```bash
# Check Docker
docker ps
docker logs n-verify-db
```
