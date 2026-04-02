'use client';

const items = [
  { name: 'Whitepaper', icon: '📄', size: '2.5 MB' },
  { name: 'Brand Assets', icon: '🎨', size: '15 MB' },
  { name: 'API Docs', icon: '📚', size: '1.2 MB' },
  { name: 'Case Studies', icon: '📊', size: '3.8 MB' }
];

export default function DownloadsCenter() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Downloads</h1>
          <p className="text-xl text-gray-400">Resources and documents</p>
        </div>
      </section>

      <section className="py-12 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {items.map((item, i) => (
              <button key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl text-left hover:border-sky-500/30">
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <div className="font-bold">{item.name}</div>
                    <div className="text-gray-400 text-sm">{item.size}</div>
                  </div>
                </div>
              </button>
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