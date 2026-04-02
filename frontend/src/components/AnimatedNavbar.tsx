'use client';

import { useState, useEffect } from 'react';

export function AnimatedFooter() {
  const footerSections = {
    Product: ['Verify', 'Pricing', 'Integrations', 'Features', 'Demo'],
    Company: ['About', 'Team', 'Careers', 'Press', 'Contact'],
    Resources: ['Docs', 'API', 'Blog', 'Changelog', 'Status'],
    Legal: ['Terms', 'Privacy', 'Cookies', 'Security'],
  };

  const socials = ['Twitter', 'GitHub', 'Discord', 'LinkedIn'];

  return (
    <footer className="bg-gray-900/50 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-xl" />
              <span className="text-2xl font-bold">N-Verify</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-xs">
              Decentralized AI verification for medical, legal, and financial domains.
            </p>
            <div className="flex gap-4">
              {socials.map((social, i) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-all"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerSections).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold mb-4 text-white">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href={`/${link.toLowerCase()}`}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 N-Verify Protocol. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="/status" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              All systems operational
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function AnimatedNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Product', href: '/verify' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Docs', href: '/docs' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <div className="w-9 h-9 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-lg" />
          <span className="text-xl font-bold">N-Verify</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-400 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-500 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a href="/login" className="text-gray-400 hover:text-white transition-colors">
            Log in
          </a>
          <a
            href="/register"
            className="px-5 py-2 bg-sky-500 text-black font-medium rounded-lg hover:bg-sky-400 transition-all hover:shadow-lg hover:shadow-sky-500/25"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="md:hidden w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white"
        >
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
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="block text-gray-400 hover:text-white">
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-white/10 space-y-4">
              <a href="/login" className="block text-gray-400">Log in</a>
              <a href="/register" className="block w-full text-center px-4 py-2 bg-sky-500 text-black font-medium rounded-lg">
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}