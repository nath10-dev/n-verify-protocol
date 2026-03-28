import { ethers } from 'ethers';

declare global {
  interface Window {
    ethereum?: any;
  }
}

export interface WalletState {
  address: string | null;
  chainId: number | null;
  isConnected: boolean;
  balance: string | null;
}

const initialState: WalletState = {
  address: null,
  chainId: null,
  isConnected: false,
  balance: null,
};

class BlockchainWallet {
  private state: WalletState = initialState;
  private listeners: Set<(state: WalletState) => void> = new Set();

  // Subscribe to wallet state changes
  subscribe(listener: (state: WalletState) => void) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  // Get current state
  getState(): WalletState {
    return this.state;
  }

  // Notify all listeners
  private notify() {
    this.listeners.forEach(listener => listener(this.state));
  }

  // Connect to wallet
  async connect(): Promise<WalletState> {
    if (!window.ethereum) {
      throw new Error('MetaMask not installed');
    }

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      
      // Request account access
      const accounts = await provider.send('eth_requestAccounts', []);
      
      if (accounts.length === 0) {
        throw new Error('No accounts found');
      }

      const network = await provider.getNetwork();
      const balance = await provider.getBalance(accounts[0]);

      this.state = {
        address: accounts[0],
        chainId: Number(network.chainId),
        isConnected: true,
        balance: ethers.formatEther(balance),
      };

      // Set up event listeners
      this.setupEventListeners();

      this.notify();
      return this.state;
    } catch (error) {
      console.error('Failed to connect wallet:', error);
      throw error;
    }
  }

  // Disconnect wallet
  disconnect() {
    this.state = initialState;
    this.notify();
  }

  // Switch network
  async switchNetwork(chainId: number) {
    if (!window.ethereum) return;

    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: `0x${chainId.toString(16)}` }],
      });
    } catch (error) {
      console.error('Failed to switch network:', error);
      throw error;
    }
  }

  // Sign message
  async signMessage(message: string): Promise<string> {
    if (!window.ethereum) {
      throw new Error('MetaMask not installed');
    }

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    
    return signer.signMessage(message);
  }

  // Get contract instance
  getContract(contractAddress: string, abi: any[]) {
    if (!window.ethereum) {
      throw new Error('MetaMask not installed');
    }

    const provider = new ethers.BrowserProvider(window.ethereum);
    return new ethers.Contract(contractAddress, abi, provider);
  }

  // Send transaction
  async sendTransaction(to: string, value: string) {
    if (!window.ethereum) {
      throw new Error('MetaMask not installed');
    }

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();

    const tx = {
      to,
      value: ethers.parseEther(value),
    };

    return signer.sendTransaction(tx);
  }

  // Setup event listeners for account/network changes
  private setupEventListeners() {
    if (!window.ethereum) return;

    // Handle account changes
    window.ethereum.on('accountsChanged', (accounts: string[]) => {
      if (accounts.length === 0) {
        this.disconnect();
      } else {
        this.connect();
      }
    });

    // Handle chain changes
    window.ethereum.on('chainChanged', () => {
      this.connect();
    });
  }

  // Check if connected
  isConnected(): boolean {
    return this.state.isConnected;
  }

  // Get address
  getAddress(): string | null {
    return this.state.address;
  }

  // Get chain ID
  getChainId(): number | null {
    return this.state.chainId;
  }

  // Get required chain IDs
  static SUPPORTED_CHAINS = {
    mainnet: 1,
    sepolia: 11155111,
    goerli: 5,
  };

  // Check if current chain is supported
  isSupportedChain(): boolean {
    const supportedChainIds = Object.values(BlockchainWallet.SUPPORTED_CHAINS);
    return this.state.chainId !== null && supportedChainIds.includes(this.state.chainId);
  }

  // Get chain name
  static getChainName(chainId: number): string {
    const chains: Record<number, string> = {
      1: 'Ethereum Mainnet',
      5: 'Goerli',
      11155111: 'Sepolia',
    };
    return chains[chainId] || `Chain ${chainId}`;
  }
}

// Export singleton instance
export const wallet = new BlockchainWallet();
export default wallet;