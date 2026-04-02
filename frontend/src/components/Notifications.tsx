'use client';

import { useState } from 'react';

interface Notification {
  id: number;
  type: 'success' | 'warning' | 'error' | 'info';
  title: string;
  message: string;
  time: string;
  read: boolean;
}

export default function Notifications() {
  const [filter, setFilter] = useState('all');
  
  const notifications: Notification[] = [
    { id: 1, type: 'success', title: 'Verification Complete', message: 'Your AI output has been verified with score A', time: '2 min ago', read: false },
    { id: 2, type: 'info', title: 'New Feature Available', message: 'Check out our new Legal domain verification', time: '1 hour ago', read: false },
    { id: 3, type: 'success', title: 'Certificate Generated', message: 'Your certificate is ready for download', time: '3 hours ago', read: true },
    { id: 4, type: 'warning', title: 'API Usage Alert', message: 'You have used 80% of your monthly quota', time: '1 day ago', read: true },
    { id: 5, type: 'error', title: 'Verification Failed', message: 'Unable to process your request', time: '2 days ago', read: true },
  ];

  const filtered = filter === 'all' ? notifications : notifications.filter(n => n.type === filter);

  const getIcon = (type: string) => {
    switch(type) {
      case 'success': return '✓';
      case 'warning': return '⚠';
      case 'error': return '✕';
      case 'info': return 'ℹ';
      default: return '•';
    }
  };

  const getColor = (type: string) => {
    switch(type) {
      case 'success': return 'text-green-400 bg-green-400/10';
      case 'warning': return 'text-yellow-400 bg-yellow-400/10';
      case 'error': return 'text-red-400 bg-red-400/10';
      case 'info': return 'text-blue-400 bg-blue-400/10';
      default: return 'text-gray-400 bg-gray-400/10';
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Notifications</h1>
        
        <div className="flex gap-2 mb-6">
          {['all', 'success', 'warning', 'error', 'info'].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg text-sm capitalize ${
                filter === f ? 'bg-sky-500 text-black' : 'bg-white/10 text-gray-400'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {filtered.map(notif => (
            <div key={notif.id} className={`p-4 rounded-xl border ${notif.read ? 'bg-white/5 border-white/10' : 'bg-white/10 border-sky-500/30'}`}>
              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getColor(notif.type)}`}>
                  {getIcon(notif.type)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{notif.title}</h3>
                    <span className="text-gray-500 text-sm">{notif.time}</span>
                  </div>
                  <p className="text-gray-400 text-sm">{notif.message}</p>
                </div>
                {!notif.read && <div className="w-2 h-2 bg-sky-500 rounded-full" />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}