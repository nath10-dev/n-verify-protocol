'use client';

export default function Terms() {
  return (
    <div className="min-h-screen bg-black">
      <section className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
          
          <div className="prose prose-invert max-w-none text-gray-400 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p>By accessing and using N-Verify Protocol, you accept and agree to be bound by the terms and provision of this agreement.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
              <p>Permission is granted to temporarily use N-Verify Protocol for personal, non-commercial transitory viewing only.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Disclaimer</h2>
              <p>THE SERVICE IS PROVIDED "AS IS". N-VERIFY MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Limitations</h2>
              <p>N-VERIFY SHALL NOT BE LIABLE FOR ANY DAMAGES ARISING OUT OF OR IN ANY WAY CONNECTED WITH THE USE OF THE SERVICE.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Accuracy of Materials</h2>
              <p>The materials on N-Verify Protocol may include technical, typographical, or photographic errors.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Links</h2>
              <p>N-Verify has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Privacy</h2>
              <p>Your privacy is important to us. Please review our Privacy Policy.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Governing Law</h2>
              <p>These terms and conditions are governed by and construed in accordance with the laws of California.</p>
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