'use client';

import { useState } from 'react';

interface Step {
  title: string;
  description: string;
  icon?: string;
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
  onStepClick?: (step: number) => void;
}

export function Stepper({ steps, currentStep, onStepClick }: StepperProps) {
  return (
    <div className="flex items-center justify-between">
      {steps.map((step, i) => (
        <div key={i} className="flex items-center">
          <button
            onClick={() => onStepClick?.(i)}
            disabled={i > currentStep}
            className={`flex items-center gap-3 ${i <= currentStep ? 'cursor-pointer' : 'cursor-not-allowed'}`}
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                i < currentStep
                  ? 'bg-green-500 text-black'
                  : i === currentStep
                  ? 'bg-sky-500 text-black'
                  : 'bg-white/10 text-gray-500'
              }`}
            >
              {i < currentStep ? '✓' : step.icon || i + 1}
            </div>
            <div className="hidden md:block text-left">
              <div className={`font-medium ${i <= currentStep ? 'text-white' : 'text-gray-500'}`}>
                {step.title}
              </div>
            </div>
          </button>
          {i < steps.length - 1 && (
            <div className={`w-12 md:w-24 h-0.5 mx-2 ${i < currentStep ? 'bg-green-500' : 'bg-white/10'}`} />
          )}
        </div>
      ))}
    </div>
  );
}

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  open?: boolean;
  onToggle?: () => void;
}

export function AccordionItem({ title, children, open, onToggle }: AccordionItemProps) {
  return (
    <div className="border border-white/10 rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full p-4 flex items-center justify-between text-left hover:bg-white/5"
      >
        <span className="font-medium">{title}</span>
        <span className={`text-gray-400 transition-transform ${open ? 'rotate-180' : ''}`}>▼</span>
      </button>
      {open && <div className="p-4 pt-0 text-gray-400">{children}</div>}
    </div>
  );
}

export function Accordion({ children }: { children: React.ReactNode[] }) {
  return <div className="space-y-2">{children}</div>;
}

interface BreadcrumbProps {
  items: { label: string; href?: string }[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-2 text-sm">
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-2">
          {i > 0 && <span className="text-gray-600">/</span>}
          {item.href ? (
            <a href={item.href} className="text-gray-400 hover:text-white">
              {item.label}
            </a>
          ) : (
            <span className="text-white">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}

interface TagProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md';
  onRemove?: () => void;
}

export function Tag({ children, variant = 'default', size = 'md', onRemove }: TagProps) {
  const variants = {
    default: 'bg-white/10 text-gray-300',
    success: 'bg-green-500/20 text-green-400',
    warning: 'bg-yellow-500/20 text-yellow-400',
    error: 'bg-red-500/20 text-red-400',
    info: 'bg-sky-500/20 text-sky-400',
  };
  const sizes = { sm: 'px-2 py-0.5 text-xs', md: 'px-3 py-1 text-sm' };

  return (
    <span className={`inline-flex items-center gap-1 rounded-full ${variants[variant]} ${sizes[size]}`}>
      {children}
      {onRemove && (
        <button onClick={onRemove} className="hover:text-white">
          ×
        </button>
      )}
    </span>
  );
}

interface ChipProps {
  label: string;
  selected?: boolean;
  onClick?: () => void;
}

export function Chip({ label, selected, onClick }: ChipProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
        selected
          ? 'bg-sky-500 text-black'
          : 'bg-white/10 text-gray-400 hover:text-white hover:bg-white/20'
      }`}
    >
      {label}
    </button>
  );
}