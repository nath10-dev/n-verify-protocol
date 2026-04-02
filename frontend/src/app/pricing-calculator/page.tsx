'use client';

import { useState } from 'react';

export default function PricingCalculator() {
  const [verifications, setVerifications] = useState(1000);
  const [domain, setDomain] = useState('all');
  const [features, setFeatures] = useState({
    api: false,
    certificates: true,
    priority: false,
    team: false
  });

  const basePrice = 0;
  const pricePer1000 = domain === 'all' ? 49 : 39;
  
  let total = basePrice + Math.ceil(verifications / 1000) * pricePer1000;
  if (features.api) total += 49;
  if (features.priority) total += 29;
  if (features.team) total += 19;

  const plans = [
    { name: 'Free', verifications: 100, price: 0, features: ['Basic analysis', '1 domain'] },
    { name: 'Pro', verifications: 10000, price: 99, features: ['All domains', 'NFT certificates', 'API access', 'Priority support'] },
    { name: 'Enterprise', verifications: 'Unlimited', price: 'Custom', features: ['Custom AI', 'Dedicated support', 'SLA', 'Integrations'] }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Pricing Calculator</h1>
          <p className="text-xl text-gray-400">Estimate your monthly costs</p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Inputs */}
            <div className="space-y-6">
              {/* Verifications */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">Monthly Verifications</label>
                <input
                  type="range"
                  min="100"
                  max="100000"
                  step="100"
                  value={verifications}
                  onChange={(e) => setVerifications(Number(e.target.value))}
                  className="w-full"
                />
                <div className="text-center text-2xl font-bold mt-2">{verifications.toLocaleString()}</div>
              </div>

              {/* Domain */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">Domains</label>
                <div className="flex gap-2">
                  {['all', 'medical', 'legal', 'financial'].map(d => (
                    <button
                      key={d}
                      onClick={() => setDomain(d)}
                      className={`px-4 py-2 rounded-lg text-sm capitalize ${
                        domain === d ? 'bg-sky-500 text-black' : 'bg-white/10 text-gray-400'
                      }`}
                    >
                      {d === 'all' ? 'All' : d}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add-ons */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">Add-ons</label>
                <div className="space-y-2">
                  {[
                    { key: 'api', label: 'API Access', price: '$49/mo' },
                    { key: 'priority', label: 'Priority Support', price: '$29/mo' },
                    { key: 'team', label: 'Team Members (+5)', price: '$19/mo' }
                  ].map(addon => (
                    <label key={addon.key} className="flex items-center justify-between p-3 bg-white/5 rounded-lg cursor-pointer">
                      <span>{addon.label}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-gray-400 text-sm">{addon.price}</span>
                        <input
                          type="checkbox"
                          checked={features[addon.key as keyof typeof features]}
                          onChange={(e) => setFeatures({ ...features, [addon.key]: e.target.checked })}
                          className="w-5 h-5 accent-sky-500"
                        />
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Result */}
            <div className="p-8 bg-sky-500/10 border border-sky-500/30 rounded-2xl">
              <div className="text-gray-400 mb-2">Estimated Monthly Cost</div>
              <div className="text-5xl font-bold mb-6">${total}<span className="text-lg text-gray-400">/mo</span></div>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Base (1000 verifications)</span>
                  <span>$0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Additional verifications</span>
                  <span>${total - (features.api ? 49 : 0) - (features.priority ? 29 : 0) - (features.team ? 19 : 0)}</span>
                </div>
                {features.api && (
                  <div className="flex justify-between">
                    <span className="text-gray-400">API Access</span>
                    <span>$49</span>
                  </div>
                )}
                {features.priority && (
                  <div className="flex justify-between">
                    <span className="text-gray-400">Priority Support</span>
                    <span>$29</span>
                  </div>
                )}
                {features.team && (
                  <div className="flex justify-between">
                    <span className="text-gray-400">Team Members</span>
                    <span>$19</span>
                  </div>
                )}
              </div>

              <button className="w-full mt-8 py-3 bg-sky-500 text-black font-medium rounded-xl hover:bg-sky-400">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Comparison */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-8">Or Choose a Plan</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <div key={i} className={`p-6 rounded-2xl border ${i === 1 ? 'bg-sky-500/10 border-sky-500' : 'bg-white/5 border-white/10'}`}>
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold mb-4">
                  {typeof plan.price === 'number' ? `$${plan.price}` : plan.price}
                  {typeof plan.price === 'number' && <span className="text-gray-400 text-sm">/mo</span>}
                </div>
                <div className="text-gray-400 text-sm mb-4">{plan.verifications} verifications</div>
                <ul className="space-y-2">
                  {plan.features.map((f, j) => (
                    <li key={j} className="text-sm flex items-center gap-2">
                      <span className="text-sky-400">✓</span> {f}
                    </li>
                  ))}
                </ul>
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