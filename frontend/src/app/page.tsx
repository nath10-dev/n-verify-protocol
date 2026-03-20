import { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>N-Verify Protocol | Decentralized AI Verification</title>
        <meta name="description" content="Cryptographic verification for AI reasoning chains" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230ea5e9' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-sky-500/20 text-sky-400 text-sm font-medium mb-8">
                <span className="w-2 h-2 bg-sky-400 rounded-full mr-2 animate-pulse"></span>
                Now Live on Testnet
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                Trust in the
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300"> Age of AI</span>
              </h1>
              
              <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
                N-Verify Protocol transforms AI outputs into cryptographically auditable 
                reasoning chains. Built for healthcare, legal, and financial industries.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/register"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-slate-900 bg-sky-400 rounded-lg hover:bg-sky-300 transition-colors"
                >
                  Get Started Free
                </a>
                <a
                  href="/demo"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border border-slate-600 rounded-lg hover:bg-slate-800 transition-colors"
                >
                  Watch Demo
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="py-20 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700">
                <div className="w-12 h-12 bg-sky-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Verified Reasoning</h3>
                <p className="text-slate-400">
                  Extract and verify AI reasoning chains against domain knowledge bases for medical, legal, and financial accuracy.
                </p>
              </div>
              
              <div className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700">
                <div className="w-12 h-12 bg-sky-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Cryptographic Proof</h3>
                <p className="text-slate-400">
                  Generate tamper-proof certificates with Merkle tree proofs, stored on blockchain for permanent auditability.
                </p>
              </div>
              
              <div className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700">
                <div className="w-12 h-12 bg-sky-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Fast Verification</h3>
                <p className="text-slate-400">
                  Complete verification in under 5 seconds with distributed validator network and consensus engine.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="py-16 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-sky-400 mb-2">3</div>
                <div className="text-slate-400">Domains</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-sky-400 mb-2">&lt;5s</div>
                <div className="text-slate-400">Verification Time</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-sky-400 mb-2">100+</div>
                <div className="text-slate-400">Concurrent Requests</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-sky-400 mb-2">85%+</div>
                <div className="text-slate-400">Accuracy</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to verify your AI?
            </h2>
            <p className="text-slate-300 mb-8">
              Join the future of AI trust infrastructure. Start verifying your AI outputs today.
            </p>
            <a
              href="/register"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-slate-900 bg-sky-400 rounded-lg hover:bg-sky-300 transition-colors"
            >
              Get Started Now
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="py-8 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-slate-400 mb-4 md:mb-0">
                © 2024 N-Verify Protocol. All rights reserved.
              </div>
              <div className="flex gap-6">
                <a href="#" className="text-slate-400 hover:text-sky-400 transition-colors">Privacy</a>
                <a href="#" className="text-slate-400 hover:text-sky-400 transition-colors">Terms</a>
                <a href="#" className="text-slate-400 hover:text-sky-400 transition-colors">Docs</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Home;
