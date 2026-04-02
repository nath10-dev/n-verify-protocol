'use client';

const policies = [
  {
    title: 'Data Protection',
    icon: '🔒',
    items: [
      'All data encrypted in transit (TLS 1.3)',
      'Data encrypted at rest (AES-256)',
      'No storage of AI input data',
      'GDPR and CCPA compliant',
      'Data retention policies'
    ]
  },
  {
    title: 'Infrastructure',
    icon: '🛡️',
    items: [
      'Cloud-native architecture',
      '99.9% uptime SLA',
      'DDoS protection',
      'Web application firewall',
      'Regular security audits'
    ]
  },
  {
    title: 'Access Control',
    icon: '🔑',
    items: [
      'Role-based access control',
      'Multi-factor authentication',
      'API key rotation',
      'IP allowlisting',
      'Session management'
    ]
  },
  {
    title: 'Compliance',
    icon: '✅',
    items: [
      'SOC 2 Type II certified',
      'ISO 27001 compliant',
      'HIPAA ready',
      'GDPR compliant',
      'Regular penetration testing'
    ]
  }
];

const certifications = [
  { name: 'SOC 2 Type II', icon: '🏆', desc: 'Security, Availability, Confidentiality' },
  { name: 'ISO 27001', icon: '📜', desc: 'Information Security Management' },
  { name: 'GDPR', icon: '🇪🇺', desc: 'Data Protection Regulation' },
  { name: 'CCPA', icon: '🇺🇸', desc: 'California Consumer Privacy Act' }
];

export default function Security() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Security</h1>
          <p className="text-xl text-gray-400">Your data is protected with enterprise-grade security</p>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-8">Certifications</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {certifications.map((cert, i) => (
              <div key={i} className="text-center p-4">
                <div className="text-4xl mb-2">{cert.icon}</div>
                <div className="font-bold">{cert.name}</div>
                <div className="text-gray-500 text-sm">{cert.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-12">Security Practices</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {policies.map((policy, i) => (
              <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{policy.icon}</span>
                  <h3 className="text-xl font-bold">{policy.title}</h3>
                </div>
                <ul className="space-y-3">
                  {policy.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-300">
                      <span className="text-sky-400">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Report */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Found a vulnerability?</h2>
          <p className="text-gray-400 mb-6">
            We take security seriously. If you find a vulnerability, please report it responsibly.
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-6 py-3 bg-sky-500 text-black font-medium rounded-xl hover:bg-sky-400">
              Report Vulnerability
            </button>
            <button className="px-6 py-3 border border-white/20 rounded-xl hover:bg-white/5">
              View Security Policy
            </button>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-black border-t border-white/10 text-center text-gray-500">
        © 2026 N-Verify Protocol
      </footer>
    </div>
  );
}