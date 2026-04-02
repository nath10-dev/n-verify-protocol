'use client';

import { useState } from 'react';

interface APIKey {
  id: string;
  name: string;
  key: string;
  created: string;
  lastUsed: string;
  status: 'active' | 'revoked';
}

export default function APIKeyManager() {
  const [keys, setKeys] = useState<APIKey[]>([
    { id: '1', name: 'Production', key: 'nv_live_xxxxxxxxxxxx', created: '2026-03-01', lastUsed: '2 hours ago', status: 'active' },
    { id: '2', name: 'Development', key: 'nv_test_xxxxxxxxxxxx', created: '2026-03-15', lastUsed: '1 day ago', status: 'active' },
  ]);

  const [showKey, setShowKey] = useState<string | null>(null);

  const revealKey = (key: string) => {
    setShowKey(showKey === key ? null : key);
  };

  const copyKey = async (key: string) => {
    await navigator.clipboard.writeText(key);
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">API Keys</h1>
          <button className="px-4 py-2 bg-sky-500 text-black rounded-lg font-medium hover:bg-sky-400">
            + Generate New Key
          </button>
        </div>

        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 mb-8">
          <div className="flex items-start gap-3">
            <span className="text-2xl">⚠️</span>
            <div>
              <div className="font-medium text-yellow-400">Keep your API keys secure</div>
              <div className="text-gray-400 text-sm">Never share your API keys publicly or commit them to version control.</div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {keys.map(apiKey => (
            <div key={apiKey.id} className="p-6 bg-white/5 border border-white/10 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="font-medium">{apiKey.name}</div>
                <span className={`px-3 py-1 rounded-full text-xs ${
                  apiKey.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                }`}>
                  {apiKey.status}
                </span>
              </div>
              
              <div className="flex items-center gap-2 mb-4">
                <code className="flex-1 px-4 py-2 bg-black/50 rounded-lg font-mono text-sm">
                  {showKey === apiKey.id ? apiKey.key : '••••••••••••••••••••••'}
                </code>
                <button
                  onClick={() => revealKey(apiKey.id)}
                  className="px-3 py-2 bg-white/10 rounded-lg hover:bg-white/20"
                >
                  {showKey === apiKey.id ? 'Hide' : 'Reveal'}
                </button>
                <button
                  onClick={() => copyKey(apiKey.key)}
                  className="px-3 py-2 bg-white/10 rounded-lg hover:bg-white/20"
                >
                  Copy
                </button>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-400">
                <span>Created: {apiKey.created}</span>
                <span>Last used: {apiKey.lastUsed}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}