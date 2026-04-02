'use client';

import { useState } from 'react';

const plans = [
  { 
    name: 'Starter', 
    price: 0, 
    features: ['5 verifications/mo', 'Basic support', '1 team member'] 
  },
  { 
    name: 'Growth', 
    price: 49, 
    features: ['500 verifications/mo', 'Priority support', '5 team members', 'API access'] 
  },
  { 
    name: 'Scale', 
    price: 199, 
    features: ['5,000 verifications/mo', 'Dedicated support', 'Unlimited members', 'Advanced analytics'] 
  },
  { 
    name: 'Enterprise', 
    price: 'Custom', 
    features: ['Unlimited verifications', 'Custom solutions', 'SLA', 'On-premise option'] 
  }
];

export default function PricingV2() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Pricing Plans</h1>
          <p className="text-xl text-gray-400">Simple, transparent pricing for every stage</p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-12 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6">
            {plans.map((plan, i) => (
              <div 
                key={i} 
                className={`p-6 rounded-2xl border ${
                  i === 1 ? 'bg-sky-500/10 border-sky-500' : 'bg-white/5 border-white/10'
                }`}
              >
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold mb-4">
                  {typeof plan.price === 'number' ? `$${plan.price}` : plan.price}
                  {typeof plan.price === 'number' && <span className="text-gray-400 text-sm">/mo</span>}
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((f, j) => (
                    <li key={j} className="text-gray-400 text-sm flex items-center gap-2">
                      <span className="text-sky-400">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-2 rounded-lg ${
                  i === 1 ? 'bg-sky-500 text-black' : 'bg-white/10'
                }`}>
                  {plan.price === 0 ? 'Free' : plan.price === 'Custom' ? 'Contact' : 'Get Started'}
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