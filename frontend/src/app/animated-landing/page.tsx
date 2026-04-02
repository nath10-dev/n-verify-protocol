'use client';

import { useEffect, useState } from 'react';
import { AnimatedNavbar } from './AnimatedNavbar';
import { AnimatedHero } from './AnimatedHero';
import { AnimatedFeatures, AnimatedStats } from './AnimatedFeatures';
import { AnimatedPricing, AnimatedTestimonials } from './AnimatedPricing';
import { AnimatedContact, AnimatedCTA } from './AnimatedContact';
import { AnimatedFooter } from './AnimatedNavbar';
import { AnimatedVerification, AnimatedDomainCards } from './AnimatedVerification';

export default function AnimatedLanding() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <AnimatedNavbar />
      
      <main>
        <AnimatedHero 
          title="Verify AI Outputs\nWith Confidence"
          subtitle="Transform AI outputs into cryptographically auditable reasoning chains. Built for healthcare, legal, and financial industries."
          ctaText="Start Verifying"
          ctaLink="/verify"
        />

        <AnimatedStats />

        <AnimatedFeatures />

        <AnimatedDomainCards />

        <section className="py-32 bg-black relative">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          </div>
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Try It Now
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              No signup required. Test our verification system right now.
            </p>
            <a 
              href="/demo" 
              className="inline-block px-8 py-4 bg-sky-500 text-black font-semibold rounded-full hover:bg-sky-400 transition-all hover:shadow-lg hover:shadow-sky-500/25"
            >
              Try Demo
            </a>
          </div>
        </section>

        <AnimatedPricing />

        <AnimatedTestimonials />

        <AnimatedContact />

        <AnimatedCTA />
      </main>

      <AnimatedFooter />

      {/* Global Styles */}
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }
        
        body {
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          background: #000;
          color: #fff;
          overflow-x: hidden;
        }

        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #111;
        }

        ::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #444;
        }

        ::selection {
          background: rgba(56, 189, 248, 0.3);
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
}