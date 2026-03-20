# N-Verify Protocol

Decentralized AI verification layer for the blockchain era.

![N-Verify Protocol](https://img.shields.io/badge/Version-1.0.0-blue)
![License](https://img.shields.io/badge/License-MIT-green)
![Status](https://img.shields.io/badge/Status-Building-orange)

## Overview

N-Verify Protocol transforms AI model outputs into cryptographically auditable reasoning chains. Built for healthcare, legal, and financial industries requiring EU AI Act compliance.

## Features

- 🔍 **Reasoning Extraction** - Decompose AI outputs into structured reasoning graphs
- ✅ **Domain Verification** - Verify against medical, legal, and financial knowledge bases  
- 🔐 **Cryptographic Proof** - Generate tamper-proof certificates with Merkle trees
- ⛓️ **On-Chain Storage** - Store verification records on Ethereum blockchain
- ⚡ **Fast Verification** - Complete verification in under 5 seconds
- 👥 **Distributed Validators** - Stake-based consensus from domain experts

## Quick Start

```bash
# Clone the repository
git clone https://github.com/nath10-dev/n-verify-protocol.git
cd n-verify-protocol

# Start with Docker
cd docker
docker-compose up -d

# Backend
cd ../backend
cp .env.example .env
# Edit .env with your API keys
npm install
npm run dev

# Frontend (new terminal)
cd ../frontend
npm install
npm run dev
```

## Documentation

- [CEO Brief](./CEO_BRIEF.md) - Full project roadmap
- [Quick Start](./QUICKSTART.md) - Getting started guide
- [API Docs](./backend/README.md) - API endpoints
- [Testing](./TESTING.md) - Testing guide
- [Security](./SECURITY.md) - Security policy

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Next.js 14, TypeScript, Tailwind CSS |
| Backend | Node.js, Express, TypeScript |
| Database | PostgreSQL 16, Redis 7.2 |
| AI/ML | OpenAI GPT-4, LangChain |
| Blockchain | Ethereum, Solidity, Hardhat |
| Storage | IPFS (Pinata) |

## Project Structure

```
n-verify/
├── frontend/          # Next.js web application
├── backend/          # Node.js/Express API
├── contracts/        # Solidity smart contracts
├── docker/          # Docker configuration
└── docs/            # Documentation
```

## API Endpoints

### Authentication
- `POST /api/v1/auth/register` - Register new user
- `POST /api/v1/auth/login` - Login user
- `GET /api/v1/auth/me` - Get current user

### Verification
- `POST /api/v1/verify` - Create verification request
- `GET /api/v1/verify` - List verifications
- `GET /api/v1/verify/:id` - Get verification details

### Validators
- `POST /api/v1/validators/register` - Register as validator
- `POST /api/v1/validators/:id/verify-node` - Submit verification

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing-feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- Twitter: [@nverifyprotocol](https://twitter.com/nverifyprotocol)
- Email: hello@nverify.io
- GitHub: https://github.com/nath10-dev/n-verify-protocol

---

Built with 🔥 by N-Verify Team
