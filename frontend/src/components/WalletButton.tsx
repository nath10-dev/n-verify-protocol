'use client';

import { useState } from 'react';
import { blockchainService } from '@/lib/blockchain';

export default function WalletButton() {
  const [connected, setConnected] = useState(false);
  const [address, setAddress] = useState('');
  const [connecting, setConnecting] = useState(false);

  const connectWallet = async () => {
    setConnecting(true);
    try {
      const success = await blockchainService.connect();
      if (success) {
        const addr = await blockchainService.getSignerAddress();
        if (addr) {
          setAddress(addr);
          setConnected(true);
        }
      }
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    } finally {
      setConnecting(false);
    }
  };

  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  if (connected) {
    return (
      <button className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white px-4 py-2 rounded-lg transition-colors">
        <div className="w-2 h-2 bg-green-500 rounded-full" />
        <span className="font-mono text-sm">{formatAddress(address)}</span>
      </button>
    );
  }

  return (
    <button
      onClick={connectWallet}
      disabled={connecting}
      className="bg-sky-500 hover:bg-sky-400 text-slate-900 font-semibold px-4 py-2 rounded-lg transition-colors disabled:opacity-50"
    >
      {connecting ? 'Connecting...' : 'Connect Wallet'}
    </button>
  );
}
