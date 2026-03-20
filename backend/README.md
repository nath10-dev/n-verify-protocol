# N-Verify Protocol

## API Endpoints

### Authentication
- `POST /api/v1/auth/register` - Register new user
- `POST /api/v1/auth/login` - Login
- `GET /api/v1/auth/me` - Get current user
- `POST /api/v1/auth/refresh` - Refresh token

### Verification
- `POST /api/v1/verify` - Create verification request
- `GET /api/v1/verify` - List user's verifications
- `GET /api/v1/verify/:requestId` - Get verification details
- `GET /api/v1/verify/:requestId/certificate` - Get certificate

### Reasoning
- `GET /api/v1/reasoning/:graphId` - Get reasoning graph
- `GET /api/v1/reasoning/:graphId/nodes/:nodeId` - Get node details

### Validators
- `POST /api/v1/validators/register` - Register as validator
- `GET /api/v1/validators/:validatorId/stats` - Get validator stats
- `POST /api/v1/validators/:validatorId/verify-node` - Submit verification

### Analytics
- `GET /api/v1/analytics/dashboard` - Dashboard stats (admin)
- `GET /api/v1/analytics/domain/:domain` - Domain stats
- `GET /api/v1/analytics/user` - User stats

## Quick Start

```bash
# Backend
cd backend
npm install
# Edit .env with your API keys
npm run dev

# Frontend (new terminal)
cd frontend
npm install
npm run dev

# Docker
cd docker
docker-compose up -d
```

## Environment

See `.env.example` for required environment variables.
