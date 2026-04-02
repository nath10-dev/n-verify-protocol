'use client';

import { useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { name: 'Product', href: '/verify' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Docs', href: '/docs' },
  { name: 'Blog', href: '/blog' },
];

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-sky-500 to-cyan-400 rounded-lg" />
          <span className="text-xl font-bold">N-Verify</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link key={link.name} href={link.href} className="text-gray-400 hover:text-white transition-colors">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/login" className="text-gray-400 hover:text-white">Log in</Link>
          <Link href="/register" className="px-4 py-2 bg-sky-500 text-black font-medium rounded-lg hover:bg-sky-400 transition-colors">
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setMobileMenu(!mobileMenu)} className="md:hidden text-gray-400">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenu ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden bg-black border-t border-white/10">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map(link => (
              <Link key={link.name} href={link.href} className="block text-gray-400 hover:text-white">
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/10 space-y-4">
              <Link href="/login" className="block text-gray-400">Log in</Link>
              <Link href="/register" className="block w-full text-center px-4 py-2 bg-sky-500 text-black font-medium rounded-lg">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}