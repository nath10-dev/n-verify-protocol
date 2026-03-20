# N-Verify Protocol - Error Handling

## Error Codes

### 1xxx - Auth Errors
- 1001: Invalid credentials
- 1002: User already exists
- 1003: Token expired
- 1004: Unauthorized

### 2xxx - Verification Errors
- 2001: Invalid input
- 2002: Processing failed
- 2003: Timeout
- 2004: Domain not supported

### 3xxx - Blockchain Errors
- 3001: Transaction failed
- 3002: Insufficient gas
- 3003: Network error
- 3004: Contract error

### 4xxx - API Errors
- 4001: Rate limited
- 4002: Invalid request
- 4003: Server error

## Response Format
```json
{
  "success": false,
  "error": {
    "code": 1001,
    "message": "Invalid credentials"
  }
}
```
