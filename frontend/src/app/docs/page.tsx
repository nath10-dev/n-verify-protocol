'use client';

import { useState } from 'react';

const sections = [
  { id: 'getting-started', title: 'Getting Started' },
  { id: 'authentication', title: 'Authentication' },
  { id: 'verification', title: 'Verification API' },
  { id: 'validators', title: 'Validators' },
  { id: 'certificates', title: 'Certificates' },
  { id: 'errors', title: 'Error Codes' }
];

export default function Docs() {
  const [activeSection, setActiveSection] = useState('getting-started');

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-white">N-Verify</span>
          </a>
          <div className="flex items-center gap-4">
            <a href="/docs" className="text-sky-400">Docs</a>
            <a href="/api" className="text-gray-400 hover:text-white">API Reference</a>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 border-r border-white/10 p-6 hidden lg:block sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
          <nav className="space-y-1">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={() => setActiveSection(section.id)}
                className={`block py-2 px-4 rounded-lg transition-colors ${
                  activeSection === section.id
                    ? 'bg-sky-500/20 text-sky-400'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {section.title}
              </a>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <main className="flex-1 p-8 max-w-4xl">
          <section id="getting-started" className="mb-16">
            <h1 className="text-4xl font-bold text-white mb-6">Getting Started</h1>
            <p className="text-gray-400 mb-8">
              Welcome to the N-Verify Protocol API. This guide will help you integrate AI verification into your applications.
            </p>

            <div className="bg-gray-900 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">Quick Start</h3>
              <pre className="text-gray-300 text-sm overflow-x-auto">
{`# Install the SDK
npm install @nverify/sdk

# Initialize
import { NVerify } from '@nverify/sdk';

const client = new NVerify('YOUR_API_KEY');

# Verify an AI output
const result = await client.verify({
  domain: 'medical',
  aiOutput: 'Your AI diagnosis output here'
});

console.log(result.certificateId);`}
              </pre>
            </div>
          </section>

          <section id="authentication" className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">Authentication</h2>
            <p className="text-gray-400 mb-4">
              All API requests require authentication using an API key. Include your key in the Authorization header:
            </p>
            <div className="bg-gray-900 rounded-xl p-4">
              <code className="text-sky-400">Authorization: Bearer YOUR_API_KEY</code>
            </div>
          </section>

          <section id="verification" className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">Verification API</h2>
            
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white mb-3">POST /api/v1/verify</h3>
              <p className="text-gray-400 mb-4">Create a new verification request.</p>
              
              <div className="bg-gray-900 rounded-xl p-4 mb-4">
                <h4 className="text-sm text-gray-500 mb-2">Request Body</h4>
                <pre className="text-gray-300 text-sm">
{`{
  "domain": "medical | legal | financial",
  "aiOutput": "string",
  "context": "optional context"
}`}
                </pre>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-4">
                <h4 className="text-sm text-gray-500 mb-2">Response</h4>
                <pre className="text-gray-300 text-sm">
{`{
  "certificateId": "NV-ABC123",
  "reliabilityScore": "A",
  "reasoningChain": {...},
  "verificationDetails": {...}
}`}
                </pre>
              </div>
            </div>
          </section>

          <section id="validators" className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">Validators</h2>
            <p className="text-gray-400 mb-4">
              Become a validator by staking tokens. Validators verify AI outputs and earn rewards.
            </p>
            
            <div className="bg-gray-900 rounded-xl p-4">
              <h4 className="text-sm text-gray-500 mb-2">Requirements</h4>
              <ul className="text-gray-300 text-sm list-disc list-inside">
                <li>100 NVFY tokens staked</li>
                <li>Expertise in your domain</li>
                <li>Good reputation score</li>
              </ul>
            </div>
          </section>

          <section id="certificates" className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">Certificates</h2>
            <p className="text-gray-400 mb-4">
              Each verification generates a certificate with cryptographic proof. Certificates include:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>• Unique certificate ID</li>
              <li>• Reliability score (A-F)</li>
              <li>• Reasoning chain analysis</li>
              <li>• Blockchain tx hash</li>
              <li>• IPFS metadata hash</li>
            </ul>
          </section>

          <section id="errors" className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">Error Codes</h2>
            
            <div className="space-y-4">
              <div className="bg-gray-900 rounded-xl p-4">
                <code className="text-sky-400">400</code>
                <span className="text-white ml-2">Bad Request</span>
                <p className="text-gray-500 text-sm mt-1">Invalid parameters or missing required fields</p>
              </div>
              <div className="bg-gray-900 rounded-xl p-4">
                <code className="text-sky-400">401</code>
                <span className="text-white ml-2">Unauthorized</span>
                <p className="text-gray-500 text-sm mt-1">Invalid or missing API key</p>
              </div>
              <div className="bg-gray-900 rounded-xl p-4">
                <code className="text-sky-400">429</code>
                <span className="text-white ml-2">Rate Limited</span>
                <p className="text-gray-500 text-sm mt-1">Too many requests</p>
              </div>
              <div className="bg-gray-900 rounded-xl p-4">
                <code className="text-sky-400">500</code>
                <span className="text-white ml-2">Server Error</span>
                <p className="text-gray-500 text-sm mt-1">Internal server error</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}