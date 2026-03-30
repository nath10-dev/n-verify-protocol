'use client';

import { useState } from 'react';

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    period: 'forever',
    description: 'Perfect for testing and small projects',
    features: [
      '100 verifications/month',
      'Basic reliability scoring',
      'Certificate generation',
      'Email support'
    ],
    cta: 'Start Free',
    popular: false
  },
  {
    name: 'Professional',
    price: '$99',
    period: '/month',
    description: 'For growing teams and businesses',
    features: [
      '10,000 verifications/month',
      'Advanced AI analysis',
      'Priority processing',
      'API access',
      'Custom integrations',
      'Priority support',
      'Analytics dashboard'
    ],
    cta: 'Start Trial',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large organizations with custom needs',
    features: [
      'Unlimited verifications',
      'Dedicated infrastructure',
      'Custom AI models',
      'SLA guarantee',
      '24/7 phone support',
      'On-premise deployment',
      'Custom contracts',
      'Dedicated account manager'
    ],
    cta: 'Contact Sales',
    popular: false
  }
];

const faq = [
  {
    q: 'How does N-Verify work?',
    a: 'N-Verify uses advanced AI analysis to extract reasoning chains from AI outputs, then validates them against domain-specific knowledge bases. Each verification generates a cryptographic certificate stored on blockchain.'
  },
  {
    q: 'Which domains do you support?',
    a: 'Currently we support Medical, Legal, and Financial domains. Each domain has its own knowledge base and validation rules.'
  },
  {
    q: 'How long does verification take?',
    a: 'Most verifications complete in under 5 seconds. Complex outputs may take slightly longer.'
  },
  {
    q: 'Is my data secure?',
    a: 'Absolutely. We use bank-grade encryption and never store your AI outputs. Only the verification results and certificates are retained.'
  },
  {
    q: 'Can I integrate with my existing systems?',
    a: 'Yes! We provide REST API access, Webhooks, and SDKs for major platforms. Check our documentation for details.'
  },
  {
    q: 'What blockchain do you use?',
    a: 'We primarily use Ethereum for on-chain certificate storage, with IPFS for metadata and certificate off-chain storage.'
  }
];

export default function Pricing() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-white mb-6">
              Simple, Transparent
              <span className="block bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
                Pricing
              </span>
            </h1>
            <p className="text-xl text-gray-400">
              Start free, scale as you grow. No hidden fees.
            </p>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`relative p-8 rounded-2xl border ${
                  plan.popular 
                    ? 'bg-gradient-to-b from-sky-900/50 to-gray-900 border-sky-500' 
                    : 'bg-white/5 border-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-sky-500 text-black text-sm font-medium rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-white mb-1">
                    {plan.price}
                    <span className="text-lg text-gray-400 font-normal">{plan.period}</span>
                  </div>
                  <p className="text-gray-400 text-sm">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-300">
                      <svg className="w-5 h-5 text-sky-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-medium transition-colors ${
                  plan.popular
                    ? 'bg-sky-500 text-black hover:bg-sky-400'
                    : 'border border-white/20 text-white hover:bg-white/5'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faq.map((item, index) => (
              <div key={index} className="border border-white/10 rounded-xl overflow-hidden">
                <button
                  onClick={() => setExpanded(expanded === index ? null : index)}
                  className="w-full p-4 flex items-center justify-between text-left"
                >
                  <span className="text-white font-medium">{item.q}</span>
                  <svg 
                    className={`w-5 h-5 text-gray-400 transition-transform ${
                      expanded === index ? 'rotate-180' : ''
                    }`} 
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expanded === index && (
                  <div className="px-4 pb-4">
                    <p className="text-gray-400">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-500">
          © 2026 N-Verify Protocol. All rights reserved.
        </div>
      </footer>
    </div>
  );
}