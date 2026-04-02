'use client';

import { useState } from 'react';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'zh', name: '中文', flag: '🇨🇳' }
];

export default function LanguageSettings() {
  const [current, setCurrent] = useState('en');

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Language & Region</h1>
          <p className="text-gray-400">Set your language and regional preferences</p>
        </div>
      </section>

      {/* Language */}
      <section className="py-12">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-xl font-bold mb-6">Language</h2>
          <div className="space-y-2">
            {languages.map(lang => (
              <button
                key={lang.code}
                onClick={() => setCurrent(lang.code)}
                className={`w-full flex items-center gap-4 p-4 rounded-xl transition-colors ${
                  current === lang.code
                    ? 'bg-sky-500/20 border border-sky-500'
                    : 'bg-white/5 border border-white/10 hover:border-white/20'
                }`}
              >
                <span className="text-2xl">{lang.flag}</span>
                <span className="font-medium">{lang.name}</span>
                {current === lang.code && (
                  <span className="ml-auto text-sky-400">✓</span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Timezone */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-xl font-bold mb-6">Timezone</h2>
          <select className="w-full p-4 bg-white/10 border border-white/10 rounded-xl focus:outline-none focus:border-sky-500">
            <option>UTC (Coordinated Universal Time)</option>
            <option>America/New_York (Eastern)</option>
            <option>America/Los_Angeles (Pacific)</option>
            <option>Europe/London (GMT)</option>
            <option>Asia/Tokyo (JST)</option>
          </select>
        </div>
      </section>

      {/* Date Format */}
      <section className="py-12 pb-24">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-xl font-bold mb-6">Date Format</h2>
          <div className="flex gap-4">
            {['MM/DD/YYYY', 'DD/MM/YYYY', 'YYYY-MM-DD'].map(fmt => (
              <button
                key={fmt}
                className="px-6 py-3 bg-white/10 rounded-xl hover:bg-white/20"
              >
                {fmt}
              </button>
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