'use client';

import { useState, useEffect } from 'react';

interface PricingPlan {
  name: string;
  price: number | null;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
  gradient?: string;
}

const plans: PricingPlan[] = [
  {
    name: 'Starter',
    price: 0,
    description: 'Perfect for individuals',
    features: ['100 verifications/mo', 'Basic analytics', 'Email support', 'Community access'],
    cta: 'Start Free',
    gradient: 'from-gray-500 to-gray-600',
  },
  {
    name: 'Pro',
    price: 99,
    description: 'For growing teams',
    features: ['10,000 verifications/mo', 'Advanced analytics', 'Priority support', 'API access', 'NFT certificates', 'Team collaboration'],
    cta: 'Start Trial',
    popular: true,
    gradient: 'from-sky-500 to-cyan-500',
  },
  {
    name: 'Enterprise',
    price: null,
    description: 'For large organizations',
    features: ['Unlimited verifications', 'Custom solutions', 'Dedicated support', 'SLA guarantee', 'Custom integrations', 'On-premise option'],
    cta: 'Contact Sales',
    gradient: 'from-purple-500 to-pink-500',
  },
];

export function AnimatedPricing() {
  const [annual, setAnnual] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-sky-500/10 border border-sky-500/30 rounded-full text-sky-400 text-sm mb-4">
            Pricing
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Simple, Transparent
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-8">Choose the plan that fits your needs</p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-4 p-1 bg-white/5 rounded-2xl">
            <button
              onClick={() => setAnnual(false)}
              className={`px-6 py-2 rounded-xl font-medium transition-all ${
                !annual ? 'bg-sky-500 text-black' : 'text-gray-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-6 py-2 rounded-xl font-medium transition-all flex items-center gap-2 ${
                annual ? 'bg-sky-500 text-black' : 'text-gray-400 hover:text-white'
              }`}
            >
              Yearly
              <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`
                relative group transition-all duration-500
                ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="px-4 py-1 bg-gradient-to-r from-sky-500 to-cyan-500 text-black text-sm font-bold rounded-full">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Card */}
              <div className={`
                relative p-8 rounded-3xl border transition-all duration-300
                ${plan.popular
                  ? 'bg-white/10 border-sky-500/50 scale-105 shadow-xl shadow-sky-500/20'
                  : 'bg-white/5 border-white/10 hover:border-white/20'
                }
                group-hover:transform group-hover:scale-[1.02]
              `}>
                {/* Gradient Border Effect */}
                <div className={`
                  absolute inset-0 rounded-3xl bg-gradient-to-br ${plan.gradient} opacity-0
                  group-hover:opacity-10 transition-opacity duration-500
                `} />

                {/* Content */}
                <div className="relative">
                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

                  {/* Price */}
                  <div className="mb-8">
                    {plan.price !== null ? (
                      <div className="flex items-baseline gap-1">
                        <span className="text-5xl font-bold">
                          ${annual ? Math.floor(plan.price * 0.8) : plan.price}
                        </span>
                        <span className="text-gray-400">/mo</span>
                      </div>
                    ) : (
                      <div className="text-5xl font-bold">Custom</div>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3 text-gray-300">
                        <div className={`
                          w-5 h-5 rounded-full bg-gradient-to-br ${plan.gradient}
                          flex items-center justify-center text-xs
                        `}>
                          ✓
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    className={`
                      w-full py-4 rounded-xl font-semibold transition-all
                      ${plan.popular
                        ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-black hover:shadow-lg hover:shadow-sky-500/25'
                        : 'bg-white/10 text-white hover:bg-white/20'
                      }
                      group-hover:transform group-hover:scale-105
                    `}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AnimatedTestimonials() {
  const testimonials = [
    { quote: "N-Verify transformed how we trust AI outputs in healthcare. Game changer!", author: "Dr. Sarah Chen", role: "CMO, MediHealth", avatar: "SC" },
    { quote: "The easiest API integration we've ever done. Production ready in hours.", author: "James Liu", role: "CTO, FinTech Corp", avatar: "JL" },
    { quote: "Essential for any company using AI in legal workflows. Highly recommended.", author: "Michael Ross", role: "Partner, Ross Law", avatar: "MR" },
  ];

  return (
    <section className="py-32 bg-gray-900/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Trusted by Industry Leaders</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group relative p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-white/20 transition-all hover:-translate-y-2"
            >
              {/* Quote Icon */}
              <div className="text-6xl text-sky-500/30 mb-4 font-serif">"</div>

              {/* Quote */}
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                {t.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center font-bold text-black">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-bold">{t.author}</div>
                  <div className="text-gray-500 text-sm">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}