# N-Verify Protocol - Workspace Structure

```
n-verify-protocol/
├── frontend/                    # Next.js 14 Web App
│   ├── src/
│   │   ├── app/               # App Router pages
│   │   │   ├── page.tsx       # Landing page
│   │   │   ├── layout.tsx     # Root layout
│   │   │   ├── globals.css    # Global styles
│   │   │   ├── login/         # Login page
│   │   │   ├── register/      # Register page
│   │   │   ├── dashboard/     # Dashboard page
│   │   │   └── verify/        # Verification pages
│   │   ├── components/        # React components
│   │   │   ├── ui.tsx        # UI primitives
│   │   │   ├── Navbar.tsx    # Navigation
│   │   │   └── WalletButton.tsx
│   │   ├── lib/              # Utilities
│   │   │   ├── api.ts        # API client
│   │   │   ├── auth-store.ts # Auth state
│   │   │   ├── blockchain.ts # Web3
│   │   │   ├── constants.ts  # App constants
│   │   │   └── utils.ts      # Helpers
│   │   └── middleware.ts      # Auth middleware
│   ├── package.json
│   ├── tsconfig.json
│   ├── tailwind.config.js
│   └── next.config.js
│
├── backend/                     # Express API
│   ├── src/
│   │   ├── index.ts          # Server entry
│   │   ├── routes/          # API routes
│   │   │   ├── auth.ts      # Authentication
│   │   │   ├── verify.ts    # Verifications
│   │   │   ├── reasoning.ts # Reasoning graphs
│   │   │   ├── validators.ts
│   │   │   ├── analytics.ts
│   │   │   └── webhook.ts
│   │   ├── services/        # Business logic
│   │   │   ├── reasoning.ts # OpenAI extraction
│   │   │   ├── verification.ts
│   │   │   └── ipfs.ts      # IPFS + Merkle
│   │   ├── middleware/      # Express middleware
│   │   │   ├── auth.ts
│   │   │   └── errorHandler.ts
│   │   └── utils/
│   │       └── logger.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── .env.example
│
├── contracts/                   # Solidity
│   ├── VerificationRegistry.sol
│   ├── ValidatorStaking.sol
│   ├── hardhat.config.ts
│   └── scripts/
│       └── deploy.ts
│
├── docker/                     # Container config
│   ├── docker-compose.yml
│   └── init.sql              # DB schema
│
├── docs/                       # Documentation
├── README.md
├── CEO_BRIEF.md
├── QUICKSTART.md
├── TESTING.md
├── DEPLOY.md
├── API_REFERENCE.md
├── SECURITY.md
├── CHANGELOG.md
├── CONTRIBUTING.md
├── LICENSE
└── .gitignore
```
