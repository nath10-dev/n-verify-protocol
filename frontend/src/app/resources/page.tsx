'use client';

import { useState } from 'react';

const resources = [
  {
    title: 'Getting Started Guide',
    type: 'Guide',
    readTime: '10 min',
    icon: '📖'
  },
  {
    title: 'API Reference',
    type: 'Documentation',
    readTime: '30 min',
    icon: '📚'
  },
  {
    title: 'Video Tutorials',
    type: 'Video',
    readTime: '45 min',
    icon: '🎥'
  },
  {
    title: 'Code Examples',
    type: 'Sample Code',
    readTime: '15 min',
    icon: '💻'
  },
  {
    title: 'Best Practices',
    type: 'Guide',
    readTime: '20 min',
    icon: '✨'
  },
  {
    title: 'Troubleshooting',
    type: 'FAQ',
    readTime: '10 min',
    icon: '🔧'
  }
];

const categories = ['All', 'Guides', 'Documentation', 'Video', 'Sample Code', 'FAQ'];

export default function Resources() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All' 
    ? resources 
    : resources.filter(r => r.type.includes(activeCategory) || (activeCategory === 'Guides' && r.type === 'Guide'));

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Resources</h1>
          <p className="text-xl text-gray-400">Everything you need to get started</p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
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
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {filtered.map((res, i) => (
              <div
                key={i}
                className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-sky-500/30 cursor-pointer transition-colors"
              >
                <div className="text-4xl mb-4">{res.icon}</div>
                <h3 className="text-lg font-bold mb-2">{res.title}</h3>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <span className="px-2 py-1 bg-white/10 rounded">{res.type}</span>
                  <span>{res.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-400 mb-6">Get the latest tutorials and updates delivered to your inbox.</p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-3 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:border-sky-500"
            />
            <button className="px-6 py-3 bg-sky-500 text-black font-medium rounded-xl hover:bg-sky-400">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-black border-t border-white/10 text-center text-gray-500">
        © 2026 N-Verify Protocol
      </footer>
    </div>
  );
}