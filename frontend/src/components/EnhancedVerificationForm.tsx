'use client';

import { useState } from 'react';
import { ethers } from 'ethers';

export default function EnhancedVerificationForm() {
  const [domain, setDomain] = useState<'medical' | 'legal' | 'financial'>('medical');
  const [aiOutput, setAiOutput] = useState('');
  const [context, setContext] = useState('');
  const [loading, setLoading] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [result, setResult] = useState<any>(null);

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert('MetaMask not installed!');
      return;
    }
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send('eth_requestAccounts', []);
      setWalletAddress(accounts[0]);
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    }
  };

  const handleVerify = async () => {
    if (!aiOutput.trim()) {
      alert('Please enter an AI output to verify');
      return;
    }

    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const mockResult = {
        certificateId: `NV-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
        reliabilityScore: ['A', 'A-', 'B+', 'B', 'B-'][Math.floor(Math.random() * 5)],
        reasoningChain: {
          steps: 5,
          avgConfidence: 0.85,
          keyFindings: [
            'Evidence-based reasoning detected',
            'Source citations found',
            'Logical flow verified'
          ]
        },
        domain,
        timestamp: new Date().toISOString()
      };
      setResult(mockResult);
      setLoading(false);
    }, 2000);
  };

  const domainOptions = [
    { 
      id: 'medical', 
      label: 'Medical', 
      icon: '🔬',
      description: 'Diagnoses, treatments, prescriptions',
      color: 'green'
    },
    { 
      id: 'legal', 
      label: 'Legal', 
      icon: '⚖️',
      description: 'Contracts, advice, compliance',
      color: 'blue'
    },
    { 
      id: 'financial', 
      label: 'Financial', 
      icon: '💰',
      description: 'Investments, tax, banking',
      color: 'purple'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Verify AI Output</h1>
        <p className="text-gray-400 mb-8">Enter an AI-generated output to verify its reliability</p>

        {/* Domain Selection */}
        <div className="mb-8">
          <label className="block text-sm text-gray-400 mb-4">Select Domain</label>
          <div className="grid grid-cols-3 gap-4">
            {domainOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setDomain(option.id as any)}
                className={`p-4 rounded-xl border transition-all text-left ${
                  domain === option.id
                    ? option.color === 'green' ? 'bg-green-500/20 border-green-500' :
                      option.color === 'blue' ? 'bg-blue-500/20 border-blue-500' :
                      'bg-purple-500/20 border-purple-500'
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
              >
                <div className="text-2xl mb-2">{option.icon}</div>
                <div className="font-medium">{option.label}</div>
                <div className="text-gray-500 text-sm">{option.description}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Wallet Connection */}
        {walletAddress ? (
          <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-green-400 font-medium">Wallet Connected</span>
              <span className="text-gray-400 font-mono text-sm">
                {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
              </span>
            </div>
            <button onClick={() => setWalletAddress(null)} className="text-gray-400 hover:text-white">
              Disconnect
            </button>
          </div>
        ) : (
          <button
            onClick={connectWallet}
            className="w-full mb-6 py-4 border border-white/20 rounded-xl hover:bg-white/5 flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Connect Wallet (Optional)
          </button>
        )}

        {/* AI Output Input */}
        <div className="mb-6">
          <label className="block text-sm text-gray-400 mb-2">AI Output to Verify</label>
          <textarea
            value={aiOutput}
            onChange={(e) => setAiOutput(e.target.value)}
            placeholder="Paste the AI-generated output you want to verify..."
            className="w-full h-48 px-4 py-3 bg-gray-900 border border-white/10 rounded-xl focus:border-sky-500 focus:outline-none resize-none"
          />
          <div className="text-right text-gray-500 text-sm mt-2">
            {aiOutput.length} characters
          </div>
        </div>

        {/* Context (Optional) */}
        <div className="mb-6">
          <label className="block text-sm text-gray-400 mb-2">Additional Context (Optional)</label>
          <input
            type="text"
            value={context}
            onChange={(e) => setContext(e.target.value)}
            placeholder="Any additional context about the AI output..."
            className="w-full px-4 py-3 bg-gray-900 border border-white/10 rounded-xl focus:border-sky-500 focus:outline-none"
          />
        </div>

        {/* Verify Button */}
        <button
          onClick={handleVerify}
          disabled={loading || !aiOutput.trim()}
          className="w-full py-4 bg-gradient-to-r from-sky-500 to-cyan-400 text-black font-semibold rounded-xl hover:shadow-lg hover:shadow-sky-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Verifying...
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Verify Output
            </>
          )}
        </button>

        {/* Results */}
        {result && (
          <div className="mt-8 p-6 bg-gray-900 border border-sky-500/30 rounded-xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Verification Result</h3>
              <button
                onClick={() => setResult(null)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-gray-400 text-sm mb-1">Certificate ID</div>
                <div className="font-mono text-sky-400 text-lg">{result.certificateId}</div>
              </div>
              <div>
                <div className="text-gray-400 text-sm mb-1">Reliability Score</div>
                <div className={`text-2xl font-bold ${
                  result.reliabilityScore.startsWith('A') ? 'text-green-400' :
                  result.reliabilityScore.startsWith('B') ? 'text-yellow-400' : 'text-red-400'
                }`}>{result.reliabilityScore}</div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-white/10">
              <div className="text-gray-400 text-sm mb-2">Key Findings</div>
              <ul className="space-y-2">
                {result.reasoningChain.keyFindings.map((finding: string, i: number) => (
                  <li key={i} className="flex items-center gap-2 text-gray-300">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {finding}
                  </li>
                ))}
              </ul>
            </div>

            <button className="mt-6 w-full py-3 border border-white/20 rounded-xl hover:bg-white/5">
              View Full Certificate
            </button>
          </div>
        )}
      </div>
    </div>
  );
}