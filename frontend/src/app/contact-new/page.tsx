'use client';

import { useState } from 'react';

export default function ContactNew() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thanks for reaching out! We will get back to you soon.');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-400">We would love to hear from you</p>
        </div>
      </section>

      {/* Form */}
      <section className="py-12 pb-24">
        <div className="max-w-2xl mx-auto px-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl focus:outline-none focus:border-sky-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl focus:outline-none focus:border-sky-500"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm text-gray-400 mb-2">Subject</label>
              <select
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl focus:outline-none focus:border-sky-500"
              >
                <option value="">Select a topic</option>
                <option value="sales">Sales Inquiry</option>
                <option value="support">Technical Support</option>
                <option value="partnership">Partnership</option>
                <option value="press">Press</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={6}
                className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl focus:outline-none focus:border-sky-500 resize-none"
                required
              />
            </div>

            <button type="submit" className="w-full py-3 bg-sky-500 text-black font-medium rounded-xl hover:bg-sky-400">
              Send Message
            </button>
          </form>

          {/* Other ways */}
          <div className="mt-16 grid md:grid-cols-3 gap-6 text-center">
            {[
              { icon: '📧', title: 'Email', desc: 'hello@n-verify.com' },
              { icon: '💬', title: 'Discord', desc: 'Join our community' },
              { icon: '🐦', title: 'Twitter', desc: '@nverify' }
            ].map((way, i) => (
              <div key={i} className="p-4">
                <div className="text-2xl mb-2">{way.icon}</div>
                <div className="font-bold">{way.title}</div>
                <div className="text-gray-400 text-sm">{way.desc}</div>
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