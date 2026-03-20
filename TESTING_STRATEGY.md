# N-Verify Protocol - Testing Strategy

## Unit Tests
- Test individual functions
- Test utility functions
- Test validation logic

## Integration Tests
- Test API endpoints
- Test database operations
- Test external services

## E2E Tests
- Test user flows
- Test verification process
- Test wallet connection

## Test Coverage
- Target: 80%+
- Current: 0% (not run yet)

## Running Tests

```bash
# Backend
cd backend
npm test

# Frontend
cd frontend
npm test

# Contracts
cd contracts
npx hardhat test
```
