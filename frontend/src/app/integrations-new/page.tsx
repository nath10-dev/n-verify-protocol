'use client';

import { useState } from 'react';

const integrations = [
  { name: 'OpenAI', icon: '🤖', status: 'connected' },
  { name: 'Anthropic', icon: '🧠', status: 'connected' },
  { name: 'Google AI', icon: '🔵', status: 'available' },
  { name: 'Meta AI', icon: '🔷', status: 'available' },
  { name: 'Mistral', icon: '🌫️', status: 'available' },
  { name: 'Cohere', icon: '💬', status: 'coming_soon' }
];

export default function IntegrationsNew() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">AI Integrations</h1>
          <p className="text-xl text-gray-400">Connect with your favorite AI providers</p>
        </div>
      </section>

      {/* Connected */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-xl font-bold mb-6">Connected</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {integrations.filter(i => i.status === 'connected').map((int, i) => (
              <div key={i} className="p-6 bg-green-500/10 border border-green-500/30 rounded-2xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl">{int.icon}</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">Connected</span>
                </div>
                <h3 className="text-xl font-bold">{int.name}</h3>
                <button className="mt-4 w-full py-2 bg-white/10 rounded-lg hover:bg-white/20 text-sm">
                  Configure
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-xl font-bold mb-6">Available</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {integrations.filter(i => i.status === 'available').map((int, i) => (
              <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl">{int.icon}</span>
                  <span className="px-3 py-1 bg-sky-500/20 text-sky-400 text-xs rounded-full">Available</span>
                </div>
                <h3 className="text-xl font-bold">{int.name}</h3>
                <button className="mt-4 w-full py-2 bg-sky-500 text-black rounded-lg hover:bg-sky-400 text-sm">
                  Connect
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-12 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-xl font-bold mb-6">Coming Soon</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {integrations.filter(i => i.status === 'coming_soon').map((int, i) => (
              <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl opacity-60">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl">{int.icon}</span>
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full">Coming Soon</span>
                </div>
                <h3 className="text-xl font-bold">{int.name}</h3>
                <button className="mt-4 w-full py-2 bg-white/10 rounded-lg text-sm">
                  Notify Me
                </button>
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