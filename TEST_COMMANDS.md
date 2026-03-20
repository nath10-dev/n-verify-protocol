# N-Verify Protocol - Testing Commands

## Run All Tests

```bash
# Backend
cd backend && npm test

# Frontend
cd frontend && npm test

# Contracts
cd contracts && npx hardhat test
```

## Backend Tests

```bash
npm test -- --coverage
npm test -- --watch
npm test -- --testNamePattern="auth"
```

## Frontend Tests

```bash
npm test -- --coverage
npm test -- --watch
npm test -- --updateSnapshot
```

## Contract Tests

```bash
npx hardhat test
npx hardhat test --network localhost
npx hardhat coverage
```

## CI Testing

```bash
npm run test:ci
```
