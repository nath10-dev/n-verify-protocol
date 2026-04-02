'use client';

const timeline = [
  { year: '2024', title: 'Foundation', desc: 'N-Verify Protocol concept developed' },
  { year: '2025', title: 'Research', desc: 'AI verification algorithm research and development' },
  { year: '2026 Q1', title: 'Launch', desc: 'Public launch of N-Verify Protocol' },
  { year: '2026 Q2', title: 'Growth', desc: 'Enterprise customers and new domains' },
  { year: '2026 Q3', title: 'Scale', desc: 'Global expansion and partnerships' },
  { year: '2026 Q4', title: 'Vision', desc: 'Decentralized verification network' }
];

const values = [
  { icon: '🎯', title: 'Accuracy', desc: 'We ensure AI outputs meet the highest standards' },
  { icon: '🔒', title: 'Trust', desc: 'Building trust through transparency and verification' },
  { icon: '⚡', title: 'Speed', desc: 'Fast verification without compromising quality' },
  { icon: '🌍', title: 'Accessibility', desc: 'Making AI verification available to everyone' }
];

export default function AboutNew() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">About N-Verify</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We're building the infrastructure for trustworthy AI. Our mission is to make AI outputs verifiable, transparent, and reliable.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-400">
                To create a world where AI outputs can be trusted. We believe that as AI becomes more integrated into critical decisions, verification becomes essential.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-400">
                A decentralized network where every AI output can be verified, traced, and trusted. Where transparency is the standard, not the exception.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="text-center p-6">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="text-lg font-bold mb-2">{v.title}</h3>
                <p className="text-gray-400 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-12">Our Journey</h2>
          <div className="space-y-8">
            {timeline.map((item, i) => (
              <div key={i} className="flex items-center gap-6">
                <div className="w-24 text-sky-400 font-bold">{item.year}</div>
                <div className="flex-1 p-4 bg-white/5 rounded-xl">
                  <div className="font-bold">{item.title}</div>
                  <div className="text-gray-400 text-sm">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
          <p className="text-gray-400 mb-6">Help us build the future of AI verification.</p>
          <a href="/careers" className="inline-block px-6 py-3 bg-sky-500 text-black font-medium rounded-xl hover:bg-sky-400">
            View Open Positions
          </a>
        </div>
      </section>

      <footer className="py-8 bg-black border-t border-white/10 text-center text-gray-500">
        © 2026 N-Verify Protocol
      </footer>
    </div>
  );
}