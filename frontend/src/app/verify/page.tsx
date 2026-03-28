'use client';

import { useState } from 'react';
import axios from 'axios';

export default function VerifyPage() {
  const [domain, setDomain] = useState('medical');
  const [aiOutput, setAiOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResult(null);

    try {
      const response = await axios.post('/api/verify', { domain, aiOutput });
      setResult(response.data);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Verification failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">AI Output Verification</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Domain</label>
            <select
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              className="w-full p-3 bg-slate-800 border border-slate-700 rounded-lg"
            >
              <option value="medical">Medical</option>
              <option value="legal">Legal</option>
              <option value="financial">Financial</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">AI Output</label>
            <textarea
              value={aiOutput}
              onChange={(e) => setAiOutput(e.target.value)}
              placeholder="Paste AI output here..."
              rows={6}
              className="w-full p-3 bg-slate-800 border border-slate-700 rounded-lg"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-sky-500 hover:bg-sky-400 disabled:bg-slate-700 rounded-lg font-medium"
          >
            {loading ? 'Verifying...' : 'Verify Output'}
          </button>
        </form>

        {error && (
          <div className="mt-4 p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400">
            {error}
          </div>
        )}

        {result && (
          <div className="mt-6 p-6 bg-slate-800 border border-sky-500 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Verification Result</h2>
            <div className="space-y-2">
              <p><span className="text-slate-400">Certificate ID:</span> {result.certificateId}</p>
              <p><span className="text-slate-400">Reliability Score:</span> {result.reliabilityScore}</p>
              <p><span className="text-slate-400">Timestamp:</span> {new Date(result.timestamp).toLocaleString()}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}