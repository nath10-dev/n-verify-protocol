'use client';

import { useState } from 'react';

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1 bg-sky-500/20 text-sky-400 rounded-full text-sm mb-6">
            🚀 Launching Soon
          </div>
          <h1 className="text-6xl font-bold mb-6">
            The Future of
            <span className="block bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
              AI Verification
            </span>
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            N-Verify Protocol transforms AI outputs into cryptographically auditable reasoning chains. 
            Built for healthcare, legal, and financial industries.
          </p>
          
          {submitted ? (
            <div className="p-6 bg-green-500/20 border border-green-500/30 rounded-xl inline-block">
              <div className="text-2xl mb-2">🎉</div>
              <div className="text-green-400 font-medium">Thanks for subscribing!</div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/10 rounded-xl focus:outline-none focus:border-sky-500"
                required
              />
              <button type="submit" className="px-6 py-3 bg-sky-500 text-black font-medium rounded-xl hover:bg-sky-400">
                Notify Me
              </button>
            </form>
          )}
          
          <p className="text-gray-500 text-sm mt-4">Join 2,000+ people on the waitlist</p>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🔍', title: 'Deep Analysis', desc: 'Extract reasoning chains from any AI output' },
              { icon: '⛓️', title: 'Blockchain Proof', desc: 'Immutable certificates on Ethereum' },
              { icon: '⚡', title: 'Instant Results', desc: 'Verification in under 5 seconds' }
            ].map((feature, i) => (
              <div key={i} className="text-center p-8 bg-white/5 rounded-2xl">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Simple Pricing</h2>
          <p className="text-gray-400 mb-12">Start free, scale as you grow</p>
          
          <div className="inline-flex bg-white/10 rounded-2xl p-2">
            <button className="px-6 py-3 bg-sky-500 text-black rounded-xl font-medium">Monthly</button>
            <button className="px-6 py-3 text-gray-400 rounded-xl font-medium">Yearly <span className="text-green-400 text-sm">-20%</span></button>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-black border-t border-white/10 text-center text-gray-500">
        © 2026 N-Verify Protocol
      </footer>
    </div>
  );
}