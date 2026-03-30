'use client';

import { useState, useEffect } from 'react';

interface VerificationStats {
  total: number;
  medical: number;
  legal: number;
  financial: number;
  avgScore: string;
}

const domainColors = {
  medical: { bg: 'bg-green-500/20', text: 'text-green-400', border: 'border-green-500/30' },
  legal: { bg: 'bg-blue-500/20', text: 'text-blue-400', border: 'border-blue-500/30' },
  financial: { bg: 'bg-purple-500/20', text: 'text-purple-400', border: 'border-purple-500/30' }
};

export default function AnalyticsDashboard() {
  const [stats, setStats] = useState<VerificationStats>({
    total: 1247,
    medical: 423,
    legal: 389,
    financial: 435,
    avgScore: 'B+'
  });
  const [timeRange, setTimeRange] = useState('7d');

  const percentageChange = {
    total: 12.5,
    medical: 8.2,
    legal: -2.4,
    financial: 15.8
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Analytics</h1>
          <p className="text-gray-400">Track your verification performance</p>
        </div>
        <div className="flex gap-2">
          {['24h', '7d', '30d', '90d'].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-4 py-2 rounded-lg text-sm ${
                timeRange === range
                  ? 'bg-sky-500 text-black'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
          <div className="text-gray-400 text-sm mb-2">Total Verifications</div>
          <div className="text-3xl font-bold mb-2">{stats.total.toLocaleString()}</div>
          <div className="text-green-400 text-sm flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            +{percentageChange.total}% from last period
          </div>
        </div>

        <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
          <div className="text-gray-400 text-sm mb-2">Average Score</div>
          <div className="text-3xl font-bold mb-2">{stats.avgScore}</div>
          <div className="text-sky-400 text-sm">Reliability rating</div>
        </div>

        <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
          <div className="text-gray-400 text-sm mb-2">Success Rate</div>
          <div className="text-3xl font-bold mb-2">94.2%</div>
          <div className="text-green-400 text-sm">Above target</div>
        </div>

        <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
          <div className="text-gray-400 text-sm mb-2">Active Sessions</div>
          <div className="text-3xl font-bold mb-2">847</div>
          <div className="text-gray-500 text-sm">Currently online</div>
        </div>
      </div>

      {/* Domain Breakdown */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        {(['medical', 'legal', 'financial'] as const).map((domain) => (
          <div key={domain} className="bg-gray-900 border border-white/10 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="capitalize text-gray-400">{domain}</span>
              <span className={`${domainColors[domain].text} text-sm`}>
                {domain === 'medical' ? '🔬' : domain === 'legal' ? '⚖️' : '💰'}
              </span>
            </div>
            <div className="text-2xl font-bold mb-2">
              {domain === 'medical' ? stats.medical : domain === 'legal' ? stats.legal : stats.financial}
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${
                  domain === 'medical' ? 'bg-green-500' :
                  domain === 'legal' ? 'bg-blue-500' : 'bg-purple-500'
                }`}
                style={{
                  width: `${(domain === 'medical' ? stats.medical : domain === 'legal' ? stats.legal : stats.financial) / stats.total * 100}%`
                }}
              />
            </div>
            <div className="mt-2 text-sm text-gray-500 flex justify-between">
              <span>{((domain === 'medical' ? stats.medical : domain === 'legal' ? stats.legal : stats.financial) / stats.total * 100).toFixed(1)}%</span>
              <span className={percentageChange[domain] > 0 ? 'text-green-400' : 'text-red-400'}>
                {percentageChange[domain] > 0 ? '+' : ''}{percentageChange[domain]}%
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-gray-900 border border-white/10 rounded-2xl p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Verifications</h3>
        <div className="space-y-4">
          {[
            { id: 'NV-A1B2C3', domain: 'medical', score: 'A', time: '2 min ago' },
            { id: 'NV-D4E5F', domain: 'financial', score: 'B+', time: '5 min ago' },
            { id: 'NV-G7H8I', domain: 'legal', score: 'A', time: '12 min ago' },
            { id: 'NV-J9K0L', domain: 'medical', score: 'A-', time: '18 min ago' },
            { id: 'NV-M1N2O', domain: 'financial', score: 'B', time: '25 min ago' },
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
              <div className="flex items-center gap-4">
                <div className={`w-2 h-2 rounded-full ${
                  item.score.startsWith('A') ? 'bg-green-500' :
                  item.score.startsWith('B') ? 'bg-yellow-500' : 'bg-red-500'
                }`} />
                <div>
                  <div className="font-mono text-sky-400">{item.id}</div>
                  <div className="text-gray-500 text-sm capitalize">{item.domain}</div>
                </div>
              </div>
              <div className="text-right">
                <div className={`font-bold ${
                  item.score.startsWith('A') ? 'text-green-400' :
                  item.score.startsWith('B') ? 'text-yellow-400' : 'text-red-400'
                }`}>{item.score}</div>
                <div className="text-gray-500 text-sm">{item.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}