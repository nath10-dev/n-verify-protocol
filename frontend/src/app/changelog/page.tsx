'use client';

const releases = [
  {
    version: '2.1.0',
    date: '2026-03-31',
    type: 'major',
    features: [
      'Added interactive demo page for trying N-Verify',
      'New Help center with FAQs and guides',
      'Launched API documentation page',
      'Added landing page with waitlist signup'
    ],
    improvements: [
      'Improved verification speed by 30%',
      'Enhanced certificate viewer UI'
    ]
  },
  {
    version: '2.0.0',
    date: '2026-03-25',
    type: 'major',
    features: [
      'Multi-domain support (Medical, Legal, Financial)',
      'NFT certificates on Ethereum',
      'Real-time analytics dashboard',
      'Team management with roles',
      'API key management'
    ],
    improvements: [
      'Complete UI redesign with dark theme',
      'New verification algorithm with 95% accuracy'
    ]
  },
  {
    version: '1.5.0',
    date: '2026-03-15',
    type: 'minor',
    features: [
      'Webhooks for verification events',
      'Bulk verification endpoint',
      'Certificate search and filtering'
    ],
    improvements: [
      'API rate limiting',
      'Better error messages'
    ]
  },
  {
    version: '1.0.0',
    date: '2026-03-01',
    type: 'major',
    features: [
      'Initial release',
      'Basic verification API',
      'User authentication',
      'Verification history'
    ]
  }
];

export default function Changelog() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Changelog</h1>
          <p className="text-xl text-gray-400">Latest updates and improvements</p>
        </div>
      </section>

      {/* Releases */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10" />

            {releases.map((release, i) => (
              <div key={i} className="relative pl-12 pb-12">
                {/* Dot */}
                <div className={`absolute left-2.5 w-3 h-3 rounded-full ${
                  release.type === 'major' ? 'bg-sky-500' : 'bg-gray-500'
                }`} />

                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-2xl font-bold">{release.version}</span>
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      release.type === 'major' 
                        ? 'bg-sky-500/20 text-sky-400' 
                        : 'bg-gray-500/20 text-gray-400'
                    }`}>
                      {release.type}
                    </span>
                    <span className="text-gray-500">{release.date}</span>
                  </div>

                  {release.features && (
                    <div className="mb-4">
                      <h3 className="text-sm font-semibold text-gray-400 mb-2">Features</h3>
                      <ul className="space-y-1">
                        {release.features.map((f, j) => (
                          <li key={j} className="flex items-center gap-2 text-gray-300">
                            <span className="text-green-400">+</span> {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {release.improvements && (
                    <div>
                      <h3 className="text-sm font-semibold text-gray-400 mb-2">Improvements</h3>
                      <ul className="space-y-1">
                        {release.improvements.map((imp, j) => (
                          <li key={j} className="flex items-center gap-2 text-gray-300">
                            <span className="text-sky-400">→</span> {imp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
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