'use client';

import { useState } from 'react';

const sessions = [
  { device: 'MacBook Pro', location: 'San Francisco, CA', lastActive: 'Now', current: true },
  { device: 'iPhone 14', location: 'San Francisco, CA', lastActive: '2 hours ago', current: false },
  { device: 'Windows PC', location: 'New York, NY', lastActive: '3 days ago', current: false }
];

export default function SecuritySettings() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Security</h1>
          <p className="text-gray-400">Manage your account security</p>
        </div>
      </section>

      {/* Password */}
      <section className="py-12">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-xl font-bold mb-6">Password</h2>
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="font-medium">Password</div>
                <div className="text-gray-400 text-sm">Last changed 30 days ago</div>
              </div>
              <button className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 text-sm">
                Change
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Two-Factor */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-xl font-bold mb-6">Two-Factor Authentication</h2>
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-2xl">🔐</span>
                <div>
                  <div className="font-medium">Authenticator App</div>
                  <div className="text-green-400 text-sm">Enabled</div>
                </div>
              </div>
              <button className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 text-sm">
                Configure
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sessions */}
      <section className="py-12">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-xl font-bold mb-6">Active Sessions</h2>
          <div className="space-y-3">
            {sessions.map((s, i) => (
              <div key={i} className={`p-4 rounded-xl border ${s.current ? 'bg-sky-500/10 border-sky-500' : 'bg-white/5 border-white/10'}`}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium flex items-center gap-2">
                      {s.device}
                      {s.current && <span className="px-2 py-0.5 bg-sky-500 text-black text-xs rounded">Current</span>}
                    </div>
                    <div className="text-gray-400 text-sm">{s.location} • {s.lastActive}</div>
                  </div>
                  {!s.current && (
                    <button className="text-red-400 text-sm hover:underline">Revoke</button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Keys */}
      <section className="py-12 pb-24 bg-gray-900">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-xl font-bold mb-6">API Keys</h2>
          <div className="p-4 bg-white/5 border border-white/10 rounded-xl flex items-center justify-between">
            <div className="font-mono text-sky-400">nv_live_xxxxxxxxxxxx</div>
            <button className="text-red-400 text-sm hover:underline">Revoke</button>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-black border-t border-white/10 text-center text-gray-500">
        © 2026 N-Verify Protocol
      </footer>
    </div>
  );
}