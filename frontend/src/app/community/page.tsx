'use client';

export default function Community() {
  const channels = [
    { name: 'Discord', members: '5K+', icon: '💬' },
    { name: 'Twitter', followers: '10K+', icon: '🐦' },
    { name: 'GitHub', stars: '500+', icon: '⭐' },
    { name: 'LinkedIn', members: '3K+', icon: '💼' }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Join Our Community</h1>
          <p className="text-xl text-gray-400">Connect with other N-Verify users</p>
        </div>
      </section>

      <section className="py-12 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6">
            {channels.map((c, i) => (
              <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center">
                <div className="text-3xl mb-2">{c.icon}</div>
                <h3 className="font-bold">{c.name}</h3>
                <div className="text-gray-400">{c.members || c.followers}</div>
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