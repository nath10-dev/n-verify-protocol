'use client';

import { useState } from 'react';

export default function Partnership() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thanks for your interest! We will be in touch.');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Become a Partner</h1>
          <p className="text-xl text-gray-400">Join our partner network and help shape the future of AI verification</p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-12">Partner Benefits</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '💰', title: 'Revenue Share', desc: 'Earn competitive commissions on referred customers' },
              { icon: '🎯', title: 'Lead Generation', desc: 'Get exclusive leads in your target market' },
              { icon: '🛠️', title: 'Technical Support', desc: 'Priority access to our engineering team' },
              { icon: '📚', title: 'Training', desc: 'Free certification and training for your team' },
              { icon: '🌐', title: 'Co-marketing', desc: 'Joint marketing campaigns and events' },
              { icon: '💼', title: 'Dedicated Account Manager', desc: 'Personal support for your partnership' }
            ].map((benefit, i) => (
              <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-12">Partnership Types</h2>
          <div className="space-y-4">
            {[
              { title: 'Technology Partner', desc: 'Integrate N-Verify into your products' },
              { title: 'Consulting Partner', desc: 'Offer N-Verify implementation services' },
              { title: 'Reseller Partner', desc: 'Sell N-Verify to your existing客户' },
              { title: 'Referral Partner', desc: 'Recommend N-Verify and earn commissions' }
            ].map((type, i) => (
              <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-xl flex items-center justify-between">
                <div>
                  <h3 className="font-bold">{type.title}</h3>
                  <p className="text-gray-400 text-sm">{type.desc}</p>
                </div>
                <button className="px-4 py-2 bg-white/10 rounded-lg text-sm hover:bg-white/20">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-8">Apply Now</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="px-4 py-3 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:border-sky-500"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="px-4 py-3 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:border-sky-500"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Company Name"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:border-sky-500"
            />
            <textarea
              placeholder="Tell us about your partnership goals..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full h-32 px-4 py-3 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:border-sky-500 resize-none"
            />
            <button type="submit" className="w-full py-3 bg-sky-500 text-black font-medium rounded-xl hover:bg-sky-400">
              Submit Application
            </button>
          </form>
        </div>
      </section>

      <footer className="py-8 bg-black border-t border-white/10 text-center text-gray-500">
        © 2026 N-Verify Protocol
      </footer>
    </div>
  );
}