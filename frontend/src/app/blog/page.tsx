'use client';

import { useState } from 'react';

const posts = [
  {
    id: 1,
    title: 'Introducing N-Verify Protocol v2.0',
    excerpt: 'We are excited to announce the release of v2.0 with new AI verification capabilities.',
    category: 'Product',
    date: 'March 28, 2026',
    readTime: '5 min read',
    image: '🚀'
  },
  {
    id: 2,
    title: 'How AI Verification Works in Healthcare',
    excerpt: 'A deep dive into how we verify AI-generated medical diagnoses using domain-specific knowledge bases.',
    category: 'Technology',
    date: 'March 25, 2026',
    readTime: '8 min read',
    image: '🏥'
  },
  {
    id: 3,
    title: 'The Future of AI Trust',
    excerpt: 'Why cryptographic verification is the key to widespread AI adoption in critical industries.',
    category: 'Insights',
    date: 'March 20, 2026',
    readTime: '6 min read',
    image: '🔮'
  },
  {
    id: 4,
    title: 'Legal Industry Embraces AI Verification',
    excerpt: 'Leading law firms are adopting N-Verify to ensure AI-generated legal documents meet standards.',
    category: 'Industry',
    date: 'March 15, 2026',
    readTime: '4 min read',
    image: '⚖️'
  },
  {
    id: 5,
    title: 'Security First: Our Verification Process',
    excerpt: 'Learn how we ensure your data is protected throughout the verification process.',
    category: 'Security',
    date: 'March 10, 2026',
    readTime: '7 min read',
    image: '🔒'
  },
  {
    id: 6,
    title: 'Growing Our Validator Network',
    excerpt: 'Announcing new partnerships with domain experts to expand our verification capabilities.',
    category: 'Announcements',
    date: 'March 5, 2026',
    readTime: '3 min read',
    image: '🌐'
  }
];

const categories = ['All', 'Product', 'Technology', 'Insights', 'Industry', 'Security', 'Announcements'];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = activeCategory === 'All' 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Latest
              <span className="block bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
                Updates
              </span>
            </h1>
            <p className="text-xl text-gray-400">
              News, insights, and updates from the N-Verify team.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  activeCategory === category
                    ? 'bg-sky-500 text-black'
                    : 'bg-white/10 text-gray-400 hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-12 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-sky-500/50 transition-colors">
                <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-6xl">
                  {post.image}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-gray-400 mb-3">
                    <span className="text-sky-400">{post.category}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                  <h2 className="text-xl font-bold mb-2 group-hover:text-sky-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 text-sm mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                    <button className="text-sky-400 text-sm font-medium hover:underline">
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-400 mb-8">
            Subscribe to our newsletter for the latest updates and insights.
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-black/50 border border-white/10 rounded-xl focus:border-sky-500 focus:outline-none"
            />
            <button className="px-6 py-3 bg-sky-500 text-black font-medium rounded-xl hover:bg-sky-400">
              Subscribe
            </button>
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