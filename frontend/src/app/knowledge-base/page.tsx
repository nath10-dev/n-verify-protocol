'use client';

const topics = [
  { title: 'Getting Started', articles: 12 },
  { title: 'API Reference', articles: 24 },
  { title: 'Best Practices', articles: 8 },
  { title: 'Troubleshooting', articles: 15 }
];

export default function KnowledgeBase() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Knowledge Base</h1>
          <p className="text-xl text-gray-400">Find answers to common questions</p>
        </div>
      </section>

      <section className="py-12 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {topics.map((t, i) => (
              <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-sky-500/30 cursor-pointer">
                <h3 className="text-xl font-bold mb-2">{t.title}</h3>
                <div className="text-gray-400">{t.articles} articles</div>
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