'use client';

import { useState } from 'react';

export default function CertificateViewer() {
  const [search, setSearch] = useState('');
  
  const certificates = [
    { id: 'NV-A1B2C3D4', domain: 'medical', score: 'A', date: '2026-03-28', status: 'valid' },
    { id: 'NV-E5F6G7H', domain: 'legal', score: 'B+', date: '2026-03-27', status: 'valid' },
    { id: 'NV-I9J0K1L', domain: 'financial', score: 'A-', date: '2026-03-26', status: 'valid' },
    { id: 'NV-M2N3O4P', domain: 'medical', score: 'B', date: '2026-03-25', status: 'expired' },
  ];

  const filtered = certificates.filter(c => c.id.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Certificate Viewer</h1>
        
        <input
          type="text"
          placeholder="Search certificates..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl mb-8 focus:outline-none focus:border-sky-500"
        />

        <div className="space-y-4">
          {filtered.map(cert => (
            <div key={cert.id} className="p-6 bg-white/5 border border-white/10 rounded-xl">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-mono text-sky-400 text-lg">{cert.id}</div>
                  <div className="text-gray-400 text-sm capitalize">{cert.domain} • {cert.date}</div>
                </div>
                <div className="text-right">
                  <div className={`text-2xl font-bold ${
                    cert.score.startsWith('A') ? 'text-green-400' : 'text-yellow-400'
                  }`}>{cert.score}</div>
                  <div className={`text-sm ${cert.status === 'valid' ? 'text-green-400' : 'text-gray-500'}`}>
                    {cert.status}
                  </div>
                </div>
              </div>
              <div className="flex gap-3 mt-4">
                <button className="px-4 py-2 bg-sky-500 text-black rounded-lg text-sm hover:bg-sky-400">
                  View Certificate
                </button>
                <button className="px-4 py-2 border border-white/20 rounded-lg text-sm hover:bg-white/5">
                  Download
                </button>
                <button className="px-4 py-2 border border-white/20 rounded-lg text-sm hover:bg-white/5">
                  Share
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}