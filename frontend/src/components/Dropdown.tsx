'use client';

import { useState, useRef, useEffect } from 'react';

interface DropdownProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  align?: 'left' | 'right';
}

export function Dropdown({ trigger, children, align = 'left' }: DropdownProps) {
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
  
  return (
    <div className="relative" ref={ref}>
      <div onClick={() => setOpen(!open)}>{trigger}</div>
      {open && (
        <div className={`absolute top-full mt-2 min-w-48 bg-gray-900 border border-white/10 rounded-xl shadow-lg overflow-hidden z-50 ${align === 'right' ? 'right-0' : 'left-0'}`}>
          <div className="py-2">{children}</div>
        </div>
      )}
    </div>
  );
}

export function DropdownItem({ 
  children, 
  onClick,
  danger = false 
}: { 
  children: React.ReactNode; 
  onClick?: () => void;
  danger?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full px-4 py-2 text-left text-sm hover:bg-white/5 transition-colors ${danger ? 'text-red-400' : 'text-white'}`}
    >
      {children}
    </button>
  );
}

export function DropdownDivider() {
  return <div className="border-t border-white/10 my-2" />;
}