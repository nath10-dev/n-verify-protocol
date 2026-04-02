'use client';

import { useState } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: string;
}

export function Input({ label, error, icon, className = '', ...props }: InputProps) {
  return (
    <div className="w-full">
      {label && <label className="block text-sm font-medium text-gray-300 mb-2">{label}</label>}
      <div className="relative">
        {icon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">{icon}</span>
        )}
        <input
          className={`w-full px-4 py-3 bg-black/50 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-sky-500 transition-colors ${
            icon ? 'pl-10' : ''
          } ${error ? 'border-red-500' : 'border-white/10'} ${className}`}
          {...props}
        />
      </div>
      {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
    </div>
  );
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export function Textarea({ label, error, className = '', ...props }: TextareaProps) {
  return (
    <div className="w-full">
      {label && <label className="block text-sm font-medium text-gray-300 mb-2">{label}</label>}
      <textarea
        className={`w-full px-4 py-3 bg-black/50 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-sky-500 transition-colors resize-none ${
          error ? 'border-red-500' : 'border-white/10'
        } ${className}`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
    </div>
  );
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: { value: string; label: string }[];
}

export function Select({ label, options, className = '', ...props }: SelectProps) {
  return (
    <div className="w-full">
      {label && <label className="block text-sm font-medium text-gray-300 mb-2">{label}</label>}
      <select
        className={`w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white focus:outline-none focus:border-sky-500 transition-colors ${className}`}
        {...props}
      >
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export function Checkbox({ label, checked, onChange }: CheckboxProps) {
  return (
    <label className="flex items-center gap-3 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="w-5 h-5 rounded border-white/20 bg-black/50 text-sky-500 focus:ring-sky-500 focus:ring-offset-0"
      />
      <span className="text-gray-300">{label}</span>
    </label>
  );
}

interface RadioGroupProps {
  label?: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
}

export function RadioGroup({ label, options, value, onChange }: RadioGroupProps) {
  return (
    <div className="w-full">
      {label && <label className="block text-sm font-medium text-gray-300 mb-3">{label}</label>}
      <div className="space-y-2">
        {options.map(opt => (
          <label key={opt.value} className="flex items-center gap-3 cursor-pointer p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
            <input
              type="radio"
              name={label}
              value={opt.value}
              checked={value === opt.value}
              onChange={(e) => onChange(e.target.value)}
              className="w-4 h-4 text-sky-500 border-white/20 bg-black/50"
            />
            <span className="text-white">{opt.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

interface ToggleProps {
  label?: string;
  enabled: boolean;
  onChange: (enabled: boolean) => void;
}

export function Toggle({ label, enabled, onChange }: ToggleProps) {
  return (
    <label className="flex items-center justify-between cursor-pointer">
      {label && <span className="text-gray-300">{label}</span>}
      <button
        type="button"
        onClick={() => onChange(!enabled)}
        className={`relative w-12 h-6 rounded-full transition-colors ${enabled ? 'bg-sky-500' : 'bg-white/20'}`}
      >
        <span
          className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
            enabled ? 'left-7' : 'left-1'
          }`}
        />
      </button>
    </label>
  );
}