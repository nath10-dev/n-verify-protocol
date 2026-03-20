# N-Verify Protocol - API Response Times

## Expected Response Times

### Fast (< 1 second)
- Auth: login, register
- Health check
- User info

### Medium (1-5 seconds)
- Verification submit
- Verification status
- List verifications

### Slow (5-30 seconds)
- Reasoning extraction
- Certificate generation
- Blockchain transactions

## Optimization Tips
- Cache user data
- Use pagination
- Async processing for slow endpoints
