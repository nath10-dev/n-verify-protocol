'use client';

import { useState } from 'react';

const features = [
  { name: 'Real-time Analysis', desc: 'Analyze outputs in <5 seconds', icon: '⚡' },
  { name: 'Domain-specific', desc: 'Medical, Legal, Financial', icon: '🎯' },
  { name: 'Blockchain Proof', desc: 'NFT certificates', icon: '⛓️' },
  { name: 'Easy Integration', desc: 'API, SDKs, CLI', icon: '🔌' }
];

const steps = [
  { num: '1', title: 'Paste Output', desc: 'Enter your AI-generated content' },
  { num: '2', title: 'Select Domain', desc: 'Choose Medical, Legal, or Financial' },
  { num: '3', title: 'Get Results', desc: 'Receive score and certificate' }
];

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">How It Works</h1>
          <p className="text-xl text-gray-400">Verify AI outputs in 3 simple steps</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {steps.map((s, i) => (
              <div key={i} className="text-center p-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-sky-500 text-black text-2xl font-bold rounded-full flex items-center justify-center">
                  {s.num}
                </div>
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-gray-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-12">What You Get</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-bold mb-1">{f.name}</h3>
                <p className="text-gray-400 text-sm">{f.desc}</p>
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