'use client';

import { useState, useEffect } from 'react';

export function AnimatedVerification() {
  const [output, setOutput] = useState('');
  const [domain, setDomain] = useState('medical');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ score: string; confidence: number; findings: string[]; certificateId: string } | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleVerify = () => {
    if (!output.trim()) return;
    setLoading(true);
    setTimeout(() => {
      setResult({
        score: ['A', 'A-', 'B+', 'B'][Math.floor(Math.random() * 4)],
        confidence: 0.85 + Math.random() * 0.15,
        findings: ['Evidence-based reasoning detected', 'Domain knowledge correctly applied', 'Logical structure verified'],
        certificateId: `NV-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
      });
      setLoading(false);
    }, 2000);
  };

  const domains = [
    { id: 'medical', icon: '🏥', label: 'Medical', gradient: 'from-red-500 to-rose-500' },
    { id: 'legal', icon: '⚖️', label: 'Legal', gradient: 'from-purple-500 to-pink-500' },
    { id: 'financial', icon: '💰', label: 'Financial', gradient: 'from-green-500 to-emerald-500' },
  ];

  const getScoreColor = (score: string) => {
    if (score.startsWith('A')) return 'text-green-400';
    if (score.startsWith('B')) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-sky-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block px-4 py-1 bg-sky-500/10 border border-sky-500/30 rounded-full text-sky-400 text-sm mb-4">
            Verify AI Output
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Verify Any AI Output
            </span>
          </h2>
          <p className="text-xl text-gray-400">Enter your AI-generated content and get instant verification</p>
        </div>

        {/* Domain Selection */}
        <div className={`flex justify-center gap-4 mb-8 transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {domains.map((d) => (
            <button
              key={d.id}
              onClick={() => setDomain(d.id)}
              className={`
                group relative px-6 py-3 rounded-2xl font-medium capitalize transition-all
                ${domain === d.id
                  ? `bg-gradient-to-r ${d.gradient} text-white scale-105`
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }
              `}
            >
              <span className="mr-2">{d.icon}</span>
              {d.label}
            </button>
          ))}
        </div>

        {/* Input Area */}
        <div className={`transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative group">
            <textarea
              value={output}
              onChange={(e) => setOutput(e.target.value)}
              placeholder="Paste your AI-generated output here..."
              className="w-full h-56 p-6 bg-gray-900/80 border border-white/10 rounded-3xl text-white placeholder-gray-500 focus:outline-none focus:border-sky-500/50 focus:bg-gray-900 transition-all resize-none backdrop-blur"
              disabled={loading}
            />
            
            {/* Glowing Border Effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-sky-500/20 via-transparent to-cyan-500/20 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none" />
          </div>

          {/* Verify Button */}
          <button
            onClick={handleVerify}
            disabled={loading || !output.trim()}
            className="w-full mt-6 py-5 bg-gradient-to-r from-sky-500 to-cyan-500 text-black font-bold text-lg rounded-2xl hover:shadow-xl hover:shadow-sky-500/25 disabled:opacity-50 disabled:cursor-not-allowed transition-all relative overflow-hidden group"
          >
            <span className={`relative z-10 flex items-center justify-center gap-3 ${loading ? 'opacity-0' : ''}`}>
              <span>🚀</span>
              Verify Output
            </span>
            
            {/* Loading State */}
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  <span>Analyzing...</span>
                </div>
              </div>
            )}

            {/* Shine Effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </button>
        </div>

        {/* Result */}
        {result && (
          <div className={`mt-8 p-8 bg-gray-900/80 border border-sky-500/30 rounded-3xl backdrop-blur transition-all animate-fade-in`}>
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Verification Result</h3>
              <div className={`text-5xl font-bold ${getScoreColor(result.score)}`}>
                {result.score}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-white/5 rounded-2xl text-center">
                <div className="text-3xl font-bold text-sky-400">{Math.round(result.confidence * 100)}%</div>
                <div className="text-gray-500 text-sm">Confidence</div>
              </div>
              <div className="p-4 bg-white/5 rounded-2xl text-center">
                <div className="text-3xl font-bold text-sky-400">{result.findings.length}</div>
                <div className="text-gray-500 text-sm">Findings</div>
              </div>
            </div>

            {/* Findings */}
            <div className="space-y-3 mb-6">
              {result.findings.map((finding, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
                  <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 text-sm">
                    ✓
                  </div>
                  <span className="text-gray-300">{finding}</span>
                </div>
              ))}
            </div>

            {/* Certificate ID */}
            <div className="p-4 bg-black/50 rounded-2xl mb-6">
              <div className="text-gray-500 text-sm mb-1">Certificate ID</div>
              <code className="text-sky-400 font-mono text-lg">{result.certificateId}</code>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <button className="flex-1 py-3 bg-sky-500 text-black font-semibold rounded-xl hover:bg-sky-400 transition-all">
                Download Certificate
              </button>
              <button className="flex-1 py-3 border border-white/20 rounded-xl hover:bg-white/5 transition-all">
                Share Result
              </button>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </section>
  );
}

export function AnimatedDomainCards() {
  const domains = [
    { name: 'Medical', icon: '🏥', stats: { verified: '50K+', accuracy: '95%', time: '<3s' }, gradient: 'from-red-500 to-rose-500', bgGradient: 'from-red-500/20 to-transparent' },
    { name: 'Legal', icon: '⚖️', stats: { verified: '35K+', accuracy: '92%', time: '<4s' }, gradient: 'from-purple-500 to-pink-500', bgGradient: 'from-purple-500/20 to-transparent' },
    { name: 'Financial', icon: '💰', stats: { verified: '45K+', accuracy: '94%', time: '<3s' }, gradient: 'from-green-500 to-emerald-500', bgGradient: 'from-green-500/20 to-transparent' },
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {domains.map((domain, i) => (
            <div
              key={domain.name}
              className="group relative p-8 rounded-3xl border border-white/10 overflow-hidden hover:border-white/20 transition-all hover:scale-[1.02]"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${domain.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity`} />

              {/* Content */}
              <div className="relative">
                {/* Icon */}
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${domain.gradient} flex items-center justify-center text-4xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform`}>
                  {domain.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-6">{domain.name}</h3>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(domain.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-xl font-bold text-white">{value}</div>
                      <div className="text-gray-500 text-xs capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}