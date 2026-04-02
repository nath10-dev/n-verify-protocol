'use client';

import { useState } from 'react';

export default function PrivacyNew() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-400">Last updated: March 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 pb-24">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
            <p className="text-gray-400">
              We collect minimal data necessary for verification services. We do not store the content of AI outputs 
              you verify - only the verification results and metadata.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">2. How We Use Your Data</h2>
            <p className="text-gray-400">
              Your data is used solely to provide verification services. We never sell or share your data with third parties 
              for marketing purposes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">3. Data Security</h2>
            <p className="text-gray-400">
              All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We implement industry-standard 
              security measures to protect your information.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">4. Your Rights</h2>
            <p className="text-gray-400">
              You have the right to access, delete, or export your data at any time. Contact us at privacy@n-verify.com 
              to exercise these rights.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">5. Contact Us</h2>
            <p className="text-gray-400">
              Questions about this policy? Contact us at privacy@n-verify.com
            </p>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-black border-t border-white/10 text-center text-gray-500">
        © 2026 N-Verify Protocol
      </footer>
    </div>
  );
}