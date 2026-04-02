'use client';

const benefits = [
  { icon: '⚡', title: 'Fast', desc: 'Verification in <5 seconds' },
  { icon: '🔒', title: 'Secure', desc: 'Enterprise-grade security' },
  { icon: '🌍', title: 'Global', desc: '30+ regions worldwide' },
  { icon: '💰', title: 'Affordable', desc: 'Start free, scale as needed' },
  { icon: '🔌', title: 'Easy API', desc: 'Integrate in minutes' },
  { icon: '📊', title: 'Analytics', desc: 'Detailed insights' }
];

export default function FeaturesList() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Features</h1>
          <p className="text-xl text-gray-400">Everything you need</p>
        </div>
      </section>

      <section className="py-12 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                <div className="text-3xl mb-3">{b.icon}</div>
                <h3 className="text-xl font-bold mb-1">{b.title}</h3>
                <p className="text-gray-400">{b.desc}</p>
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