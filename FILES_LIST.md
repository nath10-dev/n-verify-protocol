# N-Verify Protocol - Files List

## Frontend (src/)
- app/page.tsx (landing)
- app/login/page.tsx
- app/register/page.tsx
- app/dashboard/page.tsx
- app/verify/[id]/page.tsx
- components/Navbar.tsx
- components/WalletButton.tsx
- components/ui.tsx
- lib/api.ts
- lib/auth-store.ts
- lib/blockchain.ts
- lib/constants.ts
- lib/utils.ts
- types/index.ts

## Backend (src/)
- index.ts
- routes/auth.ts
- routes/verify.ts
- routes/reasoning.ts
- routes/validators.ts
- routes/analytics.ts
- routes/webhook.ts
- services/reasoning.ts
- services/verification.ts
- services/ipfs.ts
- middleware/auth.ts
- middleware/errorHandler.ts
- utils/logger.ts
- types/index.ts

## Contracts/
- VerificationRegistry.sol
- ValidatorStaking.sol
- hardhat.config.ts

## Docker/
- docker-compose.yml
- init.sql
