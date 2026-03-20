# N-Verify Protocol - API Errors

## Authentication Errors

- `AUTH_001` - Invalid email format
- `AUTH_002` - Invalid password
- `AUTH_003` - Token expired
- `AUTH_004` - Token invalid
- `AUTH_005` - Account locked

## Verification Errors

- `VERIFY_001` - Invalid domain
- `VERIFY_002` - Empty AI output
- `VERIFY_003` - Verification not found
- `VERIFY_004` - Already processing
- `VERIFY_005` - Consensus failed
- `VERIFY_006` - Certificate generation failed

## Blockchain Errors

- `CHAIN_001` - Transaction failed
- `CHAIN_002` - Network unavailable
- `CHAIN_003` - Insufficient gas
- `CHAIN_004` - Contract error

## Rate Limit Errors

- `RATE_001` - Too many requests
- `RATE_002` - Daily limit exceeded
