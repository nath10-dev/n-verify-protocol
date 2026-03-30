'use client';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-black">
      <section className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-none text-gray-400 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
              <p>We collect information you provide directly to us, including your name, email address, and wallet address when you create an account.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Information</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>To provide, maintain, and improve our services</li>
                <li>To process your verification requests</li>
                <li>To communicate with you about our services</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Information Sharing</h2>
              <p>We do not sell your personal information. We may share information with service providers who assist us in operating our services.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
              <p>We implement appropriate technical and organizational security measures to protect your personal information.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Your Rights</h2>
              <p>You have the right to access, correct, or delete your personal information. Contact us to exercise these rights.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Changes to Policy</h2>
              <p>We may update this privacy policy from time to time. We will notify you of any material changes.</p>
            </section>

            <p className="text-sm text-gray-500">Last updated: March 28, 2026</p>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-500">
          © 2026 N-Verify Protocol. All rights reserved.
        </div>
      </footer>
    </div>
  );
}