# N-Verify Protocol - API Reference

## Authentication

### Register
```
POST /api/v1/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123",
  "organizationName": "Acme Inc",
  "role": "user"
}
```

### Login
```
POST /api/v1/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

Response:
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1...",
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "role": "user"
  }
}
```

## Verification

### Create Verification
```
POST /api/v1/verify
Authorization: Bearer <token>
Content-Type: application/json

{
  "domain": "medical",
  "aiOutput": "The patient has symptoms of..."
}
```

### Get Verification
```
GET /api/v1/verify/:requestId
Authorization: Bearer <token>
```

## Examples

### cURL
```bash
# Register
curl -X POST http://localhost:4000/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"test123"}'

# Login
TOKEN=$(curl -s -X POST http://localhost:4000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"test123"}' | jq -r .token)

# Create verification
curl -X POST http://localhost:4000/api/v1/verify \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"domain":"medical","aiOutput":"Test output"}'
```

### JavaScript
```javascript
// Login
const login = await fetch('/api/v1/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email, password })
});
const { token } = await login.json();

// Create verification
const verify = await fetch('/api/v1/verify', {
  method: 'POST',
  headers: { 
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify({ domain: 'medical', aiOutput: '...' })
});
```
