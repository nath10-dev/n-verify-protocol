'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuthStore } from '@/lib/auth-store';
import { verifyAPI } from '@/lib/api';

interface VerificationResult {
  id: string;
  domain: string;
  status: string;
  createdAt: string;
  completedAt?: string;
}

export default function VerificationDetailPage({ params }: { params: { requestId: string } }) {
  const router = useRouter();
  const { user, isAuthenticated, checkAuth } = useAuthStore();
  const [verification, setVerification] = useState<VerificationResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [polling, setPolling] = useState(true);

  useEffect(() => {
    checkAuth().then(() => {
      if (!useAuthStore.getState().isAuthenticated) {
        router.push('/login');
      }
    });
  }, []);

  useEffect(() => {
    if (isAuthenticated && params.requestId) {
      loadVerification();
    }
  }, [isAuthenticated, params.requestId]);

  const loadVerification = async () => {
    try {
      const response = await verifyAPI.get(params.requestId);
      setVerification(response.data);
      
      // Poll until completed or failed
      if (response.data.status === 'completed' || response.data.status === 'failed') {
        setPolling(false);
      }
    } catch (error) {
      console.error('Failed to load verification:', error);
    } finally {
      setLoading(false);
    }
  };

  // Poll every 3 seconds
  useEffect(() => {
    if (!polling) return;
    
    const interval = setInterval(loadVerification, 3000);
    return () => clearInterval(interval);
  }, [polling]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500/20 text-green-400 border-green-500/50';
      case 'processing': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50';
      case 'failed': return 'bg-red-500/20 text-red-400 border-red-500/50';
      default: return 'bg-slate-500/20 text-slate-400 border-slate-500/50';
    }
  };

  const getProgress = (status: string) => {
    switch (status) {
      case 'pending': return 10;
      case 'processing': return 50;
      case 'completed': return 100;
      case 'failed': return 0;
      default: return 0;
    }
  };

  if (!isAuthenticated || loading || !verification) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="bg-slate-800 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/dashboard" className="text-2xl font-bold text-white">
              N-<span className="text-sky-400">Verify</span>
            </Link>
            <Link href="/dashboard" className="text-slate-300 hover:text-white">
              ← Back to Dashboard
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Status Card */}
        <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-white">
              Verification Result
            </h1>
            <span className={`px-4 py-2 rounded-full text-sm font-medium border ${getStatusColor(verification.status)}`}>
              {verification.status.toUpperCase()}
            </span>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-slate-400 mb-2">
              <span>Progress</span>
              <span>{getProgress(verification.status)}%</span>
            </div>
            <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-sky-500 transition-all duration-500"
                style={{ width: `${getProgress(verification.status)}%` }}
              />
            </div>
          </div>

          {/* Details */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-slate-400">Request ID:</span>
              <p className="text-white font-mono">{verification.id}</p>
            </div>
            <div>
              <span className="text-slate-400">Domain:</span>
              <p className="text-white capitalize">{verification.domain}</p>
            </div>
            <div>
              <span className="text-slate-400">Created:</span>
              <p className="text-white">{new Date(verification.createdAt).toLocaleString()}</p>
            </div>
            {verification.completedAt && (
              <div>
                <span className="text-slate-400">Completed:</span>
                <p className="text-white">{new Date(verification.completedAt).toLocaleString()}</p>
              </div>
            )}
          </div>
        </div>

        {/* Reasoning Graph (when completed) */}
        {verification.status === 'completed' && (
          <div className="bg-slate-800 rounded-xl border border-slate-700 p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Reasoning Graph</h2>
            <div className="text-slate-400">
              <p>Verification complete. Reasoning graph visualization would appear here.</p>
              {/* TODO: Add graph visualization */}
            </div>
          </div>
        )}

        {/* Certificate (when completed) */}
        {verification.status === 'completed' && (
          <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mt-6">
            <h2 className="text-xl font-semibold text-white mb-4">Certificate</h2>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400">Your verification has been certified on-chain</p>
                <p className="text-sky-400 text-sm mt-1">Reliability Score: A</p>
              </div>
              <button className="bg-sky-500 hover:bg-sky-400 text-slate-900 font-semibold py-2 px-4 rounded-lg">
                View Certificate
              </button>
            </div>
          </div>
        )}

        {/* Error state */}
        {verification.status === 'failed' && (
          <div className="bg-red-500/10 border border-red-500/50 rounded-xl p-6 mt-6">
            <h2 className="text-xl font-semibold text-red-400 mb-2">Verification Failed</h2>
            <p className="text-slate-300">
              Something went wrong. Please try again or contact support.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
