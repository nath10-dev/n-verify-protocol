'use client';

import { useState } from 'react';

const versions = [
  { version: '2.1.0', date: '2026-03-31', type: 'major', status: 'current' },
  { version: '2.0.5', date: '2026-03-28', type: 'patch', status: 'previous' },
  { version: '2.0.0', date: '2026-03-25', type: 'major', status: 'deprecated' },
  { version: '1.5.2', date: '2026-03-20', type: 'patch', status: 'deprecated' },
  { version: '1.0.0', date: '2026-03-01', type: 'major', status: 'deprecated' }
];

export default function VersionHistory() {
  const [selected, setSelected] = useState(versions[0]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <section className="pt-32 pb-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Version History</h1>
          <p className="text-gray-400">All N-Verify Protocol releases</p>
        </div>
      </section>

      {/* Version List */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-4">
            {versions.map((v, i) => (
              <button
                key={i}
                onClick={() => setSelected(v)}
                className={`w-full text-left p-6 rounded-2xl border transition-colors ${
                  selected.version === v.version
                    ? 'bg-sky-500/10 border-sky-500'
                    : 'bg-white/5 border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-bold">{v.version}</span>
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      v.type === 'major' ? 'bg-sky-500/20 text-sky-400' : 
                      v.type === 'minor' ? 'bg-purple-500/20 text-purple-400' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {v.type}
                    </span>
                    {v.status === 'current' && (
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                  <div className="text-gray-400">{v.date}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Changelog */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6">Changes in {selected.version}</h2>
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-green-400 mb-2">New Features</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Added interactive demo page</li>
                  <li>• New API documentation</li>
                  <li>• Integration marketplace</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-sky-400 mb-2">Improvements</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• 30% faster verification</li>
                  <li>• Better error messages</li>
                  <li>• UI improvements</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-red-400 mb-2">Breaking Changes</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• API v1 deprecated, use v2</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-black border-t border-white/10 text-center text-gray-500">
        © 2026 N-Verify Protocol
      </footer>
    </div>
  );
}