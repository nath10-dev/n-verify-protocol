'use client';

import { useState } from 'react';

const pressReleases = [
  { title: 'N-Verify Launches Decentralized AI Verification Platform', date: 'March 1, 2026', source: 'Business Wire' },
  { title: 'N-Verify Raises $10M in Seed Round', date: 'February 15, 2026', source: 'TechCrunch' },
  { title: 'Medical AI Verification Breakthrough', date: 'January 20, 2026', source: 'Healthcare IT News' },
  { title: 'N-Verify Partners with Major Healthcare Provider', date: 'December 10, 2025', source: 'PR Newswire' }
];

const coverage = [
  { outlet: 'TechCrunch', quote: 'N-Verify could be the missing piece in AI reliability.' },
  { outlet: 'Forbes', quote: 'A game-changer for AI accountability.' },
  { outlet: 'Wired', quote: 'Finally, a way to trust AI outputs.' },
  { outlet: 'The Verge', quote: 'Essential reading for anyone building with AI.' }
];

const brandAssets = [
  { name: 'Logo (SVG)', size: '12 KB', type: 'Vector' },
  { name: 'Logo (PNG)', size: '45 KB', type: 'Image' },
  { name: 'Brand Guidelines', size: '2.5 MB', type: 'PDF' },
  { name: 'Press Kit', size: '15 MB', type: 'ZIP' }
];

export default function Press() {
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const handleDownload = (name: string) => {
    setDownloadSuccess(name);
    setTimeout(() => setDownloadSuccess(null), 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Press & Media</h1>
          <p className="text-xl text-gray-400">Latest news, coverage, and brand assets</p>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">Press Releases</h2>
          <div className="space-y-4">
            {pressReleases.map((pr, i) => (
              <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-xl">
                <h3 className="font-bold mb-1">{pr.title}</h3>
                <div className="text-gray-400 text-sm">
                  <span>{pr.date}</span> • <span>{pr.source}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">Press Coverage</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {coverage.map((item, i) => (
              <div key={i} className="p-4 bg-white/5 rounded-xl">
                <div className="font-bold text-sky-400 mb-2">{item.outlet}</div>
                <p className="text-gray-300 italic">"{item.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Assets */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">Brand Assets</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {brandAssets.map((asset, i) => (
              <button
                key={i}
                onClick={() => handleDownload(asset.name)}
                className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl hover:border-sky-500/30 transition-colors text-left"
              >
                <div>
                  <div className="font-medium">{asset.name}</div>
                  <div className="text-gray-500 text-sm">{asset.size} • {asset.type}</div>
                </div>
                <span className="text-sky-400">⬇</span>
              </button>
            ))}
          </div>
          {downloadSuccess && (
            <div className="mt-4 p-3 bg-green-500/20 text-green-400 rounded-lg text-center">
              Download started: {downloadSuccess}
            </div>
          )}
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Media Inquiries</h2>
          <p className="text-gray-400 mb-6">Contact our press team for interviews and information.</p>
          <a href="mailto:press@n-verify.com" className="inline-block px-6 py-3 bg-sky-500 text-black font-medium rounded-xl hover:bg-sky-400">
            press@n-verify.com
          </a>
        </div>
      </section>

      <footer className="py-8 bg-black border-t border-white/10 text-center text-gray-500">
        © 2026 N-Verify Protocol
      </footer>
    </div>
  );
}