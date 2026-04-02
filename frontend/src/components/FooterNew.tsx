'use client';

import Link from 'next/link';

const footerLinks = {
  Product: ['/verify', '/pricing', '/integrations', '/features', '/demo'],
  Company: ['/about', '/team', '/careers', '/press', '/contact'],
  Resources: ['/docs', '/api-docs', '/blog', '/changelog', '/status'],
  Legal: ['/terms', '/privacy', '/cookies', '/security'],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-sky-500 to-cyan-400 rounded-lg" />
              <span className="text-xl font-bold">N-Verify</span>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              Decentralized AI verification for medical, legal, and financial domains.
            </p>
            <div className="flex gap-4">
              {['Twitter', 'GitHub', 'Discord'].map(social => (
                <a key={social} href="#" className="text-gray-400 hover:text-white text-sm">
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map(link => (
                  <li key={link}>
                    <Link href={link} className="text-gray-400 hover:text-white text-sm">
                      {link.replace('/', '').replace('-', ' ')}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2026 N-Verify Protocol. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/status" className="text-gray-500 hover:text-white text-sm">Status</Link>
            <Link href="/sitemap" className="text-gray-500 hover:text-white text-sm">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}