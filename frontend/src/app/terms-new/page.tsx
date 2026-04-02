'use client';

export default function TermsNew() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-gray-400">Last updated: March 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 pb-24">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-400">
              By using N-Verify, you agree to these terms. If you don't agree, don't use our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">2. Use of Services</h2>
            <p className="text-gray-400">
              You may use N-Verify for lawful purposes only. You agree not to use the service 
              for any illegal or harmful activities.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">3. Intellectual Property</h2>
            <p className="text-gray-400">
              N-Verify and its content are owned by us. You may not copy, modify, or distribute 
              our intellectual property without permission.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">4. Limitation of Liability</h2>
            <p className="text-gray-400">
              We provide services "as is". We are not liable for any damages arising from 
              your use of our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">5. Contact</h2>
            <p className="text-gray-400">
              Questions? Contact us at legal@n-verify.com
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