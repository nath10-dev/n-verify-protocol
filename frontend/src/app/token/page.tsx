'use client';

import { useState } from 'react';

const tokens = [
  { symbol: 'NV', name: 'N-Verify Token', price: '$2.45', change: '+5.2%', marketCap: '$245M' },
  { symbol: 'ETH', name: 'Ethereum', price: '$2,890', change: '+2.1%', marketCap: '$340B' },
  { symbol: 'USDC', name: 'USD Coin', price: '$1.00', change: '0.0%', marketCap: '$42B' }
];

const allocation = [
  { category: 'Community', percent: 30 },
  { category: 'Team', percent: 20 },
  { category: 'Investors', percent: 25 },
  { category: 'Foundation', percent: 15 },
  { category: 'Airdrop', percent: 10 }
];

export default function Token() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1 bg-sky-500/20 text-sky-400 rounded-full text-sm mb-4">
            Coming Soon
          </div>
          <h1 className="text-5xl font-bold mb-4">N-Verify Token (NV)</h1>
          <p className="text-xl text-gray-400">The token that powers the N-Verify ecosystem</p>
        </div>
      </section>

      {/* Token Info */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">Tokenomics</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {tokens.map((t, i) => (
              <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold">{t.symbol}</span>
                  <span className={`px-2 py-1 rounded text-sm ${
                    t.change.startsWith('+') ? 'text-green-400' : 'text-gray-400'
                  }`}>{t.change}</span>
                </div>
                <div className="text-gray-400 text-sm">{t.name}</div>
                <div className="text-xl font-bold mt-2">{t.price}</div>
                <div className="text-gray-500 text-sm">{t.marketCap}</div>
              </div>
            ))}
          </div>

          {/* Allocation */}
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
            <h3 className="font-bold mb-6">Token Allocation</h3>
            <div className="space-y-4">
              {allocation.map((a, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-32">{a.category}</div>
                  <div className="flex-1 bg-gray-800 rounded-full h-4">
                    <div className="bg-sky-500 h-4 rounded-full" style={{ width: `${a.percent}%` }} />
                  </div>
                  <div className="w-16 text-right">{a.percent}%</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-12">Token Utility</h2>
          <div className="space-y-4">
            {[
              { title: 'Staking', desc: 'Stake NV to become a validator and earn rewards' },
              { title: 'Governance', desc: 'Vote on protocol upgrades and decisions' },
              { title: 'Fee Discount', desc: 'Pay verification fees with NV for 50% discount' },
              { title: 'Rewards', desc: 'Earn NV for verifying AI outputs' }
            ].map((u, i) => (
              <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-xl">
                <h3 className="font-bold text-lg mb-2">{u.title}</h3>
                <p className="text-gray-400">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-8 bg-black border-t border-white/10 text-center text-gray-500">
        © 2026 N-Verify Protocol
      </footer>
    </div>
  );
}