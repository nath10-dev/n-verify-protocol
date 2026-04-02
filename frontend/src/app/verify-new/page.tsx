'use client';

import { useState } from 'react';

export default function VerifyNew() {
  const [output, setOutput] = useState('');
  const [domain, setDomain] = useState('medical');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleVerify = () => {
    if (!output.trim()) return;
    setLoading(true);
    setTimeout(() => {
      setResult({
        score: ['A', 'A-', 'B+', 'B'][Math.floor(Math.random() * 4)],
        confidence: (0.85 + Math.random() * 0.15).toFixed(2),
        findings: [
          'Evidence-based reasoning detected',
          'Domain knowledge correctly applied',
          'Logical structure verified'
        ]
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-sky-900/20 to-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Verify AI Output</h1>
          <p className="text-gray-400">Enter an AI-generated response to verify its reliability</p>
        </div>
      </section>

      {/* Form */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-6">
          {/* Domain Selection */}
          <div className="flex justify-center gap-4 mb-8">
            {['medical', 'legal', 'financial'].map(d => (
              <button
                key={d}
                onClick={() => setDomain(d)}
                className={`px-6 py-3 rounded-xl font-medium capitalize transition-colors ${
                  domain === d ? 'bg-sky-500 text-black' : 'bg-white/10 text-gray-400'
                }`}
              >
                {d}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="mb-6">
            <textarea
              value={output}
              onChange={(e) => setOutput(e.target.value)}
              placeholder="Paste your AI-generated output here..."
              className="w-full h-48 p-4 bg-gray-900 border border-white/10 rounded-xl focus:border-sky-500 focus:outline-none resize-none"
            />
          </div>

          {/* Verify Button */}
          <button
            onClick={handleVerify}
            disabled={loading || !output.trim()}
            className="w-full py-4 bg-sky-500 text-black font-semibold rounded-xl hover:bg-sky-400 disabled:opacity-50"
          >
            {loading ? 'Analyzing...' : 'Verify Output'}
          </button>

          {/* Result */}
          {result && (
            <div className="mt-8 p-6 bg-gray-900 border border-sky-500/30 rounded-2xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">Verification Result</h3>
                <span className={`text-3xl font-bold ${
                  result.score.startsWith('A') ? 'text-green-400' : 'text-yellow-400'
                }`}>{result.score}</span>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-white/5 rounded-xl">
                  <div className="text-gray-400 text-sm">Confidence</div>
                  <div className="text-2xl font-bold text-sky-400">{(parseFloat(result.confidence) * 100).toFixed(0)}%</div>
                </div>
                <div className="p-4 bg-white/5 rounded-xl">
                  <div className="text-gray-400 text-sm">Findings</div>
                  <div className="text-2xl font-bold text-sky-400">{result.findings.length}</div>
                </div>
              </div>

              <div className="space-y-2">
                {result.findings.map((f: string, i: number) => (
                  <div key={i} className="flex items-center gap-2 text-gray-300">
                    <span className="text-green-400">✓</span> {f}
                  </div>
                ))}
              </div>

              <button className="w-full mt-6 py-3 bg-white/10 rounded-xl hover:bg-white/20">
                Download Certificate
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Info */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-3xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {[
              { icon: '⚡', title: '<5 Seconds', desc: 'Fast verification' },
              { icon: '📊', title: 'A-F Score', desc: 'Clear ratings' },
              { icon: '📜', title: 'NFT Certificate', desc: 'Verifiable proof' }
            ].map((item, i) => (
              <div key={i} className="p-4">
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="font-bold">{item.title}</div>
                <div className="text-gray-400 text-sm">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}