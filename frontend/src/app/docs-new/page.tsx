'use client';

import { useState } from 'react';

const sections = [
  { id: 'getting-started', title: 'Getting Started', items: ['Quick Start', 'Installation', 'First Verification'] },
  { id: 'api', title: 'API Reference', items: ['Authentication', 'Endpoints', 'Rate Limits'] },
  { id: 'guides', title: 'Guides', items: ['Web Integration', 'Mobile SDK', 'CLI Usage'] },
  { id: 'sdk', title: 'SDKs', items: ['JavaScript', 'Python', 'Go', 'Rust'] }
];

export default function DocsNew() {
  const [activeSection, setActiveSection] = useState('getting-started');

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <section className="pt-24 pb-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Documentation</h1>
          <p className="text-gray-400">Everything you need to integrate N-Verify</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-12">
            {/* Sidebar */}
            <div className="w-64 shrink-0">
              <nav className="sticky top-24 space-y-6">
                {sections.map(section => (
                  <div key={section.id}>
                    <h3 className="font-bold mb-3 text-sky-400">{section.title}</h3>
                    <ul className="space-y-2">
                      {section.items.map((item, i) => (
                        <li key={i}>
                          <button className="text-gray-400 hover:text-white text-sm">
                            {item}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>
            </div>

            {/* Main */}
            <div className="flex-1">
              <div className="prose prose-invert max-w-none">
                <h2>Getting Started</h2>
                <p className="text-gray-400">
                  Welcome to N-Verify! This guide will help you get started with AI verification.
                </p>

                <h3>Quick Start</h3>
                <pre className="p-4 bg-gray-900 rounded-xl text-sm overflow-x-auto">
{`# Install the CLI
npm install -g nverify-cli

# Verify an AI output
nverify verify "Your AI output here" --domain=medical`}
                </pre>

                <h3>API Usage</h3>
                <pre className="p-4 bg-gray-900 rounded-xl text-sm overflow-x-auto">
{`curl -X POST https://api.n-verify.com/v1/verify \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"output": "AI output", "domain": "medical"}'`}
                </pre>

                <h2>API Reference</h2>
                <p className="text-gray-400">
                  Full API documentation with all endpoints, parameters, and responses.
                </p>
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