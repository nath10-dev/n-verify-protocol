# N-Verify Protocol - Common Tasks

## Create a User

```bash
curl -X POST http://localhost:4000/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"password123"}'
```

## Login

```bash
curl -X POST http://localhost:4000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"password123"}'
```

## Create Verification

```bash
curl -X POST http://localhost:4000/api/v1/verify \
  -H "Authorization: Bearer TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"domain":"medical","aiOutput":"Patient has..."}'
```

## Check Status

```bash
curl http://localhost:4000/api/v1/verify/REQUEST_ID \
  -H "Authorization: Bearer TOKEN"
```

## List Verifications

```bash
curl http://localhost:4000/api/v1/verify \
  -H "Authorization: Bearer TOKEN"
```
