'use client';

const partners = [
  {
    name: 'OpenAI',
    logo: '🤖',
    description: 'AI model integration for advanced reasoning extraction',
    tier: 'Technology'
  },
  {
    name: 'Ethereum',
    logo: '⬡',
    description: 'Blockchain infrastructure for certificate storage',
    tier: 'Blockchain'
  },
  {
    name: 'Pinata',
    logo: '📌',
    description: 'IPFS storage for certificate metadata',
    tier: 'Storage'
  },
  {
    name: 'Infura',
    logo: '🔗',
    description: 'Ethereum RPC and API services',
    tier: 'Infrastructure'
  },
  {
    name: 'LangChain',
    logo: '🔗',
    description: 'AI reasoning chain processing',
    tier: 'Technology'
  },
  {
    name: 'Polygon',
    logo: '⬡',
    description: 'Layer 2 blockchain scaling',
    tier: 'Blockchain'
  }
];

const integrations = [
  { name: 'Slack', icon: '💬', description: 'Get verification notifications in Slack' },
  { name: 'Discord', icon: '💬', description: 'Bot commands for quick verifications' },
  { name: 'Zapier', icon: '⚡', description: 'Connect to 5000+ apps' },
  { name: 'Notion', icon: '📝', description: 'Sync certificates to Notion' },
  { name: 'Airtable', icon: '📊', description: 'Store results in Airtable' },
  { name: 'Salesforce', icon: '☁️', description: 'CRM integration' }
];

export default function Partners() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our
              <span className="block bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
                Partners
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-10">
              Building the future of AI verification together with industry leaders.
            </p>
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Technology Partners</h2>
            <p className="text-gray-400">Industry leaders powering our platform</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <div key={index} className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-sky-500/50 transition-colors">
                <div className="text-4xl mb-4">{partner.logo}</div>
                <h3 className="text-xl font-bold mb-2">{partner.name}</h3>
                <p className="text-gray-400 text-sm mb-3">{partner.description}</p>
                <span className="inline-block px-3 py-1 bg-sky-500/20 text-sky-400 text-xs rounded-full">
                  {partner.tier}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Integrations</h2>
            <p className="text-gray-400">Connect N-Verify with your existing tools</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="p-6 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4 hover:bg-white/10 transition-colors cursor-pointer">
                <div className="text-3xl">{integration.icon}</div>
                <div>
                  <h3 className="font-semibold">{integration.name}</h3>
                  <p className="text-gray-400 text-sm">{integration.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner */}
      <section className="py-24 bg-gradient-to-br from-sky-900 via-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Become a Partner</h2>
          <p className="text-xl text-gray-300 mb-10">
            Join our partner ecosystem and help shape the future of AI verification.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors">
              Apply Now
            </button>
            <button className="px-8 py-4 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-colors">
              View Partner Program
            </button>
          </div>
        </div>
      </section>

      {/* Types of Partnerships */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Partnership Tiers</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
              <div className="text-3xl mb-4">🥉</div>
              <h3 className="text-xl font-bold mb-3">Technology</h3>
              <p className="text-gray-400 mb-4">Technical integrations and API access</p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• API access</li>
                <li>• Technical documentation</li>
                <li>• Partner support</li>
                <li>• Co-marketing</li>
              </ul>
            </div>
            <div className="p-8 bg-sky-500/10 border border-sky-500 rounded-2xl">
              <div className="text-3xl mb-4">🥈</div>
              <h3 className="text-xl font-bold mb-3">Solution</h3>
              <p className="text-gray-400 mb-4">Joint solutions for customers</p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• All Technology benefits</li>
                <li>• Joint go-to-market</li>
                <li>• Priority support</li>
                <li>• Co-selling</li>
              </ul>
            </div>
            <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
              <div className="text-3xl mb-4">🥇</div>
              <h3 className="text-xl font-bold mb-3">Strategic</h3>
              <p className="text-gray-400 mb-4">Strategic alignment and investment</p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• All Solution benefits</li>
                <li>• Dedicated partner manager</li>
                <li>• Product roadmap input</li>
                <li>• Investment opportunities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-500">
          © 2026 N-Verify Protocol. All rights reserved.
        </div>
      </footer>
    </div>
  );
}