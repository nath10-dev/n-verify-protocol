# N-Verify Protocol - API Authentication

## Getting a Token

```bash
# Login
curl -X POST http://localhost:4000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"pass123"}'

# Response
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {...}
}
```

## Using the Token

```bash
# Include in headers
curl http://localhost:4000/api/v1/verify \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..."
```

## Token Expiry

- Token expires in 7 days
- Use refresh endpoint to get new token
- Store token securely (httpOnly cookie recommended)

## Security Tips

- Never expose token in URLs
- Use HTTPS in production
- Implement token rotation
- Handle token expiry gracefully
