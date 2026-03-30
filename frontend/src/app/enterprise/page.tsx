'use client';

import { useState } from 'react';

const features = [
  {
    icon: '🏢',
    title: 'Unlimited Scale',
    description: 'Handle millions of verifications with our enterprise-grade infrastructure.'
  },
  {
    icon: '🎯',
    title: 'Custom AI Models',
    description: 'Train and deploy your own AI models for domain-specific verification.'
  },
  {
    icon: '🔒',
    title: 'SLA Guarantee',
    description: '99.99% uptime with dedicated infrastructure and 24/7 support.'
  },
  {
    icon: '🔗',
    title: 'API Priority',
    description: 'Dedicated API endpoints with higher rate limits and priority processing.'
  },
  {
    icon: '👥',
    title: 'Team Management',
    description: 'Manage multiple teams and organizations with role-based access.'
  },
  {
    icon: '📊',
    title: 'Advanced Analytics',
    description: 'Custom dashboards and detailed reporting for your organization.'
  },
  {
    icon: '🔗',
    title: 'Custom Integrations',
    description: 'Direct integrations with your existing systems and workflows.'
  },
  {
    icon: '💼',
    title: 'Dedicated Support',
    description: '24/7 priority support with dedicated account manager.'
  }
];

const plans = [
  {
    name: 'Scale',
    price: '$999',
    period: '/month',
    description: 'For growing teams',
    features: ['100K verifications/mo', '5 team members', 'Basic analytics', 'Email support']
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large organizations',
    features: ['Unlimited verifications', 'Unlimited team', 'Custom AI models', 'Priority support', 'SLA guarantee', 'Dedicated account manager']
  }
];

export default function Enterprise() {
  const [contactForm, setContactForm] = useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-1 bg-sky-500/20 text-sky-400 rounded-full text-sm font-medium mb-6">
              Enterprise Solutions
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Scale Your AI
              <span className="block bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
                Verification
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-10">
              Trusted by Fortune 500 companies. Built for enterprise-scale verification needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#contact" className="px-8 py-4 bg-sky-500 text-black font-semibold rounded-full hover:bg-sky-400 transition-colors">
                Talk to Sales
              </a>
              <button className="px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Logos */}
      <section className="py-12 bg-black border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-gray-500 text-sm mb-8">TRUSTED BY INDUSTRY LEADERS</p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-50">
            {['Google', 'Microsoft', 'Amazon', 'IBM', 'Oracle'].map((company) => (
              <div key={company} className="text-xl font-bold text-gray-400">{company}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Enterprise Features</h2>
            <p className="text-gray-400 text-lg">Everything you need to scale</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Enterprise Pricing</h2>
            <p className="text-gray-400">Custom solutions for your organization</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {plans.map((plan, index) => (
              <div key={index} className={`p-8 rounded-2xl border ${index === 1 ? 'bg-sky-500/10 border-sky-500' : 'bg-white/5 border-white/10'}`}>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-300">
                      <svg className="w-5 h-5 text-sky-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-medium ${
                  index === 1 ? 'bg-sky-500 text-black hover:bg-sky-400' : 'border border-white/20 hover:bg-white/5'
                }`}>
                  {index === 0 ? 'Get Started' : 'Contact Sales'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-24 bg-gray-900">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Talk to Our Team</h2>
            <p className="text-gray-400">Get a custom quote for your organization</p>
          </div>
          
          {submitted ? (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
              <p className="text-gray-400">Our team will contact you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl focus:border-sky-500 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl focus:border-sky-500 focus:outline-none"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Company</label>
                <input
                  type="text"
                  value={contactForm.company}
                  onChange={(e) => setContactForm({...contactForm, company: e.target.value})}
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl focus:border-sky-500 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Message</label>
                <textarea
                  value={contactForm.message}
                  onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl focus:border-sky-500 focus:outline-none h-32"
                />
              </div>
              <button type="submit" className="w-full py-4 bg-sky-500 text-black font-semibold rounded-xl hover:bg-sky-400">
                Submit Request
              </button>
            </form>
          )}
        </div>
      </section>

      <footer className="py-12 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-500">
          © 2026 N-Verify Protocol. All rights reserved.
        </div>
      </footer>
    </div>
  );
}