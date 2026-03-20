import { ethers } from 'hardhat';
import fs from 'fs';
import path from 'path';

async function main() {
  console.log('Deploying N-Verify contracts to Sepolia...');
  
  // Get deployer account
  const [deployer] = await ethers.getSigners();
  console.log('Deploying with account:', deployer.address);
  
  // Deploy VerificationRegistry
  console.log('\nDeploying VerificationRegistry...');
  const VerificationRegistry = await ethers.getContractFactory('VerificationRegistry');
  const registry = await VerificationRegistry.deploy();
  await registry.waitForDeployment();
  const registryAddress = await registry.getAddress();
  console.log('VerificationRegistry deployed to:', registryAddress);
  
  // Deploy ValidatorStaking
  console.log('\nDeploying ValidatorStaking...');
  const ValidatorStaking = await ethers.getContractFactory('ValidatorStaking');
  const staking = await ValidatorStaking.deploy();
  await staking.waitForDeployment();
  const stakingAddress = await staking.getAddress();
  console.log('ValidatorStaking deployed to:', stakingAddress);
  
  // Save deployment addresses
  const deploymentAddresses = {
    network: 'sepolia',
    chainId: 11155111,
    contracts: {
      VerificationRegistry: registryAddress,
      ValidatorStaking: stakingAddress,
    },
    deployer: deployer.address,
    timestamp: new Date().toISOString(),
  };
  
  const deploymentsDir = path.join(__dirname, '../deployments');
  if (!fs.existsSync(deploymentsDir)) {
    fs.mkdirSync(deploymentsDir, { recursive: true });
  }
  
  fs.writeFileSync(
    path.join(deploymentsDir, 'sepolia.json'),
    JSON.stringify(deploymentAddresses, null, 2)
  );
  
  console.log('\n✅ Deployment complete!');
  console.log('\nUpdate your .env file:');
  console.log(`NEXT_PUBLIC_VERIFICATION_REGISTRY_ADDRESS=${registryAddress}`);
  
  // Verify contracts on Etherscan
  console.log('\nVerifying contracts on Etherscan...');
  try {
    await ethers.run('verify:verify', {
      address: registryAddress,
      constructorArguments: [],
    });
    console.log('VerificationRegistry verified');
    
    await ethers.run('verify:verify', {
      address: stakingAddress,
      constructorArguments: [],
    });
    console.log('ValidatorStaking verified');
  } catch (error) {
    console.log('Verification skipped (needs Etherscan API key)');
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
