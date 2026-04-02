'use client';

import { useState } from 'react';

interface VerificationFormProps {
  onSubmit: (data: { output: string; domain: string }) => void;
  loading?: boolean;
}

export function VerificationForm({ onSubmit, loading }: VerificationFormProps) {
  const [output, setOutput] = useState('');
  const [domain, setDomain] = useState('medical');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ output, domain });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Domain Selection */}
      <div className="flex justify-center gap-4">
        {(['medical', 'legal', 'financial'] as const).map(d => (
          <button
            key={d}
            type="button"
            onClick={() => setDomain(d)}
            className={`px-6 py-3 rounded-xl font-medium capitalize transition-all ${
              domain === d
                ? 'bg-sky-500 text-black scale-105'
                : 'bg-white/10 text-gray-400 hover:bg-white/20'
            }`}
          >
            {d}
          </button>
        ))}
      </div>

      {/* Output Input */}
      <div>
        <textarea
          value={output}
          onChange={(e) => setOutput(e.target.value)}
          placeholder="Paste your AI-generated output here..."
          className="w-full h-48 p-4 bg-gray-900 border border-white/10 rounded-xl focus:border-sky-500 focus:outline-none resize-none"
          required
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading || !output.trim()}
        className="w-full py-4 bg-gradient-to-r from-sky-500 to-cyan-400 text-black font-semibold rounded-xl hover:shadow-lg hover:shadow-sky-500/25 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Analyzing...
          </span>
        ) : (
          'Verify Output'
        )}
      </button>
    </form>
  );
}

interface VerificationResultProps {
  score: string;
  confidence: number;
  findings: string[];
  certificateId: string;
  onDownload?: () => void;
}

export function VerificationResult({ score, confidence, findings, certificateId, onDownload }: VerificationResultProps) {
  const scoreColor = score.startsWith('A') ? 'text-green-400' : score.startsWith('B') ? 'text-yellow-400' : 'text-red-400';

  return (
    <div className="p-6 bg-gray-900 border border-sky-500/30 rounded-2xl animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold">Verification Result</h3>
        <span className={`text-4xl font-bold ${scoreColor}`}>{score}</span>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="p-4 bg-white/5 rounded-xl text-center">
          <div className="text-2xl font-bold text-sky-400">{Math.round(confidence * 100)}%</div>
          <div className="text-gray-500 text-sm">Confidence</div>
        </div>
        <div className="p-4 bg-white/5 rounded-xl text-center">
          <div className="text-2xl font-bold text-sky-400">{findings.length}</div>
          <div className="text-gray-500 text-sm">Findings</div>
        </div>
      </div>

      {/* Findings */}
      <div className="space-y-2 mb-6">
        {findings.map((finding, i) => (
          <div key={i} className="flex items-center gap-2 text-gray-300">
            <span className="text-green-400">✓</span> {finding}
          </div>
        ))}
      </div>

      {/* Certificate ID */}
      <div className="p-4 bg-black/50 rounded-xl mb-6">
        <div className="text-gray-500 text-sm mb-1">Certificate ID</div>
        <code className="text-sky-400 font-mono">{certificateId}</code>
      </div>

      {/* Actions */}
      <div className="flex gap-4">
        <button
          onClick={onDownload}
          className="flex-1 py-3 bg-sky-500 text-black font-medium rounded-xl hover:bg-sky-400"
        >
          Download Certificate
        </button>
        <button className="flex-1 py-3 border border-white/20 rounded-xl hover:bg-white/5">
          Share Result
        </button>
      </div>
    </div>
  );
}

interface DomainCardProps {
  domain: 'medical' | 'legal' | 'financial';
  stats: { verifications: string; accuracy: string; time: string };
}

export function DomainCard({ domain, stats }: DomainCardProps) {
  const icons = { medical: '🏥', legal: '⚖️', financial: '💰' };
  const colors = { medical: 'from-red-500/20 to-red-500/5', legal: 'from-purple-500/20 to-purple-500/5', financial: 'from-green-500/20 to-green-500/5' };

  return (
    <div className={`p-6 bg-gradient-to-br ${colors[domain]} border border-white/10 rounded-2xl hover:border-sky-500/30 transition-all cursor-pointer`}>
      <div className="text-4xl mb-4">{icons[domain]}</div>
      <h3 className="text-xl font-bold capitalize mb-4">{domain}</h3>
      <div className="grid grid-cols-3 gap-4 text-center">
        <div>
          <div className="text-sky-400 font-bold">{stats.verifications}</div>
          <div className="text-gray-500 text-xs">Verified</div>
        </div>
        <div>
          <div className="text-sky-400 font-bold">{stats.accuracy}</div>
          <div className="text-gray-500 text-xs">Accuracy</div>
        </div>
        <div>
          <div className="text-sky-400 font-bold">{stats.time}</div>
          <div className="text-gray-500 text-xs">Avg Time</div>
        </div>
      </div>
    </div>
  );
}