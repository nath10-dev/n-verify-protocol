'use client';

const features = [
  { 
    title: 'Real-time Monitoring', 
    desc: 'Track all verifications as they happen',
    icon: '📡'
  },
  { 
    title: 'Detailed Analytics', 
    desc: 'Deep insights into AI output quality',
    icon: '📊'
  },
  { 
    title: 'Alerts & Notifications', 
    desc: 'Get notified of issues instantly',
    icon: '🔔'
  },
  { 
    title: 'Export Reports', 
    desc: 'Download detailed PDF reports',
    icon: '📄'
  },
  { 
    title: 'API Access', 
    desc: 'Programmatic access to all data',
    icon: '🔌'
  },
  { 
    title: 'Team Collaboration', 
    desc: 'Share insights with your team',
    icon: '👥'
  }
];

const metrics = [
  { label: 'Total Verifications', value: '12,450' },
  { label: 'Success Rate', value: '98.2%' },
  { label: 'Avg. Score', value: 'A-' },
  { label: 'This Month', value: '+15%' }
];

const history = [
  { id: '1', output: 'Medical diagnosis for patient...', domain: 'medical', score: 'A', time: '2 min ago' },
  { id: '2', output: 'Legal contract review...', domain: 'legal', score: 'B+', time: '5 min ago' },
  { id: '3', output: 'Investment recommendation...', domain: 'financial', score: 'A', time: '10 min ago' },
  { id: '4', output: 'Treatment plan for...', domain: 'medical', score: 'A-', time: '15 min ago' }
];

export default function DashboardNew() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-gray-900 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
              N-Verify
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 bg-sky-500 text-black rounded-lg font-medium">+ New Verification</button>
          </div>
        </div>
      </header>

      {/* Stats */}
      <section className="py-8 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-4 gap-6">
            {metrics.map((m, i) => (
              <div key={i} className="p-6 bg-white/5 rounded-xl">
                <div className="text-gray-400 text-sm mb-1">{m.label}</div>
                <div className="text-3xl font-bold">{m.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Recent */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold mb-4">Recent Verifications</h2>
              <div className="space-y-3">
                {history.map((h, i) => (
                  <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-xl flex items-center justify-between">
                    <div className="flex-1">
                      <div className="font-mono text-sm text-gray-400 truncate max-w-md">{h.output}</div>
                      <div className="text-gray-500 text-xs mt-1">{h.domain} • {h.time}</div>
                    </div>
                    <div className={`text-2xl font-bold ${
                      h.score.startsWith('A') ? 'text-green-400' : 'text-yellow-400'
                    }`}>{h.score}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-xl font-bold mb-4">Features</h2>
              <div className="space-y-3">
                {features.map((f, i) => (
                  <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-xl">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{f.icon}</span>
                      <div>
                        <div className="font-medium">{f.title}</div>
                        <div className="text-gray-500 text-xs">{f.desc}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}