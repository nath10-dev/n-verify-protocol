# N-Verify Protocol - API Response Format

## Success Response

```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "email": "user@example.com"
  },
  "message": "Operation successful"
}
```

## Error Response

```json
{
  "success": false,
  "error": "Error message",
  "code": "ERROR_CODE",
  "details": {}
}
```

## Pagination Response

```json
{
  "success": true,
  "data": [],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 100,
    "pages": 10
  }
}
```
