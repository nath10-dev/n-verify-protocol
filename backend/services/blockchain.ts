import { ethers } from 'ethers';
import { VerificationRegistry } from '../contracts/VerificationRegistry';
import { ValidatorStaking } from '../contracts/ValidatorStaking';

// Contract addresses - update after deployment
const CONTRACT_ADDRESSES = {
  sepolia: {
    verificationRegistry: process.env.VERIFICATION_REGISTRY_ADDRESS || '0x0000000000000000000000000000000000000000',
    validatorStaking: process.env.VALIDATOR_STAKING_ADDRESS || '0x0000000000000000000000000000000000000000'
  },
  mainnet: {
    verificationRegistry: process.env.MAINNET_VERIFICATION_REGISTRY_ADDRESS || '',
    validatorStaking: process.env.MAINNET_VALIDATOR_STAKING_ADDRESS || ''
  }
};

class BlockchainService {
  private provider: ethers.JsonRpcProvider | null = null;
  private verificationContract: ethers.Contract | null = null;
  private stakingContract: ethers.Contract | null = null;
  private network: 'sepolia' | 'mainnet' = 'sepolia';

  // Initialize provider
  initialize(rpcUrl: string, network: 'sepolia' | 'mainnet' = 'sepolia') {
    this.provider = new ethers.JsonRpcProvider(rpcUrl);
    this.network = network;
    
    const addresses = CONTRACT_ADDRESSES[network];
    
    // In production, you would import the contract ABIs
    // For now, we'll use a basic interface
    this.verificationContract = new ethers.Contract(
      addresses.verificationRegistry,
      [
        'function createVerification(string, string, string, string, string) returns (uint256)',
        'function getVerification(uint256) view returns (tuple(string, string, string, uint256, string))',
        'function tokenURI(uint256) view returns (string)'
      ],
      this.provider
    );

    this.stakingContract = new ethers.Contract(
      addresses.validatorStaking,
      [
        'function stake() external payable',
        'function unstake() external',
        'function getStake(address) view returns (uint256)',
        'function getValidatorStatus(address) view returns (bool)',
        'function isValidator(address) view returns (bool)'
      ],
      this.provider
    );
  }

  // Connect wallet (from frontend)
  async connectWallet() {
    if (!window.ethereum) {
      throw new Error('MetaMask not installed');
    }
    
    const provider = new ethers.BrowserProvider(window.ethereum);
    const accounts = await provider.send('eth_requestAccounts', []);
    
    return {
      address: accounts[0],
      chainId: (await provider.getNetwork()).chainId
    };
  }

  // Create verification on blockchain
  async createVerification(
    wallet: string,
    certificateId: string,
    domain: string,
    reliabilityScore: string,
    aiOutputHash: string,
    tokenURI: string
  ): Promise<string> {
    if (!this.verificationContract) {
      throw new Error('Blockchain not initialized');
    }

    // Sign transaction with user's wallet
    // In production, this would be done via frontend with MetaMask
    // Here we just return a mock transaction hash
    const mockTxHash = `0x${Buffer.from(certificateId).toString('hex')}${Date.now()}`;
    
    return mockTxHash;
  }

  // Get verification from blockchain
  async getVerification(tokenId: number): Promise<any> {
    if (!this.verificationContract) {
      throw new Error('Blockchain not initialized');
    }

    try {
      const verification = await this.verificationContract.getVerification(tokenId);
      return {
        certificateId: verification[0],
        domain: verification[1],
        reliabilityScore: verification[2],
        timestamp: verification[3].toString(),
        aiOutputHash: verification[4]
      };
    } catch (error) {
      console.error('Error fetching verification:', error);
      return null;
    }
  }

  // Become a validator (stake tokens)
  async becomeValidator(wallet: string, domain: string): Promise<string> {
    if (!this.stakingContract) {
      throw new Error('Blockchain not initialized');
    }

    // Minimum stake is 100 ETH (in wei)
    const stakeAmount = ethers.parseEther('100');
    
    // In production, this would be a transaction
    const mockTxHash = `0xvalidator${Date.now()}`;
    
    return mockTxHash;
  }

  // Check validator status
  async getValidatorStatus(wallet: string): Promise<{ isValidator: boolean; stake: string }> {
    if (!this.stakingContract) {
      throw new Error('Blockchain not initialized');
    }

    try {
      const isValidator = await this.stakingContract.isValidator(wallet);
      const stake = isValidator ? await this.stakingContract.getStake(wallet) : '0';
      
      return {
        isValidator,
        stake: ethers.formatEther(stake)
      };
    } catch (error) {
      console.error('Error checking validator status:', error);
      return { isValidator: false, stake: '0' };
    }
  }

  // Verify wallet signature
  async verifySignature(message: string, signature: string, address: string): Promise<boolean> {
    try {
      const recoveredAddress = ethers.verifyMessage(message, signature);
      return recoveredAddress.toLowerCase() === address.toLowerCase();
    } catch (error) {
      console.error('Signature verification failed:', error);
      return false;
    }
  }

  // Get current network
  getNetwork(): string {
    return this.network;
  }

  // Check if connected
  isConnected(): boolean {
    return this.provider !== null;
  }
}

// Export singleton instance
export const blockchainService = new BlockchainService();
export default blockchainService;