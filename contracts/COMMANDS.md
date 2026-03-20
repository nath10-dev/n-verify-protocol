# Smart Contract Commands

## Compile

```bash
cd contracts
npx hardhat compile
```

## Test

```bash
npx hardhat test
```

## Deploy

### Localhost
```bash
npx hardhat run scripts/deploy.ts --network localhost
```

### Sepolia
```bash
npx hardhat run scripts/deploy-sepolia.ts --network sepolia
```

### Mainnet
```bash
npx hardhat run scripts/deploy.ts --network mainnet
```

## Verify Contract

```bash
npx hardhat verify --network sepolia CONTRACT_ADDRESS
```

## Clean

```bash
npx hardhat clean
```
