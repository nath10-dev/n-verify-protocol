import { ethers } from "hardhat";

async function main() {
  console.log("Deploying VerificationRegistry...");
  
  const VerificationRegistry = await ethers.getContractFactory("VerificationRegistry");
  const registry = await VerificationRegistry.deploy();
  
  await registry.waitForDeployment();
  const address = await registry.getAddress();
  
  console.log(`VerificationRegistry deployed to: ${address}`);
  
  // Save the address to a file
  const fs = require("fs");
  const path = require("path");
  
  const deploymentInfo = {
    network: (await ethers.provider.getNetwork()).name,
    chainId: (await ethers.provider.getNetwork()).chainId.toString(),
    address: address,
    timestamp: new Date().toISOString()
  };
  
  const deploymentsPath = path.join(__dirname, "deployments");
  if (!fs.existsSync(deploymentsPath)) {
    fs.mkdirSync(deploymentsPath);
  }
  
  fs.writeFileSync(
    path.join(deploymentsPath, `deployment-${deploymentInfo.network}.json`),
    JSON.stringify(deploymentInfo, null, 2)
  );
  
  console.log("Deployment info saved!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
