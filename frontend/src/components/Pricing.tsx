'use client';

import { useState } from 'react';

interface PricingTier {
  name: string;
  price: number | null;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

const tiers: PricingTier[] = [
  {
    name: 'Starter',
    price: 0,
    description: 'Perfect for individuals',
    features: ['100 verifications/mo', '1 domain', 'Basic support', 'Community access'],
    cta: 'Start Free',
  },
  {
    name: 'Pro',
    price: 99,
    description: 'For growing teams',
    features: ['10,000 verifications/mo', 'All 3 domains', 'Priority support', 'API access', 'NFT certificates'],
    cta: 'Start Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: null,
    description: 'For large organizations',
    features: ['Unlimited verifications', 'Custom domains', 'Dedicated support', 'SLA', 'Custom integrations'],
    cta: 'Contact Sales',
  },
];

export function PricingCards() {
  const [annual, setAnnual] = useState(false);

  return (
    <div className="space-y-8">
      {/* Toggle */}
      <div className="flex justify-center">
        <div className="bg-white/10 p-1 rounded-2xl flex">
          <button
            onClick={() => setAnnual(false)}
            className={`px-4 py-2 rounded-xl ${!annual ? 'bg-sky-500 text-black' : 'text-gray-400'}`}
          >
            Monthly
          </button>
          <button
            onClick={() => setAnnual(true)}
            className={`px-4 py-2 rounded-xl ${annual ? 'bg-sky-500 text-black' : 'text-gray-400'}`}
          >
            Yearly <span className="text-green-400 text-sm ml-1">-20%</span>
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {tiers.map((tier, i) => (
          <div
            key={tier.name}
            className={`relative p-8 rounded-2xl border transition-all hover:scale-105 ${
              tier.popular
                ? 'bg-sky-500/10 border-sky-500 shadow-lg shadow-sky-500/10'
                : 'bg-white/5 border-white/10 hover:border-white/20'
            }`}
          >
            {tier.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-sky-500 text-black text-sm font-medium rounded-full">
                Most Popular
              </div>
            )}

            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
              <p className="text-gray-400 text-sm">{tier.description}</p>
            </div>

            <div className="text-center mb-6">
              {tier.price !== null ? (
                <>
                  <span className="text-4xl font-bold">
                    ${annual ? Math.floor(tier.price * 0.8) : tier.price}
                  </span>
                  <span className="text-gray-400">/mo</span>
                </>
              ) : (
                <span className="text-4xl font-bold">Custom</span>
              )}
            </div>

            <ul className="space-y-3 mb-8">
              {tier.features.map((feature, j) => (
                <li key={j} className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="text-sky-400">✓</span> {feature}
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-3 rounded-xl font-medium transition-colors ${
                tier.popular
                  ? 'bg-sky-500 text-black hover:bg-sky-400'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {tier.cta}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PricingTable() {
  const features = [
    { name: 'Verifications/mo', free: '100', pro: '10,000', enterprise: 'Unlimited' },
    { name: 'Domains', free: '1', pro: '3', enterprise: 'Custom' },
    { name: 'API Access', free: false, pro: true, enterprise: true },
    { name: 'NFT Certificates', free: false, pro: true, enterprise: true },
    { name: 'Priority Support', free: false, pro: true, enterprise: true },
    { name: 'SLA', free: false, false, enterprise: true },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-white/10">
            <th className="text-left p-4 text-gray-400">Feature</th>
            <th className="text-center p-4 font-bold">Free</th>
            <th className="text-center p-4 font-bold bg-sky-500/10 rounded-t-xl">Pro</th>
            <th className="text-center p-4 font-bold">Enterprise</th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, i) => (
            <tr key={i} className="border-b border-white/5">
              <td className="p-4">{feature.name}</td>
              <td className="p-4 text-center">
                {typeof feature.free === 'boolean'
                  ? feature.free
                    ? '✓'
                    : '—'
                  : feature.free}
              </td>
              <td className="p-4 text-center bg-sky-500/5">
                {typeof feature.pro === 'boolean'
                  ? feature.pro
                    ? '✓'
                    : '—'
                  : feature.pro}
              </td>
              <td className="p-4 text-center">
                {typeof feature.enterprise === 'boolean'
                  ? feature.enterprise
                    ? '✓'
                    : '—'
                  : feature.enterprise}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}