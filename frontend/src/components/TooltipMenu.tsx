'use client';

import { useState, useEffect, useRef } from 'react';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
}

export function Tooltip({ content, children, position = 'top', delay = 200 }: TooltipProps) {
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const positions = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  };

  const handleMouseEnter = () => {
    timeoutRef.current = setTimeout(() => setVisible(true), delay);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setVisible(false);
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {visible && (
        <div
          className={`absolute z-50 px-3 py-1.5 bg-gray-800 text-white text-xs rounded-lg whitespace-nowrap ${positions[position]} animate-fade-in`}
        >
          {content}
          <div className="absolute w-2 h-2 bg-gray-8 rotate-45" style={{
            top: position === 'bottom' ? '-4px' : 'auto',
            bottom: position === 'top' ? '-4px' : 'auto',
            left: position === 'left' ? '-4px' : 'auto',
            right: position === 'right' ? '-4px' : 'auto',
          }} />
        </div>
      )}
    </div>
  );
}

interface PopoverProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  align?: 'left' | 'right' | 'center';
}

export function Popover({ trigger, children, align = 'left' }: PopoverProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const alignClass = {
    left: 'left-0',
    right: 'right-0',
    center: 'left-1/2 -translate-x-1/2',
  };

  return (
    <div className="relative" ref={ref}>
      <div onClick={() => setOpen(!open)}>{trigger}</div>
      {open && (
        <div className={`absolute top-full mt-2 min-w-48 bg-gray-900 border border-white/10 rounded-xl shadow-xl overflow-hidden z-50 ${alignClass[align]}`}>
          <div className="py-2">{children}</div>
        </div>
      )}
    </div>
  );
}

interface MenuItemProps {
  children: React.ReactNode;
  onClick?: () => void;
  icon?: string;
  danger?: boolean;
  disabled?: boolean;
}

export function MenuItem({ children, onClick, icon, danger, disabled }: MenuItemProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full flex items-center gap-3 px-4 py-2 text-left text-sm transition-colors ${
        danger
          ? 'text-red-400 hover:bg-red-500/10'
          : disabled
          ? 'text-gray-600 cursor-not-allowed'
          : 'text-white hover:bg-white/5'
      }`}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
}

interface TooltipButtonProps {
  icon: string;
  tooltip: string;
  onClick?: () => void;
  variant?: 'default' | 'primary' | 'danger';
}

export function TooltipButton({ icon, tooltip, onClick, variant = 'default' }: TooltipButtonProps) {
  const variants = {
    default: 'bg-white/10 hover:bg-white/20 text-gray-400',
    primary: 'bg-sky-500 text-black hover:bg-sky-400',
    danger: 'bg-red-500 text-white hover:bg-red-400',
  };

  return (
    <Tooltip content={tooltip}>
      <button
        onClick={onClick}
        className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm ${variants[variant]}`}
      >
        {icon}
      </button>
    </Tooltip>
  );
}

interface ActionBarProps {
  children: React.ReactNode;
}

export function ActionBar({ children }: ActionBarProps) {
  return (
    <div className="flex items-center gap-2 p-2 bg-gray-900 border border-white/10 rounded-xl">
      {children}
    </div>
  );
}