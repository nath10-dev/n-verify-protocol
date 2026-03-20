# N-Verify Protocol - Redis Keys

## Session Keys

```
verification:session:{requestId}
```

## Cache Keys

```
kb:claim:{claimHash}
validator:pool:{domain}
user:session:{userId}
```

## Rate Limiting

```
ratelimit:{userId}:{endpoint}
```

## TTL Settings

- Sessions: 1 hour
- Rate limits: 15 minutes
- Knowledge base: 24 hours
