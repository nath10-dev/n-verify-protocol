'use client';

import { useState } from 'react';

interface HeroProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  align?: 'center' | 'left';
}

export function Hero({ title, subtitle, children, align = 'center' }: HeroProps) {
  return (
    <section className={`pt-32 pb-20 ${align === 'center' ? 'text-center' : ''}`}>
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          {title.split('\n').map((line, i) => (
            <span key={i} className="block">
              {line.includes('N-Verify') ? (
                <span className="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
                  N-Verify
                </span>
              ) : (
                line
              )}
            </span>
          ))}
        </h1>
        {subtitle && <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}

interface CTAButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function CTAButton({ href, onClick, variant = 'primary', size = 'md', children }: CTAButtonProps) {
  const base = 'inline-flex items-center justify-center font-medium rounded-full transition-all';
  const sizes = { sm: 'px-4 py-2 text-sm', md: 'px-6 py-3', lg: 'px-8 py-4 text-lg' };
  const variants = {
    primary: 'bg-sky-500 text-black hover:bg-sky-400 hover:shadow-lg hover:shadow-sky-500/25',
    secondary: 'bg-white/10 text-white border border-white/20 hover:bg-white/20',
    ghost: 'text-gray-400 hover:text-white',
  };

  const className = `${base} ${sizes[size]} ${variants[variant]}`;

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  href?: string;
}

export function FeatureCard({ icon, title, description, href }: FeatureCardProps) {
  const content = (
    <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-sky-500/30 hover:bg-white/10 transition-all group">
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }
  return content;
}

interface StatProps {
  value: string;
  label: string;
  change?: string;
}

export function Stat({ value, label, change }: StatProps) {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-sky-400 mb-1">{value}</div>
      <div className="text-gray-500">{label}</div>
      {change && <div className="text-green-400 text-sm">{change}</div>}
    </div>
  );
}

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ title, subtitle, children, className = '' }: SectionProps) {
  return (
    <section className={`py-16 ${className}`}>
      <div className="max-w-6xl mx-auto px-6">
        {title && (
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            {subtitle && <p className="text-gray-400 max-w-2xl mx-auto">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}