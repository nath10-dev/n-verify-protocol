'use client';

export default function Whitepaper() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Whitepaper</h1>
          <p className="text-xl text-gray-400">Technical deep dive into N-Verify Protocol</p>
        </div>
      </section>

      <section className="py-12 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4">Abstract</h2>
            <p className="text-gray-400 mb-6">
              This whitepaper describes N-Verify, a decentralized protocol for verifying AI outputs 
              across medical, legal, and financial domains.
            </p>
            <button className="px-6 py-3 bg-sky-500 text-black rounded-xl hover:bg-sky-400">
              Download PDF (2.5 MB)
            </button>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-black border-t border-white/10 text-center text-gray-500">
        © 2026 N-Verify Protocol
      </footer>
    </div>
  );
}