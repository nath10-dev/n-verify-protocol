# N-Verify Protocol - Environment Variables Reference

## Required

```
DATABASE_URL=postgresql://user:pass@host:5432/db
REDIS_URL=redis://host:6379
JWT_SECRET=min-32-char-secret-key-here
OPENAI_API_KEY=sk-...
```

## Optional

```
PORT=4000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
ETHEREUM_RPC_URL=https://...
PRIVATE_KEY=0x...
PINATA_API_KEY=...
PINATA_SECRET_KEY=...
```

## Security

- Never commit .env to git
- Use different secrets for production
- Rotate secrets regularly
- Use secrets management in production
