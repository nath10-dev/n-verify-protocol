'use client';

import { useState } from 'react';

const testimonials = [
  { quote: "N-Verify changed how we trust AI in healthcare.", author: "Dr. Sarah Chen", role: "CMO, MediHealth" },
  { quote: "The API is incredibly easy to integrate.", author: "James Liu", role: "CTO, FinTech Corp" },
  { quote: "Essential for any company using AI legally.", author: "Michael Ross", role: "Partner, Ross Law" }
];

export default function SocialProof() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-center mb-12">Trusted By Industry Leaders</h1>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-2xl">
                <div className="text-4xl text-sky-400 mb-4">"</div>
                <p className="text-lg mb-6">{t.quote}</p>
                <div>
                  <div className="font-bold">{t.author}</div>
                  <div className="text-gray-400 text-sm">{t.role}</div>
                </div>
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