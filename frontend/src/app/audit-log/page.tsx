'use client';

import { useState } from 'react';

const logs = [
  { id: 1, action: 'Login', ip: '192.168.1.1', time: '2 hours ago', status: 'success' },
  { id: 2, action: 'Verify Output', ip: '192.168.1.1', time: '3 hours ago', status: 'success' },
  { id: 3, action: 'Update Profile', ip: '192.168.1.1', time: '1 day ago', status: 'success' },
  { id: 4, action: 'Login', ip: '10.0.0.5', time: '2 days ago', status: 'failed' },
];

export default function AuditLog() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Audit Log</h1>
          <p className="text-gray-400">Track all account activity</p>
        </div>
      </section>

      <section className="py-12 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-3">
            {logs.map(log => (
              <div key={log.id} className="p-4 bg-white/5 border border-white/10 rounded-xl flex items-center justify-between">
                <div>
                  <div className="font-medium">{log.action}</div>
                  <div className="text-gray-500 text-sm">{log.ip} • {log.time}</div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs ${
                  log.status === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                }`}>
                  {log.status}
                </span>
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