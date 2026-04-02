'use client';

const leaders = [
  { rank: 1, name: 'TechCorp AI', verifications: 15420, score: 98.5, trend: 'up' },
  { rank: 2, name: 'MediVerify', verifications: 12350, score: 97.2, trend: 'up' },
  { rank: 3, name: 'LegalAI Labs', verifications: 10200, score: 96.8, trend: 'same' },
  { rank: 4, name: 'FinanceFlow', verifications: 8900, score: 95.4, trend: 'up' },
  { rank: 5, name: 'HealthBot', verifications: 7650, score: 94.1, trend: 'down' },
  { rank: 6, name: 'LawGPT', verifications: 6200, score: 93.7, trend: 'up' },
  { rank: 7, name: 'InvestAI', verifications: 5100, score: 92.3, trend: 'same' },
  { rank: 8, name: 'DocuMind', verifications: 4800, score: 91.9, trend: 'up' },
  { rank: 9, name: 'MedBot Pro', verifications: 4200, score: 90.5, trend: 'down' },
  { rank: 10, name: 'LegalEagle AI', verifications: 3800, score: 89.2, trend: 'up' }
];

const stats = [
  { value: '1.2M+', label: 'Total Verifications' },
  { value: '94.2%', label: 'Average Score' },
  { value: '500+', label: 'Active Verifiers' },
  { value: '50K+', label: 'Certificates Issued' }
];

export default function Leaderboard() {
  const getTrendIcon = (trend: string) => {
    switch(trend) {
      case 'up': return '↑';
      case 'down': return '↓';
      default: return '→';
    }
  };

  const getTrendColor = (trend: string) => {
    switch(trend) {
      case 'up': return 'text-green-400';
      case 'down': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Leaderboard</h1>
          <p className="text-xl text-gray-400">Top performing verifiers in the N-Verify network</p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold text-sky-400 mb-1">{stat.value}</div>
                <div className="text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top 3 */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-end justify-center gap-4 mb-12">
            {/* 2nd */}
            <div className="text-center">
              <div className="text-4xl mb-2">🥈</div>
              <div className="text-xl font-bold">{leaders[1].name}</div>
              <div className="text-gray-400">{leaders[1].verifications.toLocaleString()} verifications</div>
              <div className="text-yellow-400 mt-2">{leaders[1].score}%</div>
            </div>
            {/* 1st */}
            <div className="text-center -mt-8">
              <div className="text-6xl mb-2">🥇</div>
              <div className="text-2xl font-bold">{leaders[0].name}</div>
              <div className="text-gray-400">{leaders[0].verifications.toLocaleString()} verifications</div>
              <div className="text-yellow-400 text-xl mt-2">{leaders[0].score}%</div>
            </div>
            {/* 3rd */}
            <div className="text-center">
              <div className="text-4xl mb-2">🥉</div>
              <div className="text-xl font-bold">{leaders[2].name}</div>
              <div className="text-gray-400">{leaders[2].verifications.toLocaleString()} verifications</div>
              <div className="text-yellow-400 mt-2">{leaders[2].score}%</div>
            </div>
          </div>
        </div>
      </section>

      {/* Full List */}
      <section className="py-12 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xl font-bold mb-6">All Rankings</h2>
          <div className="space-y-3">
            {leaders.map((leader, i) => (
              <div key={i} className={`flex items-center gap-4 p-4 rounded-xl ${
                i < 3 ? 'bg-sky-500/10 border border-sky-500/30' : 'bg-white/5 border border-white/10'
              }`}>
                <div className={`w-8 h-8 flex items-center justify-center rounded-full font-bold ${
                  leader.rank === 1 ? 'bg-yellow-500' : 
                  leader.rank === 2 ? 'bg-gray-400' : 
                  leader.rank === 3 ? 'bg-orange-600' : 'bg-white/10'
                }`}>
                  {leader.rank}
                </div>
                <div className="flex-1">
                  <div className="font-bold">{leader.name}</div>
                  <div className="text-gray-500 text-sm">{leader.verifications.toLocaleString()} verifications</div>
                </div>
                <div className="text-right">
                  <div className="font-bold">{leader.score}%</div>
                  <div className={getTrendColor(leader.trend)}>{getTrendIcon(leader.trend)}</div>
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