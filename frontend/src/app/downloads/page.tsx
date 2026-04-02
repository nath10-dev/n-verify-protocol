'use client';

import { useState } from 'react';

const tools = [
  { name: 'CLI', description: 'Command-line interface for quick verifications', icon: '⌨️', platforms: ['macOS', 'Linux', 'Windows'] },
  { name: 'VS Code', description: 'Extension for code verification', icon: '💡', platforms: ['VS Code'] },
  { name: 'GitHub Action', description: 'Integrate verification into CI/CD', icon: '🔄', platforms: ['GitHub'] },
  { name: 'Chrome Extension', description: 'Verify AI content in browser', icon: '🌐', platforms: ['Chrome'] },
  { name: 'Figma Plugin', description: 'Verify design AI outputs', icon: '🎨', platforms: ['Figma'] },
  { name: 'Slack Bot', description: 'Verification alerts in Slack', icon: '💬', platforms: ['Slack'] }
];

const SDKs = [
  { name: 'JavaScript', icon: '📜', version: '2.1.0' },
  { name: 'Python', icon: '🐍', version: '2.1.0' },
  { name: 'Go', icon: '🔷', version: '2.1.0' },
  { name: 'Rust', icon: '🦀', version: '2.0.0' },
  { name: 'Java', icon: '☕', version: '2.1.0' },
  { name: 'Ruby', icon: '💎', version: '1.5.0' }
];

export default function Downloads() {
  const [activeTab, setActiveTab] = useState('tools');

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Downloads</h1>
          <p className="text-xl text-gray-400">Tools, SDKs, and integrations</p>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setActiveTab('tools')}
              className={`px-6 py-3 rounded-xl font-medium transition-colors ${
                activeTab === 'tools' ? 'bg-sky-500 text-black' : 'bg-white/10 text-gray-400'
              }`}
            >
              Tools
            </button>
            <button
              onClick={() => setActiveTab('sdks')}
              className={`px-6 py-3 rounded-xl font-medium transition-colors ${
                activeTab === 'sdks' ? 'bg-sky-500 text-black' : 'bg-white/10 text-gray-400'
              }`}
            >
              SDKs
            </button>
          </div>
        </div>
      </section>

      {/* Tools */}
      {activeTab === 'tools' && (
        <section className="py-12 pb-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-6">
              {tools.map((tool, i) => (
                <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-sky-500/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{tool.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{tool.name}</h3>
                      <p className="text-gray-400 text-sm mb-4">{tool.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {tool.platforms.map((p, j) => (
                          <span key={j} className="px-2 py-1 bg-white/10 rounded text-xs">{p}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <button className="w-full mt-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 text-sm">
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SDKs */}
      {activeTab === 'sdks' && (
        <section className="py-12 pb-24">
          <div className="max-w-4xl mx-auto px-6">
            <div className="space-y-4">
              {SDKs.map((sdk, i) => (
                <div key={i} className="flex items-center justify-between p-6 bg-white/5 border border-white/10 rounded-xl">
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">{sdk.icon}</div>
                    <div>
                      <h3 className="font-bold">{sdk.name}</h3>
                      <span className="text-gray-500 text-sm">v{sdk.version}</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 text-sm">
                      npm
                    </button>
                    <button className="px-4 py-2 border border-white/20 rounded-lg hover:bg-white/5 text-sm">
                      GitHub
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <footer className="py-8 bg-black border-t border-white/10 text-center text-gray-500">
        © 2026 N-Verify Protocol
      </footer>
    </div>
  );
}