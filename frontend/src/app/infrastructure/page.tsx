'use client';

const stats = [
  { value: '2.5M+', label: 'API Requests/day' },
  { value: '50ms', label: 'Avg. Latency' },
  { value: '99.99%', label: 'Uptime' },
  { value: '150+', label: 'Countries' }
];

const features = [
  { name: 'Load Balancing', desc: 'Distribute requests across global servers', icon: '⚖️' },
  { name: 'Rate Limiting', desc: 'Protect your API from abuse', icon: '🚧' },
  { name: 'Caching', desc: 'Reduce latency with edge caching', icon: '💾' },
  { name: 'WebSockets', desc: 'Real-time verification updates', icon: '🔄' },
  { name: 'gRPC', desc: 'High-performance API calls', icon: '⚡' },
  { name: 'GraphQL', desc: 'Flexible query language', icon: '📊' }
];

export default function Infrastructure() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Global Infrastructure</h1>
          <p className="text-xl text-gray-400">Built for scale, reliability, and speed</p>
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

      {/* Map Placeholder */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gray-900 rounded-2xl p-12 text-center">
            <div className="text-8xl mb-4">🌍</div>
            <h2 className="text-2xl font-bold mb-2">Global Edge Network</h2>
            <p className="text-gray-400">Servers in 30+ regions worldwide</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-12">Infrastructure Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-bold mb-2">{f.name}</h3>
                <p className="text-gray-400 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SLA */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Service Level Agreement</h2>
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl text-left">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-bold text-green-400">99.99%</div>
                <div className="text-gray-400">Uptime SLA</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-sky-400">&lt;100ms</div>
                <div className="text-gray-400">P99 Latency</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-black border-t border-white/10 text-center text-gray-500">
        © 2026 N-Verify Protocol
      </footer>
    </div>
  );
}