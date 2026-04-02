'use client';

export default function GDPR() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">GDPR Compliance</h1>
          <p className="text-gray-400">Your data rights under GDPR</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 pb-24">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
            <p className="text-gray-400 mb-4">Under GDPR, you have the right to:</p>
            <ul className="space-y-2 text-gray-400">
              <li>• Access your personal data</li>
              <li>• Rectify inaccurate data</li>
              <li>• Erase your data ("right to be forgotten")</li>
              <li>• Restrict processing</li>
              <li>• Data portability</li>
              <li>• Object to processing</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">How We Comply</h2>
            <p className="text-gray-400">
              We implement appropriate technical and organizational measures to ensure GDPR compliance, 
              including data encryption, access controls, and regular audits.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Contact</h2>
            <p className="text-gray-400">
              To exercise your rights, contact us at gdpr@n-verify.com
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