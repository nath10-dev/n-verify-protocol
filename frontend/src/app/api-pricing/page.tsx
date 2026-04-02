'use client';

import { useState } from 'react';

const plans = [
  { name: 'Starter', price: 0, calls: '1K/mo' },
  { name: 'Pro', price: 99, calls: '100K/mo' },
  { name: 'Enterprise', price: 499, calls: 'Unlimited' }
];

export default function APIPricing() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">API Pricing</h1>
          <p className="text-xl text-gray-400">Pay only for what you use</p>
        </div>
      </section>

      <section className="py-12 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold mb-2">
                  ${plan.price}<span className="text-gray-400 text-sm">/mo</span>
                </div>
                <div className="text-gray-400">{plan.calls} API calls</div>
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