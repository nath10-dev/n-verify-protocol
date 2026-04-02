'use client';

export default function Cookies() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Cookie Policy</h1>
          <p className="text-gray-400">How we use cookies</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 pb-24">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">What Are Cookies</h2>
            <p className="text-gray-400">
              Cookies are small text files stored on your device. We use essential cookies to make 
              our site work and analytics cookies to understand how visitors use our site.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Types We Use</h2>
            <ul className="space-y-2 text-gray-400">
              <li>• Essential - Required for the site to work</li>
              <li>• Analytics - Help us understand site usage</li>
              <li>• Preferences - Remember your settings</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Managing Cookies</h2>
            <p className="text-gray-400">
              You can disable cookies in your browser settings. Note that some features may not work properly.
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