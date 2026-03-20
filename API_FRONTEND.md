# N-Verify Protocol - Frontend API

## Base URL
```
http://localhost:4000/api
```

## Endpoints

### Auth
- POST /auth/register - Create account
- POST /auth/login - Login
- GET /auth/me - Get current user

### Verification
- POST /verify - Submit verification
- GET /verify/:id - Get verification status
- GET /verify - List verifications

### Reasoning
- POST /reasoning/extract - Extract reasoning from AI output
- POST /reasoning/validate - Validate reasoning

### Validators
- GET /validators - List validators
- POST /validators/stake - Stake tokens

### Analytics
- GET /analytics/overview - Dashboard stats
- GET /analytics/usage - Usage data
