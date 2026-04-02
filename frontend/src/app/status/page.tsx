'use client';

import { useState } from 'react';

const systems = [
  { name: 'API', status: 'operational', uptime: '99.99%' },
  { name: 'Web App', status: 'operational', uptime: '99.95%' },
  { name: 'Blockchain', status: 'operational', uptime: '99.9%' },
  { name: 'IPFS Storage', status: 'operational', uptime: '99.5%' },
  { name: 'Email Service', status: 'operational', uptime: '99.9%' },
  { name: 'Analytics', status: 'operational', uptime: '99.8%' }
];

const incidents = [
  {
    id: 1,
    title: 'Scheduled Maintenance',
    status: 'resolved',
    date: 'March 28, 2026',
    duration: '30 min',
    description: 'Routine database optimization completed successfully.'
  },
  {
    id: 2,
    title: 'API Latency Spike',
    status: 'resolved',
    date: 'March 25, 2026',
    duration: '15 min',
    description: 'Temporary latency increase due to high traffic. Resolved automatically.'
  },
  {
    id: 3,
    title: 'SSL Certificate Update',
    status: 'resolved',
    date: 'March 20, 2026',
    duration: '5 min',
    description: 'SSL certificates renewed successfully.'
  }
];

const metrics = [
  { label: 'Total Requests', value: '12.4M', change: '+12%' },
  { label: 'Avg Response', value: '142ms', change: '-8%' },
  { label: 'Uptime (30d)', value: '99.97%', change: '+0.02%' },
  { label: 'API Calls', value: '4.2M', change: '+15%' }
];

export default function Status() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="text-green-400 font-medium">All Systems Operational</span>
          </div>
          <h1 className="text-5xl font-bold mb-4">System Status</h1>
          <p className="text-xl text-gray-400">Real-time status of N-Verify services</p>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold mb-1">{metric.value}</div>
                <div className="text-gray-400 text-sm">{metric.label}</div>
                <div className="text-green-400 text-sm">{metric.change}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Systems */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6">System Status</h2>
          <div className="space-y-4">
            {systems.map((system, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl">
                <div className="flex items-center gap-4">
                  <div className={`w-3 h-3 rounded-full ${
                    system.status === 'operational' ? 'bg-green-500' :
                    system.status === 'degraded' ? 'bg-yellow-500' : 'bg-red-500'
                  }`} />
                  <span className="font-medium">{system.name}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-gray-400">{system.uptime}</span>
                  <span className={`text-sm ${
                    system.status === 'operational' ? 'text-green-400' :
                    system.status === 'degraded' ? 'text-yellow-400' : 'text-red-400'
                  }`}>
                    {system.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Incidents */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6">Recent Incidents</h2>
          <div className="space-y-4">
            {incidents.map((incident) => (
              <div key={incident.id} className="p-6 bg-white/5 border border-white/10 rounded-xl">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold">{incident.title}</h3>
                    <div className="text-sm text-gray-400">
                      {incident.date} • {incident.duration}
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                    {incident.status}
                  </span>
                </div>
                <p className="text-gray-400">{incident.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Get Notified</h2>
          <p className="text-gray-400 mb-6">
            Subscribe to incident notifications to stay informed.
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-black/50 border border-white/10 rounded-xl focus:border-sky-500 focus:outline-none"
            />
            <button className="px-6 py-3 bg-sky-500 text-black font-medium rounded-xl hover:bg-sky-400">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-500">
          © 2026 N-Verify Protocol. All rights reserved.
        </div>
      </footer>
    </div>
  );
}