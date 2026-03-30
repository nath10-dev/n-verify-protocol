'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function About() {
  const [activeTab, setActiveTab] = useState('mission');

  const stats = [
    { value: '50K+', label: 'Verifications' },
    { value: '99.9%', label: 'Accuracy' },
    { value: '<5s', label: 'Avg. Time' },
    { value: '24/7', label: 'Support' }
  ];

  const timeline = [
    { year: 'Q1 2026', event: 'Protocol Launch' },
    { year: 'Q2 2026', event: 'Beta Testing' },
    { year: 'Q3 2026', event: 'Mainnet Launch' },
    { year: 'Q4 2026', event: 'Enterprise API' }
  ];

  const values = [
    { icon: '🎯', title: 'Accuracy', desc: 'We verify with precision, ensuring AI outputs meet the highest standards.' },
    { icon: '🔒', title: 'Security', desc: 'Your data is protected with bank-grade encryption and privacy-first design.' },
    { icon: '⚡', title: 'Speed', desc: 'Get verified results in seconds, not hours. Time matters.' },
    { icon: '🌍', title: 'Accessibility', desc: 'Making AI verification accessible to everyone, globally.' }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-white">N-Verify</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
            <Link href="/about" className="text-sky-400">About</Link>
            <Link href="/verify" className="text-gray-400 hover:text-white transition-colors">Verify</Link>
            <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link>
            <Link href="/contact" className="px-5 py-2.5 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-colors">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Building Trust in
              <span className="block bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-400 bg-clip-text text-transparent">
                the Age of AI
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              N-Verify Protocol is the decentralized standard for AI output verification. 
              We transform AI outputs into cryptographically auditable reasoning chains.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/verify" className="px-8 py-4 bg-gradient-to-r from-sky-500 to-cyan-400 text-black font-semibold rounded-full hover:shadow-lg hover:shadow-sky-500/25 transition-all">
                Start Verifying
              </Link>
              <Link href="/contact" className="px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-all">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Mission</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-white mb-3">Mission</h3>
              <p className="text-gray-400">
                To make AI outputs verifiable, auditable, and trustworthy for critical industries 
                like healthcare, legal, and finance. We believe in a future where AI decisions 
                can be proven, not just trusted.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-4xl mb-4">🔮</div>
              <h3 className="text-xl font-semibold text-white mb-3">Vision</h3>
              <p className="text-gray-400">
                A world where every AI decision comes with cryptographic proof. We envision N-Verify as the 
                global standard for AI verification, enabling trust in AI systems across all industries 
                and borders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Roadmap</h2>
          </div>
          
          <div className="max-w-2xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-center gap-6 py-4">
                <div className="w-32 text-sky-400 font-medium">{item.year}</div>
                <div className="flex-1 h-px bg-white/10" />
                <div className="flex-1 text-white">{item.event}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-sky-900 via-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Join the Verification Revolution</h2>
          <p className="text-xl text-gray-300 mb-10">
            Be part of building trust in AI.
          </p>
          <Link href="/register" className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors">
            Get Started Free
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-cyan-400 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="text-lg font-semibold text-white">N-Verify Protocol</span>
            </div>
            <div className="text-gray-500 text-sm">
              © 2026 N-Verify Protocol. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}