'use client';

import { useState } from 'react';

const validators = [
  { id: 'v1', name: 'Alice Validator', stake: '50,000 NV', rewards: '1,250 NV', uptime: '99.9%', region: 'US-East' },
  { id: 'v2', name: 'Bob Node', stake: '45,000 NV', rewards: '1,100 NV', uptime: '99.8%', region: 'EU-West' },
  { id: 'v3', name: 'Carol Staking', stake: '40,000 NV', rewards: '980 NV', uptime: '99.7%', region: 'Asia-Pacific' },
  { id: 'v4', name: 'David Pool', stake: '35,000 NV', rewards: '850 NV', uptime: '99.9%', region: 'US-West' },
];

export default function Staking() {
  const [myStake, setMyStake] = useState(0);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1 bg-sky-500/20 text-sky-400 rounded-full text-sm mb-4">
            Coming Soon
          </div>
          <h1 className="text-5xl font-bold mb-4">N-Verify Staking</h1>
          <p className="text-xl text-gray-400">Stake NV tokens to become a validator and earn rewards</p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-4 gap-8">
            {[
              { value: '$12.5M', label: 'Total Staked' },
              { value: '250+', label: 'Validators' },
              { value: '8.5%', label: 'APY' },
              { value: '30s', label: 'Block Time' }
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold text-sky-400 mb-2">{s.value}</div>
                <div className="text-gray-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* My Stake */}
      <section className="py-12">
        <div className="max-w-2xl mx-auto px-6">
          <div className="p-6 bg-sky-500/10 border border-sky-500/30 rounded-2xl">
            <h2 className="text-xl font-bold mb-4">Your Stake</h2>
            <div className="text-4xl font-bold mb-4">{myStake.toLocaleString()} NV</div>
            <div className="flex gap-4">
              <button className="flex-1 py-3 bg-sky-500 text-black font-medium rounded-xl hover:bg-sky-400">
                Stake More
              </button>
              <button className="flex-1 py-3 border border-white/20 rounded-xl hover:bg-white/5">
                Unstake
              </button>
            </div>
            <div className="mt-4 text-center text-gray-400 text-sm">
              Estimated rewards: {(myStake * 0.085 / 12).toFixed(2)} NV/month
            </div>
          </div>
        </div>
      </section>

      {/* Top Validators */}
      <section className="py-12 pb-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xl font-bold mb-6">Top Validators</h2>
          <div className="space-y-3">
            {validators.map((v, i) => (
              <div key={v.id} className="p-4 bg-white/5 border border-white/10 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-gray-500">#{i + 1}</span>
                  <div>
                    <div className="font-bold">{v.name}</div>
                    <div className="text-gray-500 text-sm">{v.region}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold">{v.stake}</div>
                  <div className="text-green-400 text-sm">{v.rewards}/mo</div>
                </div>
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