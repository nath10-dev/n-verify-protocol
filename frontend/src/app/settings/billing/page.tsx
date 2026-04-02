'use client';

import { useState } from 'react';

const plans = [
  { name: 'Free', price: 0, usage: '100/100' },
  { name: 'Pro', price: 99, usage: '2,450/10,000' },
  { name: 'Enterprise', price: 'Custom', usage: 'Unlimited' }
];

const history = [
  { date: 'March 31, 2026', amount: '$99.00', status: 'Paid', invoice: '#INV-2026-031' },
  { date: 'February 28, 2026', amount: '$99.00', status: 'Paid', invoice: '#INV-2026-028' },
  { date: 'January 31, 2026', amount: '$99.00', status: 'Paid', invoice: '#INV-2026-025' }
];

export default function BillingSettings() {
  const [currentPlan, setCurrentPlan] = useState('Pro');

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Billing</h1>
          <p className="text-gray-400">Manage your subscription and billing</p>
        </div>
      </section>

      {/* Current Plan */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xl font-bold mb-6">Current Plan</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <button
                key={i}
                onClick={() => setCurrentPlan(plan.name)}
                className={`p-6 rounded-2xl border text-left transition-colors ${
                  currentPlan === plan.name
                    ? 'bg-sky-500/10 border-sky-500'
                    : 'bg-white/5 border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold">{plan.name}</h3>
                  {currentPlan === plan.name && (
                    <span className="px-2 py-1 bg-sky-500 text-black text-xs rounded">Current</span>
                  )}
                </div>
                <div className="text-2xl font-bold mb-2">
                  {typeof plan.price === 'number' ? `$${plan.price}` : plan.price}
                  {plan.price !== 'Custom' && <span className="text-gray-400 text-sm">/mo</span>}
                </div>
                <div className="text-gray-400 text-sm">Usage: {plan.usage}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Usage */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xl font-bold mb-6">Usage This Month</h2>
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
            <div className="flex justify-between mb-4">
              <span>Verifications</span>
              <span>2,450 / 10,000</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-3">
              <div className="bg-sky-500 h-3 rounded-full" style={{ width: '24.5%' }} />
            </div>
            <div className="mt-4 text-gray-400 text-sm">7,550 verifications remaining</div>
          </div>
        </div>
      </section>

      {/* Payment Method */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xl font-bold mb-6">Payment Method</h2>
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-3xl">💳</div>
              <div>
                <div className="font-medium">Visa ending in 4242</div>
                <div className="text-gray-400 text-sm">Expires 12/2027</div>
              </div>
            </div>
            <button className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 text-sm">
              Update
            </button>
          </div>
        </div>
      </section>

      {/* Invoice History */}
      <section className="py-12 pb-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xl font-bold mb-6">Invoice History</h2>
          <div className="space-y-3">
            {history.map((inv, i) => (
              <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-xl flex items-center justify-between">
                <div>
                  <div className="font-medium">{inv.invoice}</div>
                  <div className="text-gray-400 text-sm">{inv.date}</div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-bold">{inv.amount}</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">{inv.status}</span>
                  <button className="text-sky-400 text-sm hover:underline">Download</button>
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