'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Verified Reasoning',
      description: 'Extract and verify AI reasoning chains against domain knowledge bases for medical, legal, and financial accuracy.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Cryptographic Proof',
      description: 'Generate tamper-proof certificates with Merkle tree proofs, stored on blockchain for permanent auditability.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Fast Verification',
      description: 'Complete verification in under 5 seconds with distributed validator network and consensus engine.'
    }
  ];

  const stats = [
    { value: '3', label: 'Domains' },
    { value: '<5s', label: 'Verification Time' },
    { value: '100+', label: 'Concurrent Requests' },
    { value: '85%+', label: 'Accuracy' }
  ];

  const testimonials = [
    { name: 'Dr. Sarah Chen', role: 'Medical AI Researcher', quote: 'N-Verify has transformed how we validate AI diagnostics.' },
    { name: 'James Wilson', role: 'Legal Tech Lead', quote: 'The cryptographic proof gives our clients unmatched confidence.' },
    { name: 'Maria Garcia', role: 'FinTech CTO', quote: 'Real-time verification with blockchain immutability.' }
  ];

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10 glassmorphism">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 flex items-center justify-center group-hover:animate-glow-pulse transition-all">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">N-Verify</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-400 hover:text-sky-400 transition-colors duration-300">Features</a>
            <a href="#how-it-works" className="text-gray-400 hover:text-sky-400 transition-colors duration-300">How it Works</a>
            <a href="#testimonials" className="text-gray-400 hover:text-sky-400 transition-colors duration-300">Testimonials</a>
            <a href="#pricing" className="text-gray-400 hover:text-sky-400 transition-colors duration-300">Pricing</a>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-gray-400 hover:text-sky-400 transition-colors duration-300">Sign In</Link>
            <Link href="/register" className="px-5 py-2.5 bg-gradient-to-r from-sky-500 to-cyan-400 text-black font-medium rounded-full hover:shadow-lg hover:shadow-sky-500/50 transition-all duration-300 transform hover:scale-105 neon-glow-hover">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-sky-500/5 to-transparent rounded-full" />
          
          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 bg-dot-pattern opacity-20" />
          
          {/* Floating Elements */}
          <div className="absolute top-20 right-10 w-32 h-32 border border-sky-500/20 rounded-lg animate-rotate-slow opacity-30" />
          <div className="absolute bottom-32 left-20 w-24 h-24 border border-cyan-500/20 rounded-full animate-rotate-slow opacity-20" style={{ animationDirection: 'reverse' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 animate-slide-in-down">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-gray-300 text-sm">Now Live on Mainnet</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-slide-in-up">
              Trust in the
              <span className="block mt-2 bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-400 bg-clip-text text-transparent animate-gradient-shift">
                Age of AI
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed animate-slide-in-up stagger-2">
              N-Verify Protocol transforms AI outputs into cryptographically auditable reasoning chains. 
              Built for healthcare, legal, and financial industries.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-in-up stagger-3">
              <Link href="/register" className="px-8 py-4 bg-gradient-to-r from-sky-500 to-cyan-400 text-black font-semibold rounded-full hover:shadow-lg hover:shadow-sky-500/50 transition-all duration-300 transform hover:scale-105 neon-glow-hover">
                Start Free Trial
              </Link>
              <Link href="/verify" className="px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 hover:border-sky-500/50 transition-all duration-300 hover:glow-pulse">
                Try Demo →
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-gray-500 animate-fade-in stagger-4">
              <div className="flex items-center gap-2 hover:text-sky-400 transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">Bank-grade Security</span>
              </div>
              <div className="flex items-center gap-2 hover:text-sky-400 transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">SOC 2 Compliant</span>
              </div>
              <div className="flex items-center gap-2 hover:text-sky-400 transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">99.9% Uptime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gradient-to-b from-black via-gray-900/50 to-black relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 animate-slide-in-up">Enterprise-Grade AI Verification</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto animate-slide-in-up stagger-1">
              Built for organizations that demand accuracy, security, and compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-sky-500/50 transition-all duration-500 hover:-translate-y-2 bento-card animate-slide-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${index === 0 ? 'from-sky-500 to-sky-600' : index === 1 ? 'from-cyan-500 to-cyan-600' : 'from-blue-500 to-blue-600'} flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300 neon-glow-hover`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                
                {/* Hover Glow */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${index === 0 ? 'from-sky-500/10' : index === 1 ? 'from-cyan-500/10' : 'from-blue-500/10'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none duration-300`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black border-y border-white/10 relative">
        <div className="absolute inset-0 bg-dot-pattern opacity-10" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group cursor-pointer animate-scale-pulse" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent mb-2 group-hover:text-glow transition-all duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-500 group-hover:text-gray-300 transition-colors duration-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-gray-900 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 animate-slide-in-up">How It Works</h2>
            <p className="text-gray-400 text-lg animate-slide-in-up stagger-1">Get cryptographically verified AI outputs in 3 simple steps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Submit Output', description: 'Paste your AI output or connect via API for automated processing.' },
              { step: '02', title: 'Analyze & Verify', description: 'Our system extracts reasoning chains and validates against domain knowledge.' },
              { step: '03', title: 'Get Certified', description: 'Receive a blockchain-verified certificate with full audit trail.' }
            ].map((item, index) => (
              <div key={index} className="relative animate-slide-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-8xl font-bold text-white/5 absolute -top-4 -left-2">{item.step}</div>
                <div className="relative pt-8 p-6 rounded-xl border border-white/10 hover:border-sky-500/30 transition-all duration-300 glassmorphism-light hover:glassmorphism-glow">
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-sky-500 to-cyan-400 transform -translate-y-1/2 animate-pulse" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-black relative">
        <div className="absolute inset-0 bg-dot-pattern opacity-5" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 animate-slide-in-up">Trusted by Industry Leaders</h2>
            <p className="text-gray-400 text-lg animate-slide-in-up stagger-1">See what our customers have to say</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 rounded-xl border border-white/10 bg-white/5 hover:border-sky-500/30 transition-all duration-300 bento-card animate-slide-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-500 to-cyan-400 flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-500/10 via-cyan-500/10 to-sky-500/10 border-y border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6 animate-slide-in-up">Ready to Transform Your AI Verification?</h2>
          <p className="text-xl text-gray-300 mb-8 animate-slide-in-up stagger-1">Join leading organizations in securing their AI outputs with cryptographic proof.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-in-up stagger-2">
            <Link href="/register" className="px-8 py-4 bg-gradient-to-r from-sky-500 to-cyan-400 text-black font-semibold rounded-full hover:shadow-lg hover:shadow-sky-500/50 transition-all duration-300 transform hover:scale-105 neon-glow-hover">
              Get Started Now
            </Link>
            <Link href="/contact" className="px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-all duration-300">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-cyan-400 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="text-lg font-bold text-white">N-Verify</span>
              </div>
              <p className="text-gray-400 text-sm">Cryptographic verification for the age of AI.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-sky-400 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-sky-400 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-sky-400 transition-colors">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-sky-400 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-sky-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-sky-400 transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-sky-400 transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-sky-400 transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-sky-400 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
            <p>&copy; 2026 N-Verify Protocol. All rights reserved.</p>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-sky-400 transition-colors">Twitter</a>
              <a href="#" className="hover:text-sky-400 transition-colors">Discord</a>
              <a href="#" className="hover:text-sky-400 transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
