'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuthStore } from '@/lib/auth-store';
import { verifyAPI, analyticsAPI } from '@/lib/api';

interface VerificationRequest {
  id: string;
  domain: string;
  status: string;
  createdAt: string;
}

export default function DashboardPage() {
  const router = useRouter();
  const { user, logout, checkAuth } = useAuthStore();
  const [verifications, setVerifications] = useState<VerificationRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [showNewVerification, setShowNewVerification] = useState(false);
  const [aiOutput, setAiOutput] = useState('');
  const [domain, setDomain] = useState('medical');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    checkAuth().then(() => {
      if (!useAuthStore.getState().isAuthenticated) {
        router.push('/login');
      }
    });
  }, []);

  useEffect(() => {
    if (user) {
      loadVerifications();
    }
  }, [user]);

  const loadVerifications = async () => {
    try {
      const response = await verifyAPI.list({ limit: 10 });
      setVerifications(response.data.requests || []);
    } catch (error) {
      console.error('Failed to load verifications:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitVerification = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      const response = await verifyAPI.create({ domain, aiOutput });
      const requestId = response.data.requestId;
      
      // Poll for results
      pollVerification(requestId);
    } catch (error) {
      console.error('Failed to create verification:', error);
      setSubmitting(false);
    }
  };

  const pollVerification = async (requestId: string) => {
    // For MVP, just redirect to the verification page
    router.push(`/verify/${requestId}`);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500/20 text-green-400';
      case 'processing': return 'bg-yellow-500/20 text-yellow-400';
      case 'failed': return 'bg-red-500/20 text-red-400';
      default: return 'bg-slate-500/20 text-slate-400';
    }
  };

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="bg-slate-800 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-8">
              <Link href="/" className="text-2xl font-bold text-white">
                N-<span className="text-sky-400">Verify</span>
              </Link>
              <nav className="hidden md:flex gap-6">
                <Link href="/dashboard" className="text-sky-400 font-medium">Dashboard</Link>
                <Link href="/verifications" className="text-slate-300 hover:text-white">Verifications</Link>
                <Link href="/validators" className="text-slate-300 hover:text-white">Validators</Link>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-slate-300">{user.email}</span>
              <button
                onClick={logout}
                className="text-slate-300 hover:text-white text-sm"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">
            Welcome back, {user.organization || user.email.split('@')[0]}
          </h1>
          <p className="text-slate-400 mt-2">
            Verify AI outputs and get cryptographic proof
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* New Verification Card */}
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <h2 className="text-xl font-semibold text-white mb-4">New Verification</h2>
            <p className="text-slate-400 mb-4">
              Submit AI output for verification in medical, legal, or financial domains.
            </p>
            <button
              onClick={() => setShowNewVerification(true)}
              className="w-full bg-sky-500 hover:bg-sky-400 text-slate-900 font-semibold py-3 px-4 rounded-lg transition-colors"
            >
              + New Verification
            </button>
          </div>

          {/* Stats Cards */}
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <h2 className="text-xl font-semibold text-white mb-4">Total Verifications</h2>
            <p className="text-4xl font-bold text-sky-400">{verifications.length}</p>
            <p className="text-slate-400 text-sm mt-2">All time</p>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <h2 className="text-xl font-semibold text-white mb-4">Your Domain</h2>
            <p className="text-slate-300 capitalize">{user.role === 'validator' ? 'Validator' : 'User'}</p>
            <p className="text-slate-400 text-sm mt-2">
              {user.role === 'validator' ? 'Verified outputs' : 'Submit verifications'}
            </p>
          </div>
        </div>

        {/* New Verification Form (Modal) */}
        {showNewVerification && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-slate-800 rounded-2xl p-6 max-w-2xl w-full border border-slate-700">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">New Verification</h2>
                <button
                  onClick={() => setShowNewVerification(false)}
                  className="text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleSubmitVerification} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Domain
                  </label>
                  <select
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white"
                  >
                    <option value="medical">Medical</option>
                    <option value="legal">Legal</option>
                    <option value="financial">Financial</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    AI Output to Verify
                  </label>
                  <textarea
                    value={aiOutput}
                    onChange={(e) => setAiOutput(e.target.value)}
                    required
                    rows={8}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    placeholder="Paste the AI output or reasoning you want to verify..."
                  />
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setShowNewVerification(false)}
                    className="flex-1 bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex-1 bg-sky-500 hover:bg-sky-400 text-slate-900 font-semibold py-3 px-4 rounded-lg transition-colors disabled:opacity-50"
                  >
                    {submitting ? 'Submitting...' : 'Verify'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Recent Verifications */}
        <div className="bg-slate-800 rounded-xl border border-slate-700">
          <div className="p-6 border-b border-slate-700">
            <h2 className="text-xl font-semibold text-white">Recent Verifications</h2>
          </div>
          
          {loading ? (
            <div className="p-8 text-center text-slate-400">Loading...</div>
          ) : verifications.length === 0 ? (
            <div className="p-8 text-center text-slate-400">
              No verifications yet. Create your first one!
            </div>
          ) : (
            <div className="divide-y divide-slate-700">
              {verifications.map((v) => (
                <Link
                  key={v.id}
                  href={`/verify/${v.id}`}
                  className="p-4 hover:bg-slate-700/50 flex items-center justify-between"
                >
                  <div>
                    <p className="text-white font-medium capitalize">{v.domain}</p>
                    <p className="text-slate-500 text-sm">{v.id}</p>
                  </div>
                  <div className="text-right">
                    <span className={`inline-flex px-3 py-1 rounded-full text-sm ${getStatusColor(v.status)}`}>
                      {v.status}
                    </span>
                    <p className="text-slate-500 text-sm mt-1">
                      {new Date(v.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
