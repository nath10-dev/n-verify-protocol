'use client';

const roadmap = [
  {
    quarter: 'Q1 2026',
    title: 'Foundation',
    status: 'completed',
    items: ['Core protocol launch', 'Basic verification API', 'Medical domain', 'Beta testers']
  },
  {
    quarter: 'Q2 2026',
    title: 'Expansion',
    status: 'in_progress',
    items: ['Legal & Financial domains', 'Blockchain integration', 'Certificate NFTs', 'Validator network']
  },
  {
    quarter: 'Q3 2026',
    title: 'Scale',
    status: 'planned',
    items: ['Enterprise API', 'Team management', 'Custom AI models', 'Advanced analytics']
  },
  {
    quarter: 'Q4 2026',
    title: 'Growth',
    status: 'planned',
    items: ['Mobile SDK', 'Offline verification', 'Multi-chain support', 'Global expansion']
  }
];

const features = [
  { name: 'Real-time Verification', quarter: 'Q1', status: '✅ Live' },
  { name: 'Certificate NFTs', quarter: 'Q2', status: '🚀 In Progress' },
  { name: 'Enterprise API', quarter: 'Q3', status: '📋 Planned' },
  { name: 'Mobile SDK', quarter: 'Q4', status: '📋 Planned' },
  { name: 'Legal Domain', quarter: 'Q2', status: '🚀 In Progress' },
  { name: 'Financial Domain', quarter: 'Q2', status: '📋 Planned' },
  { name: 'Team Management', quarter: 'Q3', status: '📋 Planned' },
  { name: 'Multi-chain Support', quarter: 'Q4', status: '📋 Planned' },
  { name: 'Validator Network', quarter: 'Q2', status: '🚀 In Progress' },
  { name: 'Custom AI Models', quarter: 'Q3', status: '📋 Planned' },
  { name: 'Offline Verification', quarter: 'Q4', status: '📋 Planned' },
  { name: 'Mobile App', quarter: 'Q4', status: '📋 Planned' }
];

export default function Roadmap() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Product
              <span className="block bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
                Roadmap
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-10">
              See what's coming next and help shape our future.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">2026 Roadmap</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {roadmap.map((quarter, index) => (
              <div key={index} className="relative">
                {/* Line connector */}
                {index < roadmap.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-white/10" />
                )}
                
                <div className={`p-6 rounded-2xl border ${
                  quarter.status === 'completed' ? 'bg-green-500/10 border-green-500/50' :
                  quarter.status === 'in_progress' ? 'bg-sky-500/10 border-sky-500' :
                  'bg-white/5 border-white/10'
                }`}>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      quarter.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                      quarter.status === 'in_progress' ? 'bg-sky-500/20 text-sky-400' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {quarter.status === 'completed' ? '✅ Complete' :
                       quarter.status === 'in_progress' ? '🚀 In Progress' : '📋 Planned'}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-1">{quarter.quarter}</h3>
                  <h4 className="text-xl font-semibold mb-4 text-sky-400">{quarter.title}</h4>
                  <ul className="space-y-2">
                    {quarter.items.map((item, i) => (
                      <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                        <span className="text-sky-400 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Tracker */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Feature Tracker</h2>
            <p className="text-gray-400">Track our progress on upcoming features</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="p-4 bg-white/5 border border-white/10 rounded-xl flex items-center justify-between">
                <div>
                  <div className="font-medium">{feature.name}</div>
                  <div className="text-gray-500 text-sm">{feature.quarter}</div>
                </div>
                <span className={`text-sm ${
                  feature.status.includes('✅') ? 'text-green-400' :
                  feature.status.includes('🚀') ? 'text-sky-400' : 'text-gray-500'
                }`}>
                  {feature.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Votes */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Community Votes</h2>
            <p className="text-gray-400">Help us prioritize what's next</p>
          </div>
          
          <div className="space-y-4">
            {[
              { title: 'Mobile App', votes: 847, progress: 85 },
              { title: 'Offline Verification', votes: 623, progress: 62 },
              { title: 'Custom AI Models', votes: 512, progress: 51 },
              { title: 'Multi-language Support', votes: 398, progress: 40 }
            ].map((feature, index) => (
              <div key={index} className="p-4 bg-black/50 border border-white/10 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">{feature.title}</span>
                  <span className="text-sky-400 text-sm">{feature.votes} votes</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="bg-sky-500 h-2 rounded-full" style={{ width: `${feature.progress}%` }} />
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <button className="px-6 py-3 bg-sky-500 text-black font-medium rounded-xl hover:bg-sky-400">
              Suggest a Feature
            </button>
          </div>
        </div>
      </section>

      {/* Changelog */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Changelog</h2>
          </div>
          
          <div className="space-y-8">
            {[
              { version: 'v1.2.0', date: 'March 28, 2026', changes: ['Added Legal and Financial domains', 'New certificate system', 'API v2 launch'] },
              { version: 'v1.1.0', date: 'March 15, 2026', changes: ['Added wallet connection', 'New dashboard', 'Analytics improvements'] },
              { version: 'v1.0.0', date: 'March 1, 2026', changes: ['Initial launch', 'Core API', 'Medical domain'] }
            ].map((release, index) => (
              <div key={index} className="border-l-2 border-sky-500 pl-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-sky-400 font-mono">{release.version}</span>
                  <span className="text-gray-500 text-sm">{release.date}</span>
                </div>
                <ul className="space-y-1">
                  {release.changes.map((change, i) => (
                    <li key={i} className="text-gray-300">{change}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-500">
          © 2026 N-Verify Protocol. All rights reserved.
        </div>
      </footer>
    </div>
  );
}