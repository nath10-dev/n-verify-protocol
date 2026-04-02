'use client';

import { useState } from 'react';

const stats = [
  { label: 'Total Certificates', value: '12,450' },
  { label: 'Verified Today', value: '342' },
  { label: 'Average Score', value: 'A-' },
  { label: 'Active Verifiers', value: '156' }
];

const recentCerts = [
  { id: 'NV-ABC123', domain: 'Medical', score: 'A', date: 'Today' },
  { id: 'NV-DEF456', domain: 'Legal', score: 'B+', date: 'Today' },
  { id: 'NV-GHI789', domain: 'Financial', score: 'A', date: 'Yesterday' },
  { id: 'NV-JKL012', domain: 'Medical', score: 'A-', date: 'Yesterday' }
];

export default function CertificatesNew() {
  const [search, setSearch] = useState('');

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <section className="pt-32 pb-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Certificates</h1>
          <p className="text-gray-400">View and manage your verification certificates</p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="p-6 bg-white/5 rounded-xl">
                <div className="text-gray-400 text-sm mb-1">{s.label}</div>
                <div className="text-3xl font-bold">{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-6">
          <input
            type="text"
            placeholder="Search certificates by ID or domain..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl focus:outline-none focus:border-sky-500"
          />
        </div>
      </section>

      {/* List */}
      <section className="py-8 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-3">
            {recentCerts.map((cert, i) => (
              <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <code className="text-sky-400 font-mono">{cert.id}</code>
                  <span className="text-gray-400">{cert.domain}</span>
                  <span className="text-gray-500 text-sm">{cert.date}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`text-xl font-bold ${
                    cert.score.startsWith('A') ? 'text-green-400' : 'text-yellow-400'
                  }`}>{cert.score}</span>
                  <button className="px-3 py-1 bg-white/10 rounded-lg text-sm hover:bg-white/20">
                    View
                  </button>
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