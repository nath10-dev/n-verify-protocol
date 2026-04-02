'use client';

export default function Sitemap() {
  const links = {
    Product: ['/verify', '/demo', '/pricing', '/integrations', '/features'],
    Company: ['/about', '/team', '/careers', '/contact', '/press'],
    Resources: ['/docs', '/api-docs', '/blog', '/changelog', '/status'],
    Legal: ['/terms', '/privacy', '/cookies', '/security', '/gdpr'],
    Account: ['/login', '/register', '/dashboard', '/settings', '/billing']
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-12">Sitemap</h1>
          <div className="grid md:grid-cols-5 gap-8">
            {Object.entries(links).map(([category, items]) => (
              <div key={category}>
                <h2 className="font-bold mb-4 text-sky-400">{category}</h2>
                <ul className="space-y-2">
                  {items.map((link, i) => (
                    <li key={i}>
                      <a href={link} className="text-gray-400 hover:text-white text-sm">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
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