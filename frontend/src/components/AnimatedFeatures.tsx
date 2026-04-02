'use client';

import { useState } from 'react';

interface Feature {
  icon: string;
  title: string;
  description: string;
  gradient: string;
}

const features: Feature[] = [
  {
    icon: '⚡',
    title: 'Lightning Fast',
    description: 'Verify AI outputs in under 5 seconds with our optimized algorithms.',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: '🛡️',
    title: 'Enterprise Security',
    description: 'SOC 2 certified with end-to-end encryption and compliance.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: '🌍',
    title: 'Global Scale',
    description: 'Deployed across 30+ regions with 99.9% uptime SLA.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: '🔗',
    title: 'Blockchain Proof',
    description: 'Every verification creates an immutable certificate on-chain.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: '🤖',
    title: 'AI Native',
    description: 'Built for the AI era with support for all major models.',
    gradient: 'from-sky-500 to-indigo-500',
  },
  {
    icon: '💎',
    title: 'NFT Certificates',
    description: 'Verifiable credentials that live forever on the blockchain.',
    gradient: 'from-rose-500 to-red-500',
  },
];

export function AnimatedFeatures() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1 bg-sky-500/10 border border-sky-500/30 rounded-full text-sky-400 text-sm mb-4">
            Features
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Everything You Need
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Powerful features to build trust in AI outputs
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Card */}
              <div className={`
                relative p-8 rounded-3xl border transition-all duration-500
                ${hoveredIndex === i 
                  ? 'bg-white/10 border-white/20 scale-105' 
                  : 'bg-white/5 border-white/10 hover:border-white/20'
                }
              `}>
                {/* Gradient Glow on Hover */}
                <div className={`
                  absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.gradient} opacity-0
                  group-hover:opacity-10 transition-opacity duration-500
                `} />

                {/* Icon */}
                <div className={`
                  w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient}
                  flex items-center justify-center text-3xl mb-6
                  group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300
                `}>
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3 group-hover:text-sky-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Arrow on Hover */}
                <div className={`
                  absolute top-8 right-8 text-2xl text-white/20
                  group-hover:text-sky-400 group-hover:translate-x-2 group-hover:-translate-y-2
                  transition-all duration-300
                `}>
                  →
                </div>
              </div>

              {/* Glow Effect */}
              <div className={`
                absolute -inset-1 rounded-3xl bg-gradient-to-r ${feature.gradient}
                opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500
              `} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AnimatedStats() {
  const stats = [
    { value: '50K+', label: 'Active Users', icon: '👥' },
    { value: '2M+', label: 'Verifications', icon: '✓' },
    { value: '99.9%', label: 'Uptime', icon: '⚡' },
    { value: '50+', label: 'Integrations', icon: '🔌' },
  ];

  return (
    <section className="py-24 bg-gray-900/50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center group"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {/* Icon with Pulse */}
              <div className="relative inline-flex mb-4">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="absolute inset-0 rounded-2xl bg-sky-500/20 animate-ping opacity-0 group-hover:opacity-100" />
              </div>

              {/* Value */}
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>

              {/* Label */}
              <div className="text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}