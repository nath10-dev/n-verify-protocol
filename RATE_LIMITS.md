# N-Verify Protocol - API Rate Limits

## Limits

### Free Tier
- 10 requests/minute
- 100 requests/day

### Starter
- 50 requests/minute
- 5000 requests/day

### Pro
- 200 requests/minute
- Unlimited daily

### Enterprise
- Custom limits

## Headers

```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 99
X-RateLimit-Reset: 1647264000
```

## Error Response (429)
```json
{
  "success": false,
  "error": "Rate limit exceeded",
  "retryAfter": 60
}
```

## Best Practices

1. Cache responses
2. Use webhooks instead of polling
3. Batch requests
4. Upgrade plan if needed
