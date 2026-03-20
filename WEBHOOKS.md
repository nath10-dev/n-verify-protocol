# N-Verify Protocol - Webhooks

## Available Webhooks

### verification.completed
```json
{
  "event": "verification.completed",
  "requestId": "uuid",
  "domain": "medical",
  "status": "completed",
  "timestamp": "2026-03-15T10:00:00Z"
}
```

### verification.failed
```json
{
  "event": "verification.failed",
  "requestId": "uuid",
  "domain": "medical",
  "reason": "consensus not reached",
  "timestamp": "2026-03-15T10:00:00Z"
}
```

## Setup

1. Go to Settings → Webhooks
2. Add your endpoint URL
3. Select events to receive
4. Save

## Security

- Verify webhook signatures
- Use HTTPS
- Respond within 5 seconds
