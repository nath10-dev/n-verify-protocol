'use client';

import { useState } from 'react';

const integrations = [
  { 
    name: 'OpenAI', 
    icon: '🤖', 
    description: 'Verify GPT outputs directly',
    status: 'available',
    category: 'AI Models'
  },
  { 
    name: 'Anthropic', 
    icon: '🧠', 
    description: 'Verify Claude responses',
    status: 'available',
    category: 'AI Models'
  },
  { 
    name: 'Meta AI', 
    icon: '🔷', 
    description: 'Verify Llama outputs',
    status: 'coming_soon',
    category: 'AI Models'
  },
  { 
    name: 'LangChain', 
    icon: '⛓️', 
    description: 'Add verification to chains',
    status: 'available',
    category: 'Frameworks'
  },
  { 
    name: 'LangSmith', 
    icon: '🔬', 
    description: 'Trace verification calls',
    status: 'available',
    category: 'Frameworks'
  },
  { 
    name: 'Vercel', 
    icon: '▲', 
    description: 'Deploy with Vercel',
    status: 'available',
    category: 'Platforms'
  },
  { 
    name: 'AWS Lambda', 
    icon: '☁️', 
    description: 'Serverless verification',
    status: 'available',
    category: 'Platforms'
  },
  { 
    name: 'Notion', 
    icon: '📝', 
    description: 'Sync certificates to Notion',
    status: 'coming_soon',
    category: 'Productivity'
  }
];

const categories = ['All', 'AI Models', 'Frameworks', 'Platforms', 'Productivity'];

export default function Integrations() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = integrations.filter(i => {
    const matchesCategory = activeCategory === 'All' || i.category === activeCategory;
    const matchesSearch = i.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Integrations</h1>
          <p className="text-xl text-gray-400">Connect N-Verify with your favorite tools</p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                    activeCategory === cat 
                      ? 'bg-sky-500 text-black' 
                      : 'bg-white/10 text-gray-400 hover:bg-white/20'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <input
              type="text"
              placeholder="Search integrations..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-4 py-2 bg-white/10 border border-white/10 rounded-lg focus:outline-none focus:border-sky-500"
            />
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-8 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {filtered.map((int, i) => (
              <div
                key={i}
                className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-sky-500/30 transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-3xl">{int.icon}</div>
                  <div>
                    <h3 className="font-bold">{int.name}</h3>
                    <span className="text-xs text-gray-500">{int.category}</span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-4">{int.description}</p>
                <span className={`inline-block px-3 py-1 rounded-full text-xs ${
                  int.status === 'available' 
                    ? 'bg-green-500/20 text-green-400' 
                    : 'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {int.status === 'available' ? 'Available' : 'Coming Soon'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Need a custom integration?</h2>
          <p className="text-gray-400 mb-6">We can help build integrations with your tools.</p>
          <button className="px-6 py-3 bg-sky-500 text-black font-medium rounded-xl hover:bg-sky-400">
            Contact Us
          </button>
        </div>
      </section>

      <footer className="py-8 bg-black border-t border-white/10 text-center text-gray-500">
        © 2026 N-Verify Protocol
      </footer>
    </div>
  );
}