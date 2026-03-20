# N-Verify Protocol - Startup Commands

## Quick Start

```bash
# 1. Clone
git clone https://github.com/nath10-dev/n-verify-protocol.git

# 2. Install
cd n-verify-protocol
cd backend && npm install
cd ../frontend && npm install
cd ../contracts && npm install

# 3. Configure
cp backend/.env.example backend/.env
# Edit .env with your values

# 4. Start Docker
cd docker && docker-compose up -d

# 5. Start Backend
cd backend && npm run dev

# 6. Start Frontend
cd frontend && npm run dev
```

## Access
- Frontend: http://localhost:3000
- Backend: http://localhost:4000
- Database: localhost:5432
- Redis: localhost:6379
