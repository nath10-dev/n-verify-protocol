'use client';

import { useState } from 'react';

const demoOutputs = {
  medical: "Based on the patient's symptoms of fever, cough, and shortness of breath, along with elevated white blood cell count and chest X-ray showing infiltrates in the lower lobes, this appears to be community-acquired pneumonia. Recommended treatment includes a 5-day course of amoxicillin-clavulanate 875mg twice daily, with follow-up in 48-72 hours to assess response.",
  legal: "This contract constitutes a legally binding agreement between the parties. Under applicable state law, the statute of limitations for breach of contract claims is four years from the date of breach. The arbitration clause requires all disputes to be resolved through binding arbitration in accordance with AAA rules.",
  financial: "Based on your stated risk tolerance of moderate, investment horizon of 20 years, and goal of retirement savings, a diversified portfolio of 60% equities and 40% bonds is recommended. This allocation has historically provided average annual returns of 7-8% with moderate volatility."
};

export default function Demo() {
  const [domain, setDomain] = useState('medical');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const loadDemo = (d: string) => {
    setDomain(d);
    setOutput(demoOutputs[d as keyof typeof demoOutputs]);
  };

  const handleVerify = () => {
    if (!output.trim()) return;
    setLoading(true);
    setTimeout(() => {
      setResult({
        certificateId: `NV-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
        reliabilityScore: ['A', 'A-', 'B+', 'B'][Math.floor(Math.random() * 4)],
        confidence: 0.85 + Math.random() * 0.1,
        findings: [
          'Evidence-based reasoning detected',
          'Domain-specific knowledge applied',
          'Logical conclusion reached'
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
          <div className="inline-block px-4 py-1 bg-sky-500/20 text-sky-400 rounded-full text-sm mb-4">
            ✨ Try it free
          </div>
          <h1 className="text-4xl font-bold mb-4">Try N-Verify Demo</h1>
          <p className="text-gray-400">
            Experience AI verification instantly. No signup required.
          </p>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          {/* Domain Selection */}
          <div className="flex justify-center gap-4 mb-8">
            {Object.keys(demoOutputs).map(d => (
              <button
                key={d}
                onClick={() => loadDemo(d)}
                className={`px-6 py-3 rounded-xl font-medium capitalize transition-colors ${
                  domain === d
                    ? 'bg-sky-500 text-black'
                    : 'bg-white/10 text-gray-400 hover:bg-white/20'
                }`}
              >
                {d}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="mb-6">
            <label className="block text-sm text-gray-400 mb-2">AI Output to Verify</label>
            <textarea
              value={output}
              onChange={(e) => setOutput(e.target.value)}
              placeholder="Paste an AI-generated output or use a demo..."
              className="w-full h-48 px-4 py-3 bg-gray-900 border border-white/10 rounded-xl focus:border-sky-500 focus:outline-none resize-none"
            />
          </div>

          <button
            onClick={handleVerify}
            disabled={loading || !output.trim()}
            className="w-full py-4 bg-gradient-to-r from-sky-500 to-cyan-400 text-black font-semibold rounded-xl hover:shadow-lg hover:shadow-sky-500/25 disabled:opacity-50"
          >
            {loading ? 'Analyzing...' : 'Verify Output'}
          </button>

          {/* Result */}
          {result && (
            <div className="mt-8 p-6 bg-gray-900 border border-sky-500/30 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Verification Result</h3>
                <span className={`text-2xl font-bold ${
                  result.reliabilityScore.startsWith('A') ? 'text-green-400' : 'text-yellow-400'
                }`}>
                  {result.reliabilityScore}
                </span>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="p-3 bg-white/5 rounded-lg text-center">
                  <div className="text-2xl font-bold text-sky-400">{(result.confidence * 100).toFixed(0)}%</div>
                  <div className="text-gray-500 text-sm">Confidence</div>
                </div>
                <div className="p-3 bg-white/5 rounded-lg text-center">
                  <div className="text-2xl font-bold text-sky-400">{result.findings.length}</div>
                  <div className="text-gray-500 text-sm">Findings</div>
                </div>
                <div className="p-3 bg-white/5 rounded-lg text-center">
                  <div className="text-2xl font-bold text-sky-400">&lt;3s</div>
                  <div className="text-gray-500 text-sm">Time</div>
                </div>
              </div>

              <div className="space-y-2">
                {result.findings.map((f: string, i: number) => (
                  <div key={i} className="flex items-center gap-2 text-gray-300">
                    <span className="text-green-400">✓</span> {f}
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-white/10">
                <code className="text-sky-400 font-mono text-sm">{result.certificateId}</code>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-8">What You'll Get</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '📊', title: 'Reliability Score', desc: 'Get an A-F rating based on evidence quality' },
              { icon: '🔍', title: 'Reasoning Analysis', desc: 'See how the AI reached its conclusions' },
              { icon: '📜', title: 'Certificate', desc: 'Download a verifiable proof document' }
            ].map((item, i) => (
              <div key={i} className="text-center p-6 bg-white/5 rounded-xl">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}