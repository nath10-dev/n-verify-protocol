'use client';

const roadmapItems = [
  { quarter: 'Q1 2026', title: 'Launch', items: ['Public launch', 'Medical domain', 'Basic API'], done: true },
  { quarter: 'Q2 2026', title: 'Growth', items: ['Legal & Financial domains', 'NFT certificates', 'Team features'], done: false, current: true },
  { quarter: 'Q3 2026', title: 'Scale', items: ['Global expansion', 'Mobile SDK', 'Enterprise features'], done: false },
  { quarter: 'Q4 2026', title: 'Network', items: ['Decentralized network', 'Token launch', 'Governance'], done: false }
];

export default function RoadmapNew() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Product Roadmap</h1>
          <p className="text-xl text-gray-400">What's coming next to N-Verify</p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-white/10" />
            
            {roadmapItems.map((item, i) => (
              <div key={i} className="relative pl-20 pb-12">
                <div className={`absolute left-5 w-6 h-6 rounded-full border-4 ${
                  item.done ? 'bg-green-500 border-green-500' :
                  item.current ? 'bg-sky-500 border-sky-500' :
                  'bg-black border-white/20'
                }`} />
                
                <div className={`p-6 rounded-2xl border ${
                  item.current ? 'bg-sky-500/10 border-sky-500' : 'bg-white/5 border-white/10'
                }`}>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-sky-400 text-sm">{item.quarter}</span>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                    </div>
                    {item.done && <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full">Done</span>}
                    {item.current && <span className="px-3 py-1 bg-sky-500/20 text-sky-400 text-sm rounded-full">In Progress</span>}
                  </div>
                  <ul className="space-y-2">
                    {item.items.map((it, j) => (
                      <li key={j} className="flex items-center gap-2 text-gray-400">
                        {item.done ? (
                          <span className="text-green-400">✓</span>
                        ) : (
                          <span className="text-gray-600">○</span>
                        )}
                        {it}
                      </li>
                    ))}
                  </ul>
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