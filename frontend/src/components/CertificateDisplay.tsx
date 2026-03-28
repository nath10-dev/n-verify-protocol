'use client';

import { useState } from 'react';

interface CertificateProps {
  certificateId: string;
  reliabilityScore: string;
  timestamp: string;
  domain: string;
}

export default function CertificateDisplay({ certificateId, reliabilityScore, timestamp, domain }: CertificateProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(certificateId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getScoreColor = (score: string) => {
    if (score.startsWith('A')) return 'text-green-400';
    if (score.startsWith('B')) return 'text-yellow-400';
    if (score.startsWith('C')) return 'text-orange-400';
    return 'text-red-400';
  };

  return (
    <div className="bg-slate-800 border border-sky-500 rounded-xl p-6 max-w-md mx-auto">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="text-sky-400 text-sm font-medium mb-1">N-VERIFY CERTIFICATE</div>
        <div className="text-xs text-slate-500">Decentralized AI Verification</div>
      </div>

      {/* Certificate ID */}
      <div className="mb-4">
        <div className="text-slate-400 text-xs mb-1">Certificate ID</div>
        <div className="flex items-center gap-2">
          <code className="text-sm font-mono text-sky-300">{certificateId.slice(0, 20)}...</code>
          <button onClick={copyToClipboard} className="text-slate-400 hover:text-white">
            {copied ? '✓' : '📋'}
          </button>
        </div>
      </div>

      {/* Score */}
      <div className="mb-4">
        <div className="text-slate-400 text-xs mb-1">Reliability Score</div>
        <div className={`text-3xl font-bold ${getScoreColor(reliabilityScore)}`}>
          {reliabilityScore}
        </div>
      </div>

      {/* Details */}
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <div className="text-slate-500 text-xs">Domain</div>
          <div className="capitalize text-white">{domain}</div>
        </div>
        <div>
          <div className="text-slate-500 text-xs">Verified At</div>
          <div className="text-white">{new Date(timestamp).toLocaleDateString()}</div>
        </div>
      </div>

      {/* QR Code Placeholder */}
      <div className="mt-6 pt-4 border-t border-slate-700 flex justify-center">
        <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center">
          <span className="text-xs text-black">QR Code</span>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 text-center text-xs text-slate-500">
        This certificate is permanently recorded on the blockchain
      </div>
    </div>
  );
}