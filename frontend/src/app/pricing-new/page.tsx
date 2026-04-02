'use client';

import { useState } from 'react';

const plans = [
  {
    name: 'Free',
    price: 0,
    period: 'forever',
    description: 'Perfect for testing and small projects',
    features: [
      '100 verifications/month',
      '1 domain',
      'Basic analysis',
      'Community support'
    ],
    cta: 'Get Started',
    popular: false
  },
  {
    name: 'Pro',
    price: 99,
    period: 'month',
    description: 'For professionals and growing teams',
    features: [
      '10,000 verifications/month',
      'All 3 domains',
      'Advanced AI analysis',
      'NFT certificates',
      'API access',
      '5 team members',
      'Priority support'
    ],
    cta: 'Start Pro Trial',
    popular: true
  },
  {
    name: 'Enterprise',
    price: null,
    period: 'custom',
    description: 'For large organizations with custom needs',
    features: [
      'Unlimited verifications',
      'Custom domains',
      'Custom AI models',
      'Dedicated infrastructure',
      'Unlimited team members',
      'Custom integrations',
      'SLA guarantee',
      'Dedicated account manager'
    ],
    cta: 'Contact Sales',
    popular: false
  }
];

export default function PricingNew() {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-400 mb-8">Choose the plan that fits your needs</p>
          
          {/* Billing Toggle */}
          <div className="inline-flex bg-white/10 rounded-2xl p-1">
            <button
              onClick={() => setBilling('monthly')}
              className={`px-6 py-2 rounded-xl font-medium transition-colors ${
                billing === 'monthly' ? 'bg-sky-500 text-black' : 'text-gray-400'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling('yearly')}
              className={`px-6 py-2 rounded-xl font-medium transition-colors ${
                billing === 'yearly' ? 'bg-sky-500 text-black' : 'text-gray-400'
              }`}
            >
              Yearly <span className="text-green-400 text-sm ml-1">-20%</span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`relative bg-white/5 border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-sky-500 shadow-lg shadow-sky-500/10' 
                    : 'border-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-sky-500 text-black text-sm font-medium rounded-full">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm">{plan.description}</p>
                </div>
                
                <div className="text-center mb-6">
                  {plan.price !== null ? (
                    <>
                      <span className="text-5xl font-bold">
                        ${billing === 'yearly' ? Math.floor(plan.price * 0.8) : plan.price}
                      </span>
                      <span className="text-gray-400">/{billing === 'yearly' ? 'mo' : 'month'}</span>
                    </>
                  ) : (
                    <span className="text-4xl font-bold">Custom</span>
                  )}
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-300">
                      <span className="text-sky-400">✓</span> {feature}
                    </li>
                  ))}
                </ul>
                
                <button
                  className={`w-full py-3 rounded-xl font-medium transition-colors ${
                    plan.popular
                      ? 'bg-sky-500 text-black hover:bg-sky-400'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: 'Can I change plans anytime?', a: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.' },
              { q: 'What payment methods do you accept?', a: 'We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.' },
              { q: 'Is there a free trial?', a: 'Yes! Pro plans come with a 14-day free trial. No credit card required.' }
            ].map((faq, i) => (
              <div key={i} className="p-4 bg-white/5 rounded-xl">
                <div className="font-medium mb-1">{faq.q}</div>
                <div className="text-gray-400 text-sm">{faq.a}</div>
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