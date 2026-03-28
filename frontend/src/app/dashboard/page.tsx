'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

interface Verification {
  id: string;
  certificateId: string;
  reliabilityScore: string;
  domain: string;
  timestamp: string;
}

export default function Dashboard() {
  const [verifications, setVerifications] = useState<Verification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadVerifications();
  }, []);

  const loadVerifications = async () => {
    try {
      const res = await axios.get('/api/verifications');
      setVerifications(res.data);
    } catch (err) {
      console.error('Failed to load verifications');
    } finally {
      setLoading(false);
    }
  };

  const stats = {
    total: verifications.length,
    medical: verifications.filter(v => v.domain === 'medical').length,
    legal: verifications.filter(v => v.domain === 'legal').length,
    financial: verifications.filter(v => v.domain === 'financial').length,
  };

  if (loading) return <div className="text-white p-8">Loading...</div>;

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-8">Your Dashboard</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="bg-slate-800 p-6 rounded-xl">
          <div className="text-slate-400 text-sm">Total Verifications</div>
          <div className="text-3xl font-bold text-sky-400">{stats.total}</div>
        </div>
        <div className="bg-slate-800 p-6 rounded-xl">
          <div className="text-slate-400 text-sm">Medical</div>
          <div className="text-3xl font-bold text-green-400">{stats.medical}</div>
        </div>
        <div className="bg-slate-800 p-6 rounded-xl">
          <div className="text-slate-400 text-sm">Legal</div>
          <div className="text-3xl font-bold text-blue-400">{stats.legal}</div>
        </div>
        <div className="bg-slate-800 p-6 rounded-xl">
          <div className="text-slate-400 text-sm">Financial</div>
          <div className="text-3xl font-bold text-purple-400">{stats.financial}</div>
        </div>
      </div>

      {/* Recent Verifications */}
      <h2 className="text-xl font-bold mb-4">Recent Verifications</h2>
      {verifications.length === 0 ? (
        <div className="text-slate-400">No verifications yet. Start by verifying an AI output!</div>
      ) : (
        <div className="space-y-3">
          {verifications.map((v) => (
            <div key={v.id} className="bg-slate-800 p-4 rounded-lg flex justify-between items-center">
              <div>
                <div className="font-mono text-sm text-sky-400">{v.certificateId.slice(0, 16)}...</div>
                <div className="text-slate-400 text-sm capitalize">{v.domain}</div>
              </div>
              <div className="text-right">
                <div className={`font-bold ${v.reliabilityScore.startsWith('A') ? 'text-green-400' : 'text-yellow-400'}`}>
                  {v.reliabilityScore}
                </div>
                <div className="text-slate-500 text-xs">{new Date(v.timestamp).toLocaleDateString()}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}