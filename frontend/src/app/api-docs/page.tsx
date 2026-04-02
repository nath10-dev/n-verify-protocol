'use client';

import { useState } from 'react';

const endpoints = [
  {
    method: 'POST',
    path: '/api/v1/verify',
    description: 'Verify an AI output',
    params: [
      { name: 'output', type: 'string', required: true, desc: 'The AI-generated text to verify' },
      { name: 'domain', type: 'string', required: true, desc: 'Domain: medical, legal, or financial' },
      { name: 'model', type: 'string', required: false, desc: 'AI model used (e.g., gpt-4)' }
    ],
    example: {
      request: { output: 'AI output text...', domain: 'medical' },
      response: { certificateId: 'NV-ABC123', score: 'A', confidence: 0.92 }
    }
  },
  {
    method: 'GET',
    path: '/api/v1/certificates/:id',
    description: 'Get certificate details',
    params: [
      { name: 'id', type: 'string', required: true, desc: 'Certificate ID' }
    ],
    example: {
      response: { id: 'NV-ABC123', score: 'A', domain: 'medical', timestamp: '2026-03-31' }
    }
  },
  {
    method: 'GET',
    path: '/api/v1/analytics',
    description: 'Get verification analytics',
    params: [],
    example: {
      response: { totalVerifications: 1250, averageScore: 'B+', domains: { medical: 500, legal: 350, financial: 400 } }
    }
  },
  {
    method: 'POST',
    path: '/api/v1/webhooks',
    description: 'Register a webhook',
    params: [
      { name: 'url', type: 'string', required: true, desc: 'Webhook URL' },
      { name: 'events', type: 'array', required: true, desc: 'Events to subscribe to' }
    ],
    example: {
      request: { url: 'https://yoursite.com/webhook', events: ['verification.complete'] },
      response: { id: 'wh_123', status: 'active' }
    }
  }
];

export default function APIDocs() {
  const [activeEndpoint, setActiveEndpoint] = useState(0);

  const getMethodColor = (method: string) => {
    switch(method) {
      case 'GET': return 'bg-green-500/20 text-green-400';
      case 'POST': return 'bg-blue-500/20 text-blue-400';
      case 'PUT': return 'bg-yellow-500/20 text-yellow-400';
      case 'DELETE': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <section className="pt-32 pb-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">API Documentation</h1>
          <p className="text-gray-400">Integrate N-Verify into your applications</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-8">
            {/* Sidebar */}
            <div className="w-64 shrink-0">
              <div className="sticky top-24 space-y-2">
                {endpoints.map((ep, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveEndpoint(i)}
                    className={`w-full text-left p-3 rounded-lg text-sm ${
                      activeEndpoint === i 
                        ? 'bg-sky-500/20 border border-sky-500/50' 
                        : 'bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    <span className={`inline-block px-2 py-0.5 rounded text-xs font-bold mr-2 ${getMethodColor(ep.method)}`}>
                      {ep.method}
                    </span>
                    <span className="text-gray-300">{ep.path}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              <div className="bg-gray-900 border border-white/10 rounded-xl p-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-3 py-1 rounded text-sm font-bold ${getMethodColor(endpoints[activeEndpoint].method)}`}>
                    {endpoints[activeEndpoint].method}
                  </span>
                  <code className="text-xl">{endpoints[activeEndpoint].path}</code>
                </div>
                <p className="text-gray-400">{endpoints[activeEndpoint].description}</p>
              </div>

              {/* Parameters */}
              <div className="bg-gray-900 border border-white/10 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-semibold mb-4">Parameters</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-gray-400 border-b border-white/10">
                        <th className="pb-2">Name</th>
                        <th className="pb-2">Type</th>
                        <th className="pb-2">Required</th>
                        <th className="pb-2">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {endpoints[activeEndpoint].params.map((param, i) => (
                        <tr key={i} className="border-b border-white/5">
                          <td className="py-2 font-mono text-sky-400">{param.name}</td>
                          <td className="py-2 text-gray-400">{param.type}</td>
                          <td className="py-2">{param.required ? <span className="text-red-400">Yes</span> : <span className="text-gray-500">No</span>}</td>
                          <td className="py-2 text-gray-400">{param.desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Example */}
              <div className="bg-gray-900 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Example</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-sm text-gray-400 mb-2">Request</div>
                    <pre className="p-4 bg-black rounded-lg text-sm overflow-x-auto">
{JSON.stringify(endpoints[activeEndpoint].example.request || endpoints[activeEndpoint].example, null, 2)}
                    </pre>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-2">Response</div>
                    <pre className="p-4 bg-black rounded-lg text-sm overflow-x-auto">
{JSON.stringify(endpoints[activeEndpoint].example.response, null, 2)}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-black border-t border-white/10 text-center text-gray-500">
        © 2026 N-Verify Protocol
      </footer>
    </div>
  );
}