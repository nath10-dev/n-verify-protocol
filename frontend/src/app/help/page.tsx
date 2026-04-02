'use client';

import { useState } from 'react';

const faqs = [
  { q: 'What is N-Verify?', a: 'N-Verify is a decentralized protocol for verifying AI outputs. It analyzes AI-generated content and provides cryptographic proof of its reliability.' },
  { q: 'How does verification work?', a: 'Our system extracts reasoning chains from AI outputs and validates them against domain-specific knowledge bases. Each verification generates a certificate.' },
  { q: 'What domains do you support?', a: 'Currently we support Medical, Legal, and Financial domains. Each has its own knowledge base and validation rules.' },
  { q: 'Is my data secure?', a: 'Yes. We never store your AI outputs - only the verification results. All data is encrypted in transit and at rest.' },
  { q: 'How long does verification take?', a: 'Most verifications complete in under 5 seconds. Complex outputs may take slightly longer.' },
  { q: 'Can I integrate with my systems?', a: 'Yes! We provide REST API access, webhooks, and SDKs for easy integration.' },
  { q: 'What is the pricing?', a: 'We have a free tier for testing, and paid plans starting at $99/month for professional use.' },
  { q: 'How do certificates work?', a: 'Each verification generates a unique certificate with cryptographic proof, stored on blockchain for permanent verification.' }
];

const guides = [
  { title: 'Getting Started', desc: 'Learn the basics of N-Verify', icon: '🚀', steps: 5 },
  { title: 'API Integration', desc: 'Connect N-Verify to your app', icon: '🔌', steps: 8 },
  { title: 'Verifying AI Outputs', desc: 'How to verify AI-generated content', icon: '✅', steps: 4 },
  { title: 'Managing Certificates', desc: 'View and download certificates', icon: '📜', steps: 3 }
];

export default function Help() {
  const [search, setSearch] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const filteredFaqs = search 
    ? faqs.filter(f => f.q.toLowerCase().includes(search.toLowerCase()))
    : faqs;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">How can we help?</h1>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for help..."
            className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl focus:outline-none focus:border-sky-500"
          />
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xl font-semibold mb-6">Quick Links</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {guides.map((guide, i) => (
              <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-xl hover:border-sky-500/50 cursor-pointer transition-colors">
                <div className="text-2xl mb-2">{guide.icon}</div>
                <div className="font-medium">{guide.title}</div>
                <div className="text-gray-500 text-sm">{guide.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {filteredFaqs.map((faq, i) => (
              <div key={i} className="border border-white/10 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-4 text-left flex items-center justify-between"
                >
                  <span className="font-medium">{faq.q}</span>
                  <span className="text-gray-400">{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && (
                  <div className="px-4 pb-4 text-gray-400">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Still need help?</h2>
          <p className="text-gray-400 mb-8">Can't find what you're looking for?</p>
          <div className="flex justify-center gap-4">
            <button className="px-6 py-3 bg-sky-500 text-black font-medium rounded-xl hover:bg-sky-400">
              Contact Support
            </button>
            <button className="px-6 py-3 border border-white/20 rounded-xl hover:bg-white/5">
              View Documentation
            </button>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-black border-t border-white/10 text-center text-gray-500">
        © 2026 N-Verify Protocol
      </footer>
    </div>
  );
}