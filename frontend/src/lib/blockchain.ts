import { ethers } from 'ethers';
import VerificationRegistryABI from '../artifacts/contracts/VerificationRegistry.sol/VerificationRegistry.json';

const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_VERIFICATION_REGISTRY_ADDRESS || '';

export interface VerificationRecord {
  requestId: string;
  domain: string;
  merkleRoot: string;
  timestamp: number;
  validators: string[];
  consensusPercentage: number;
  ipfsHash: string;
  isVerified: boolean;
}

export class BlockchainService {
  private provider: ethers.BrowserProvider | null = null;
  private contract: ethers.Contract | null = null;

  async connect(): Promise<boolean> {
    if (typeof window === 'undefined' || !window.ethereum) {
      return false;
    }

    try {
      this.provider = new ethers.BrowserProvider(window.ethereum);
      await this.provider.send('eth_requestAccounts', []);
      
      const signer = await this.provider.getSigner();
      this.contract = new ethers.Contract(
        CONTRACT_ADDRESS,
        VerificationRegistryABI.abi,
        signer
      );
      
      return true;
    } catch (error) {
      console.error('Failed to connect to wallet:', error);
      return false;
    }
  }

  async isConnected(): Promise<boolean> {
    if (!this.provider) return false;
    const accounts = await this.provider.listAccounts();
    return accounts.length > 0;
  }

  async getVerification(requestId: string): Promise<VerificationRecord | null> {
    if (!this.contract) return null;

    try {
      const record = await this.contract.getVerification(requestId);
      return {
        requestId: record.requestId,
        domain: record.domain,
        merkleRoot: record.merkleRoot,
        timestamp: Number(record.timestamp),
        validators: record.validators,
        consensusPercentage: record.consensusPercentage,
        ipfsHash: record.ipfsHash,
        isVerified: record.isVerified,
      };
    } catch (error) {
      console.error('Failed to get verification:', error);
      return null;
    }
  }

  async recordVerification(
    requestId: string,
    domain: string,
    merkleRoot: string,
    validators: string[],
    consensusPercentage: number,
    ipfsHash: string
  ): Promise<boolean> {
    if (!this.contract) return false;

    try {
      const tx = await this.contract.recordVerification(
        requestId,
        domain,
        merkleRoot,
        validators,
        consensusPercentage,
        ipfsHash
      );
      await tx.wait();
      return true;
    } catch (error) {
      console.error('Failed to record verification:', error);
      return false;
    }
  }

  async getSignerAddress(): Promise<string | null> {
    if (!this.provider) return null;
    const accounts = await this.provider.listAccounts();
    return accounts[0]?.address || null;
  }
}

export const blockchainService = new BlockchainService();

// TypeScript declaration for window.ethereum
declare global {
  interface Window {
    ethereum?: any;
  }
}
