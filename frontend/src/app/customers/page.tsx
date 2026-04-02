'use client';

const logos = [
  { name: 'TechCorp', icon: '🏢' },
  { name: 'MediAI', icon: '🏥' },
  { name: 'LegalFlow', icon: '⚖️' },
  { name: 'FinSecure', icon: '💰' },
  { name: 'DataDriven', icon: '📊' },
  { name: 'CloudTech', icon: '☁️' }
];

const testimonials = [
  {
    quote: "N-Verify has transformed how we validate AI-generated medical diagnoses. The reliability scores give our doctors confidence in AI-assisted decisions.",
    author: 'Dr. Sarah Chen',
    role: 'Chief Medical Officer',
    company: 'MediAI Health'
  },
  {
    quote: "We needed a way to verify AI legal documents before filing. N-Verify's domain-specific analysis caught critical errors that would have been costly.",
    author: 'Michael Ross',
    role: 'Partner',
    company: 'Ross & Associates'
  },
  {
    quote: "The API integration was seamless. Within a day, we had N-Verify working with our existing workflow. The ROI was immediate.",
    author: 'James Liu',
    role: 'CTO',
    company: 'FinSecure'
  }
];

export default function Customers() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Trusted by Industry Leaders</h1>
          <p className="text-xl text-gray-400">Companies worldwide rely on N-Verify for AI verification</p>
        </div>
      </section>

      {/* Logos */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-gray-500 mb-8">POWERING INNOVATION AT</p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
            {logos.map((logo, i) => (
              <div key={i} className="text-center p-4">
                <div className="text-4xl mb-2">{logo.icon}</div>
                <div className="text-gray-400 font-medium">{logo.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: '500+', label: 'Enterprise Customers' },
              { value: '2M+', label: 'Verifications' },
              { value: '99.9%', label: 'Uptime' },
              { value: '50+', label: 'Integrations' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold text-sky-400 mb-2">{stat.value}</div>
                <div className="text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                <div className="text-4xl mb-4">"</div>
                <p className="text-gray-300 mb-6">{t.quote}</p>
                <div>
                  <div className="font-bold">{t.author}</div>
                  <div className="text-gray-500 text-sm">{t.role}, {t.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Join Our Customers</h2>
          <p className="text-gray-400 mb-6">Start verifying your AI outputs today.</p>
          <div className="flex justify-center gap-4">
            <a href="/register" className="px-6 py-3 bg-sky-500 text-black font-medium rounded-xl hover:bg-sky-400">
              Get Started
            </a>
            <a href="/contact" className="px-6 py-3 border border-white/20 rounded-xl hover:bg-white/5">
              Contact Sales
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-black border-t border-white/10 text-center text-gray-500">
        © 2026 N-Verify Protocol
      </footer>
    </div>
  );
}