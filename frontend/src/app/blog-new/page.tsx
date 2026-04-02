'use client';

import { useState } from 'react';

const posts = [
  { 
    id: 1,
    title: 'How AI Verification Works',
    excerpt: 'Understanding the technology behind N-Verify\'s verification process.',
    category: 'Technology',
    date: 'March 30, 2026',
    readTime: '5 min'
  },
  { 
    id: 2,
    title: 'Medical AI: Ensuring Patient Safety',
    excerpt: 'How hospitals are using N-Verify to validate AI-generated diagnoses.',
    category: 'Case Studies',
    date: 'March 25, 2026',
    readTime: '8 min'
  },
  { 
    id: 3,
    title: 'The Future of Legal AI',
    excerpt: 'Why law firms are adopting AI verification for document review.',
    category: 'Industry',
    date: 'March 20, 2026',
    readTime: '6 min'
  },
  { 
    id: 4,
    title: 'N-Verify 2.0: What\'s New',
    excerpt: 'A deep dive into our latest release with multi-domain support.',
    category: 'Product',
    date: 'March 15, 2026',
    readTime: '4 min'
  }
];

const categories = ['All', 'Technology', 'Case Studies', 'Industry', 'Product'];

export default function BlogNew() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All' 
    ? posts 
    : posts.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <section className="pt-32 pb-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-gray-400">Latest insights and updates</p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-wrap gap-3">
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

      {/* Posts */}
      <section className="py-12 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-6">
            {filtered.map(post => (
              <article key={post.id} className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-sky-500/30 transition-colors cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-sky-500/20 text-sky-400 text-xs rounded-full">{post.category}</span>
                  <span className="text-gray-500 text-sm">{post.date}</span>
                  <span className="text-gray-500 text-sm">{post.readTime} read</span>
                </div>
                <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                <p className="text-gray-400">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Subscribe to Our Blog</h2>
          <p className="text-gray-400 mb-6">Get the latest posts delivered to your inbox.</p>
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