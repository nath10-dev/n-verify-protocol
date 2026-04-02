'use client';

const stats = [
  { value: '50K+', label: 'Active Users' },
  { value: '2M+', label: 'Verifications' },
  { value: '99.9%', label: 'Uptime' },
  { value: '24/7', label: 'Support' }
];

const features = [
  { title: 'Real-time Verification', desc: 'Verify AI outputs in seconds', icon: '⚡' },
  { title: 'Domain Expertise', desc: 'Medical, Legal, Financial', icon: '🏥' },
  { title: 'Blockchain Proof', desc: 'Immutable certificates', icon: '⛓️' },
  { title: 'Easy Integration', desc: 'API, SDKs, CLI', icon: '🔌' },
  { title: 'Team Collaboration', desc: 'Manage your team', icon: '👥' },
  { title: 'Enterprise Security', desc: 'SOC 2, HIPAA ready', icon: '🔒' }
];

export default function HomeNew() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-6xl font-bold mb-6">
            Verify AI Outputs
            <span className="block bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
              With Confidence
            </span>
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            N-Verify Protocol provides cryptographic verification for AI outputs in medical, 
            legal, and financial domains.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/verify" className="px-8 py-4 bg-sky-500 text-black font-semibold rounded-full hover:bg-sky-400">
              Start Verifying
            </a>
            <a href="/demo" className="px-8 py-4 border border-white/20 rounded-full hover:bg-white/5">
              Try Demo
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold text-sky-400 mb-2">{s.value}</div>
                <div className="text-gray-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why N-Verify?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                <p className="text-gray-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-400 mb-8">Start verifying AI outputs in minutes.</p>
          <a href="/register" className="inline-block px-8 py-4 bg-sky-500 text-black font-semibold rounded-full hover:bg-sky-400">
            Create Free Account
          </a>
        </div>
      </section>

      <footer className="py-8 bg-black border-t border-white/10 text-center text-gray-500">
        © 2026 N-Verify Protocol
      </footer>
    </div>
  );
}