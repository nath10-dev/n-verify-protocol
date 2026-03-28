# Smart Contract Deployment Guide

## Prerequisites

Before deploying, ensure you have:

1. **Node.js** installed (v18+)
2. **MetaMask wallet** with testnet ETH
3. **Infura or Alchemy** account for RPC URL

---

## Step 1: Configure Environment

```bash
cd contracts

# Install dependencies
npm install

# Create .env file
cp .env.example .env
```

Edit `.env` with:
```env
SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_KEY
PRIVATE_KEY=YOUR_METAMASK_PRIVATE_KEY (without 0x prefix)
ETHERSCAN_API_KEY=YOUR_ETHERSCAN_KEY (optional)
```

---

## Step 2: Compile Contracts

```bash
npx hardhat compile
```

Expected output:
```
Compilation completed successfully!
VerificationRegistry.sol: VerificationRegistry
ValidatorStaking.sol: ValidatorStaking
```

---

## Step 3: Deploy to Sepolia Testnet

```bash
npx hardhat run scripts/deploy-sepolia.ts --network sepolia
```

Expected output:
```
Deploying VerificationRegistry...
VerificationRegistry deployed to: 0x...
Deploying ValidatorStaking...
ValidatorStaking deployed to: 0x...
```

**Save these contract addresses!** You'll need them for backend config.

---

## Step 4: Verify Contracts (Optional)

```bash
npx hardhat verify --network sepolia VERIFICATION_REGISTRY_ADDRESS
npx hardhat verify --network sepolia VALIDATOR_STAKING_ADDRESS
```

---

## Step 5: Update Backend Config

Add the deployed addresses to your `backend/.env`:
```env
CONTRACT_ADDRESS=0xYourVerificationRegistryAddress
```

---

## Networks Configuration

The `hardhat.config.ts` supports:

| Network | Command |
|---------|---------|
| Localhost | `npx hardhat node` |
| Sepolia | `--network sepolia` |
| Mainnet | `--network mainnet` |

---

## Testing Locally

```bash
# Start local node
npx hardhat node

# Deploy to localhost
npx hardhat run scripts/deploy.ts --network localhost
```

---

## Contract Functions

### VerificationRegistry
- `createVerification(certificateId, domain, reliabilityScore, aiOutputHash, tokenURI)` → Returns tokenId
- `getVerification(tokenId)` → Returns verification details
- `tokenURI(tokenId)` → Returns certificate metadata

### ValidatorStaking
- `stake()` → Become a validator (requires 100 ETH)
- `unstake()` → Withdraw stake (after 30-day lock)
- `getStake(validator)` → Check staked amount
- `getValidatorStatus(validator)` → Check if validator

---

## Need Testnet ETH?

| Network | Faucet |
|---------|--------|
| Sepolia | https://sepoliafaucet.com |
| Goerli | https://goerlifaucet.com |

---

## Troubleshooting

**Error: Insufficient funds?**
→ Get more testnet ETH from faucet

**Error: nonce too low?**
→ Reset MetaMask account or set correct nonce

**Contract not verifying?**
→ Wait a few minutes and try again