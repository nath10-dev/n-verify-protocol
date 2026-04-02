'use client';

const statuses = [
  { name: 'API', uptime: '99.99%', status: 'operational' },
  { name: 'Dashboard', uptime: '99.95%', status: 'operational' },
  { name: 'Verification', uptime: '99.9%', status: 'operational' },
  { name: 'API (v1)', uptime: '98.5%', status: 'degraded' }
];

export default function StatusPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <span className="text-yellow-400 font-medium">Partial Outage</span>
          </div>
          <h1 className="text-5xl font-bold">System Status</h1>
        </div>
      </section>

      <section className="py-12 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-4">
            {statuses.map((s, i) => (
              <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-xl flex items-center justify-between">
                <div className="font-medium">{s.name}</div>
                <div className="flex items-center gap-4">
                  <span className="text-gray-400">{s.uptime}</span>
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    s.status === 'operational' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                  }`}>{s.status}</span>
                </div>
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