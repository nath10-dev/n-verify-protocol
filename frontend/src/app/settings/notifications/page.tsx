'use client';

import { useState } from 'react';

const notifications = {
  email: { verifications: true, billing: true, security: true, marketing: false },
  push: { verifications: true, billing: false, security: true, marketing: false },
  slack: { verifications: false, billing: true, security: false, marketing: false }
};

export default function NotificationSettings() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Notifications</h1>
          <p className="text-gray-400">Manage how you receive notifications</p>
        </div>
      </section>

      {/* Channels */}
      <section className="py-12">
        <div className="max-w-2xl mx-auto px-6 space-y-8">
          {Object.entries(notifications).map(([channel, settings]) => (
            <div key={channel}>
              <h2 className="text-xl font-bold mb-4 capitalize">{channel}</h2>
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-4">
                {Object.entries(settings).map(([key, enabled]) => (
                  <label key={key} className="flex items-center justify-between">
                    <span className="capitalize">{key}</span>
                    <input 
                      type="checkbox" 
                      defaultChecked={enabled}
                      className="w-5 h-5 accent-sky-500" 
                    />
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="py-8 bg-black border-t border-white/10 text-center text-gray-500">
        © 2026 N-Verify Protocol
      </footer>
    </div>
  );
}