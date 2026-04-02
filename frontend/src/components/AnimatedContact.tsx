'use client';

import { useState, useEffect } from 'react';

export function AnimatedContact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block px-4 py-1 bg-sky-500/10 border border-sky-500/30 rounded-full text-sky-400 text-sm mb-4">
            Contact
          </div>
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h2>
          <p className="text-xl text-gray-400">We'd love to hear from you</p>
        </div>

        {/* Form */}
        <div className={`transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {formState === 'success' ? (
            <div className="text-center p-12 bg-white/5 border border-white/10 rounded-3xl">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-4xl">
                ✓
              </div>
              <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
              <p className="text-gray-400">We'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="group">
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-sky-500 focus:bg-white/10 transition-all group-hover:border-white/20"
                  />
                </div>
                <div className="group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-sky-500 focus:bg-white/10 transition-all group-hover:border-white/20"
                  />
                </div>
              </div>

              <div className="group">
                <select className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-sky-500 focus:bg-white/10 transition-all group-hover:border-white/20">
                  <option value="">Select Topic</option>
                  <option value="sales">Sales</option>
                  <option value="support">Support</option>
                  <option value="partnership">Partnership</option>
                  <option value="press">Press</option>
                </select>
              </div>

              <div className="group">
                <textarea
                  placeholder="Your message..."
                  rows={6}
                  required
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-sky-500 focus:bg-white/10 transition-all group-hover:border-white/20 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={formState === 'submitting'}
                className="w-full py-4 bg-gradient-to-r from-sky-500 to-cyan-500 text-black font-semibold rounded-2xl hover:shadow-lg hover:shadow-sky-500/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
              >
                <span className={formState === 'submitting' ? 'opacity-0' : ''}>
                  Send Message
                </span>
                {formState === 'submitting' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  </div>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export function AnimatedCTA() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-900/20 via-black to-purple-900/20" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-sky-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <h2 className={`text-4xl md:text-6xl font-bold mb-8 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Ready to <span className="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">Get Started</span>?
        </h2>
        
        <p className={`text-xl text-gray-400 mb-10 transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Start verifying AI outputs in minutes. No credit card required.
        </p>

        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a
            href="/register"
            className="group relative px-8 py-4 bg-sky-500 text-black font-semibold rounded-2xl overflow-hidden"
          >
            <span className="relative z-10">Create Free Account</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          
          <a
            href="/demo"
            className="px-8 py-4 border border-white/20 rounded-2xl text-white hover:bg-white/10 transition-all"
          >
            Try Demo
          </a>
        </div>
      </div>
    </section>
  );
}