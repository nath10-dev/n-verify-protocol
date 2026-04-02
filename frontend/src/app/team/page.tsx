'use client';

const team = [
  { name: 'Alex Chen', role: 'CEO & Founder', bio: 'Former AI researcher at DeepMind' },
  { name: 'Sarah Johnson', role: 'CTO', bio: 'Ex-Google, 15+ years in AI/ML' },
  { name: 'Michael Park', role: 'VP Engineering', bio: 'Built verification systems at scale' },
  { name: 'Emily Davis', role: 'Head of Product', bio: 'Product leader with AI focus' },
  { name: 'James Wilson', role: 'Head of Research', bio: 'PhD in AI Safety, Stanford' },
  { name: 'Lisa Chen', role: 'Head of Operations', bio: 'Operations leader, ex-Stripe' }
];

export default function Team() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Team</h1>
          <p className="text-xl text-gray-400">The people building N-Verify</p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-12 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-sky-500 to-cyan-400 rounded-full flex items-center justify-center text-3xl font-bold text-black">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <div className="text-sky-400 text-sm mb-3">{member.role}</div>
                <p className="text-gray-400 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
          <p className="text-gray-400 mb-6">We're always looking for talented people.</p>
          <a href="/careers" className="inline-block px-6 py-3 bg-sky-500 text-black font-medium rounded-xl hover:bg-sky-400">
            View Open Positions
          </a>
        </div>
      </section>

      <footer className="py-8 bg-black border-t border-white/10 text-center text-gray-500">
        © 2026 N-Verify Protocol
      </footer>
    </div>
  );
}