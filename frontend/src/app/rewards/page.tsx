'use client';

const levels = [
  { name: 'Bronze', discount: '5%', requirement: '10+ verifications/mo' },
  { name: 'Silver', discount: '10%', requirement: '100+ verifications/mo' },
  { name: 'Gold', discount: '20%', requirement: '500+ verifications/mo' },
  { name: 'Platinum', discount: '30%', requirement: '1K+ verifications/mo' }
];

export default function LoyaltyProgram() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Loyalty Rewards</h1>
          <p className="text-xl text-gray-400">Earn discounts as you verify more</p>
        </div>
      </section>

      <section className="py-12 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6">
            {levels.map((l, i) => (
              <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center">
                <h3 className="text-xl font-bold mb-2">{l.name}</h3>
                <div className="text-3xl font-bold text-sky-400 mb-2">{l.discount}</div>
                <div className="text-gray-400 text-sm">{l.requirement}</div>
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