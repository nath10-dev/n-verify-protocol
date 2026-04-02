'use client';

import { useState, useEffect } from 'react';

export function ModernHome() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Gradient Mesh */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-900/20 via-black to-black" />
        
        {/* Animated Blobs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-sky-500/20 rounded-full blur-[120px] animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[100px] animate-blob animation-delay-4000" />
        
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-sky-500 to-cyan-500" />
            <span className="text-xl font-bold">N-Verify</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {['Product', 'Solutions', 'Pricing', 'Docs', 'Blog'].map(link => (
              <a key={link} href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                {link}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="/login" className="text-gray-400 hover:text-white text-sm hidden sm:block">Log in</a>
            <a href="/register" className="px-5 py-2 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors text-sm">
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-32">
        <div className={`max-w-5xl mx-auto px-6 text-center transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-gray-300">Now in Public Beta</span>
          </div>

          {/* Title */}
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-sky-200 to-cyan-200 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient">
              Trust Your AI
            </span>
            <br />
            <span className="text-5xl md:text-7xl">Outputs</span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            N-Verify Protocol transforms AI outputs into cryptographically auditable reasoning chains. 
            Built for medical, legal, and financial domains.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/verify"
              className="group relative px-8 py-4 bg-gradient-to-r from-sky-500 to-cyan-500 text-black font-semibold rounded-full overflow-hidden"
            >
              <span className="relative z-10">Start Verifying</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            
            <a
              href="/demo"
              className="group px-8 py-4 border border-white/20 rounded-full text-white hover:bg-white/5 transition-all flex items-center gap-2"
            >
              <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                <span className="w-0 h-0 border-l-2 border-l-black border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-0.5" />
              </span>
              Watch Demo
            </a>
          </div>

          {/* Stats */}
          <div className="mt-24 flex flex-wrap justify-center gap-12 md:gap-20">
            {[
              { value: '2M+', label: 'Verifications' },
              { value: '99.9%', label: 'Uptime' },
              { value: '<5s', label: 'Avg. Time' },
              { value: '50K+', label: 'Users' },
            ].map((stat, i) => (
              <div key={stat.label} className="text-center" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Cards Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Three Domains
              </span>
            </h2>
            <p className="text-xl text-gray-400">Specialized verification for every industry</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🏥', name: 'Medical', desc: 'Verify AI diagnoses and treatment recommendations', color: 'from-red-500 to-rose-500' },
              { icon: '⚖️', name: 'Legal', desc: 'Validate legal documents and contract analysis', color: 'from-purple-500 to-pink-500' },
              { icon: '💰', name: 'Financial', desc: 'Check investment advice and financial reports', color: 'from-green-500 to-emerald-500' },
            ].map((domain, i) => (
              <div
                key={domain.name}
                className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur hover:border-white/20 transition-all hover:scale-[1.02]"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${domain.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                <div className="relative">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${domain.color} flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform`}>
                    {domain.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{domain.name}</h3>
                  <p className="text-gray-400">{domain.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-32 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: '⚡', title: 'Lightning Fast', desc: 'Verification in under 5 seconds' },
              { icon: '🔒', title: 'Enterprise Secure', desc: 'SOC 2 certified, HIPAA ready' },
              { icon: '⛓️', title: 'Blockchain Proof', desc: 'Immutable certificates on-chain' },
              { icon: '🔌', title: 'Easy Integration', desc: 'API, SDKs, and CLI' },
            ].map((feature, i) => (
              <div key={feature.title} className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-white/20 transition-all">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-cyan-500" />
              <span className="font-bold">N-Verify Protocol</span>
            </div>
            <div className="flex gap-8 text-gray-400 text-sm">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Contact</a>
            </div>
            <div className="text-gray-500 text-sm">© 2026 N-Verify</div>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -20px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 20s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }
      `}</style>
    </div>
  );
}