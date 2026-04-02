'use client';

const steps = [
  { num: 1, title: 'Create Account', desc: 'Sign up for free' },
  { num: 2, title: 'Get API Key', desc: 'Generate your key' },
  { num: 3, title: 'Make Request', desc: 'Call our API' },
  { num: 4, title: 'Get Verified', desc: 'Receive results' }
];

export default function QuickStart() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Quick Start</h1>
          <p className="text-xl text-gray-400">Get started in 4 simple steps</p>
        </div>
      </section>

      <section className="py-12 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center gap-6 py-6 border-b border-white/10">
              <div className="w-12 h-12 bg-sky-500 text-black font-bold rounded-full flex items-center justify-center">
                {step.num}
              </div>
              <div>
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-gray-400">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="py-8 bg-black border-t border-white/10 text-center text-gray-500">
        © 2026 N-Verify Protocol
      </footer>
    </div>
  );
}