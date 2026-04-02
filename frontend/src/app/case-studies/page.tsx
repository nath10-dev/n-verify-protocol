'use client';

export default function CaseStudies() {
  const cases = [
    { company: 'MediHealth', industry: 'Healthcare', result: '99% accuracy in AI diagnoses' },
    { company: 'LegalTech Corp', industry: 'Legal', result: '50% faster document review' },
    { company: 'FinSecure', industry: 'Finance', result: '$2M saved in error prevention' }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Case Studies</h1>
          <p className="text-xl text-gray-400">See how companies use N-Verify</p>
        </div>
      </section>

      <section className="py-12 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-6">
            {cases.map((c, i) => (
              <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                <div className="font-bold text-lg">{c.company}</div>
                <div className="text-gray-400">{c.industry}</div>
                <div className="text-sky-400 mt-2">{c.result}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-8 bg-black border-t border-white/10 text-center text-gray-500">
        © 2026 N-Verify Protocol
      </footer>
    </div>
  );
}