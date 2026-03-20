# N-Verify Protocol - Testing Guide

## Running Tests

### Backend Tests
```bash
cd backend
npm install
npm test
```

### Frontend Tests
```bash
cd frontend
npm install
npm test
```

### Smart Contract Tests
```bash
cd contracts
npm install
npx hardhat test
```

## Manual Testing

### 1. Start Services
```bash
# Start Docker
cd docker
docker-compose up -d

# Start Backend
cd backend
npm install
npm run dev

# Start Frontend
cd frontend
npm install
npm run dev
```

### 2. Test API Endpoints

```bash
# Register user
curl -X POST http://localhost:4000/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"test123"}'

# Login
curl -X POST http://localhost:4000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"test123"}'

# Create verification (use token from login)
curl -X POST http://localhost:4000/api/v1/verify \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"domain":"medical","aiOutput":"Test output"}'
```

### 3. Test Frontend
- Open http://localhost:3000
- Register a new account
- Login
- Create a verification
- View results

## Environment for Testing

```bash
# .env for testing
DATABASE_URL=postgresql://nverify:nverify_secret@localhost:5432/nverify_test
REDIS_URL=redis://localhost:6379
JWT_SECRET=test-secret-for-testing-only
OPENAI_API_KEY=sk-test-key
```
