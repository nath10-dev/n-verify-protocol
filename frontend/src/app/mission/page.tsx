'use client';

export default function Mission() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Mission</h1>
          <p className="text-xl text-gray-400">Why we exist</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 pb-24">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4">Trust in AI</h2>
            <p className="text-gray-400 text-lg">
              We believe AI should be verifiable. As AI becomes more integrated into critical decisions 
              in healthcare, law, and finance, there must be a way to verify the reliability of AI outputs.
            </p>
          </div>

          <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4">Transparency</h2>
            <p className="text-gray-400 text-lg">
              Every AI decision should be traceable. We provide the infrastructure for transparent AI 
              that can be audited and verified.
            </p>
          </div>

          <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4">Accessibility</h2>
            <p className="text-gray-400 text-lg">
              AI verification should be available to everyone. We build tools that are easy to use 
              and accessible to organizations of all sizes.
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