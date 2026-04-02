'use client';

import { useState } from 'react';

export default function DomainLanding() {
  const [activeDomain, setActiveDomain] = useState('medical');

  const domains = {
    medical: {
      title: 'Medical AI Verification',
      description: 'Verify AI-generated medical diagnoses, treatment recommendations, and health information against authoritative medical knowledge bases.',
      icon: '🏥',
      features: [
        'Diagnostic accuracy verification',
        'Treatment recommendation validation',
        'Drug interaction checking',
        'Clinical guideline compliance',
        'Medical literature references'
      ],
      stats: { verifications: '50K+', accuracy: '95%', time: '<3s' }
    },
    legal: {
      title: 'Legal AI Verification',
      description: 'Ensure AI-generated legal documents, contracts, and advice meet professional standards and regulatory requirements.',
      icon: '⚖️',
      features: [
        'Contract analysis & validation',
        'Regulatory compliance checking',
        'Precedent matching',
        'Risk assessment verification',
        'Legal citation verification'
      ],
      stats: { verifications: '35K+', accuracy: '92%', time: '<4s' }
    },
    financial: {
      title: 'Financial AI Verification',
      description: 'Validate AI-generated financial advice, investment recommendations, and economic analyses against market data.',
      icon: '💰',
      features: [
        'Investment strategy validation',
        'Risk assessment verification',
        'Regulatory compliance',
        'Market data cross-reference',
        'Fraud detection support'
      ],
      stats: { verifications: '45K+', accuracy: '94%', time: '<3s' }
    }
  };

  const domain = domains[activeDomain as keyof typeof domains];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex justify-center gap-4 mb-8">
              {Object.entries(domains).map(([key, d]) => (
                <button
                  key={key}
                  onClick={() => setActiveDomain(key)}
                  className={`px-6 py-3 rounded-xl font-medium transition-colors ${
                    activeDomain === key
                      ? 'bg-sky-500 text-black'
                      : 'bg-white/10 text-gray-400 hover:bg-white/20'
                  }`}
                >
                  <span className="mr-2">{d.icon}</span>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </button>
              ))}
            </div>
            
            <h1 className="text-5xl font-bold mb-6">{domain.title}</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">{domain.description}</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-sky-400">{domain.stats.verifications}</div>
              <div className="text-gray-500">Verifications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-sky-400">{domain.stats.accuracy}</div>
              <div className="text-gray-500">Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-sky-400">{domain.stats.time}</div>
              <div className="text-gray-500">Avg. Time</div>
            </div>
          </div>

          <div className="text-center">
            <button className="px-8 py-4 bg-sky-500 text-black font-semibold rounded-full hover:bg-sky-400">
              Start Verifying {activeDomain.charAt(0).toUpperCase() + activeDomain.slice(1)}
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-2 gap-6">
            {domain.features.map((feature, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-white/5 rounded-xl">
                <span className="text-sky-400">✓</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}