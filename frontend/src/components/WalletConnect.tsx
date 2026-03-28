'use client';

import { useState, useEffect } from 'react';
import { ethers } from 'ethers';

export default function WalletConnect() {
  const [account, setAccount] = useState<string | null>(null);
  const [connecting, setConnecting] = useState(false);
  const [error, setError] = useState('');

  const connectWallet = async () => {
    if (!window.ethereum) {
      setError('MetaMask not installed!');
      return;
    }

    setConnecting(true);
    setError('');

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send('eth_requestAccounts', []);
      setAccount(accounts[0]);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setConnecting(false);
    }
  };

  const disconnect = () => {
    setAccount(null);
  };

  return (
    <div className="p-4 bg-slate-800 rounded-lg">
      {!account ? (
        <button
          onClick={connectWallet}
          disabled={connecting}
          className="px-6 py-3 bg-sky-500 hover:bg-sky-400 disabled:bg-slate-600 rounded-lg font-medium"
        >
          {connecting ? 'Connecting...' : 'Connect Wallet'}
        </button>
      ) : (
        <div className="flex items-center justify-between">
          <div>
            <span className="text-slate-400 mr-2">Connected:</span>
            <span className="font-mono text-sky-400">
              {account.slice(0, 6)}...{account.slice(-4)}
            </span>
          </div>
          <button
            onClick={disconnect}
            className="px-4 py-2 text-red-400 hover:text-red-300"
          >
            Disconnect
          </button>
        </div>
      )}
      {error && (
        <div className="mt-2 text-red-400 text-sm">{error}</div>
      )}
    </div>
  );
}