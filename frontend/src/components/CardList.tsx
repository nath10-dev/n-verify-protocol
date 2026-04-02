'use client';

import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export function Card({ children, className = '', hover = false, onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={`bg-white/5 border border-white/10 rounded-2xl p-6 ${
        hover ? 'hover:border-sky-500/30 hover:bg-white/10 cursor-pointer transition-all' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mb-4 ${className}`}>{children}</div>;
}

export function CardTitle({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <h3 className={`text-xl font-bold ${className}`}>{children}</h3>;
}

export function CardDescription({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <p className={`text-gray-400 ${className}`}>{children}</p>;
}

export function CardContent({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}

export function CardFooter({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mt-4 pt-4 border-t border-white/10 ${className}`}>{children}</div>;
}

interface ListItemProps {
  icon?: string;
  title: string;
  description?: string;
  right?: ReactNode;
  onClick?: () => void;
}

export function ListItem({ icon, title, description, right, onClick }: ListItemProps) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl ${
        onClick ? 'cursor-pointer hover:bg-white/10' : ''
      }`}
    >
      {icon && <span className="text-2xl">{icon}</span>}
      <div className="flex-1">
        <div className="font-medium">{title}</div>
        {description && <div className="text-gray-400 text-sm">{description}</div>}
      </div>
      {right}
    </div>
  );
}

export function List({ children }: { children: ReactNode }) {
  return <div className="space-y-2">{children}</div>;
}

interface GridProps {
  children: ReactNode;
  cols?: 2 | 3 | 4;
  gap?: number;
}

export function Grid({ children, cols = 3, gap = 6 }: GridProps) {
  const colsClass = { 2: 'grid-cols-1 md:grid-cols-2', 3: 'grid-cols-1 md:grid-cols-3', 4: 'grid-cols-1 md:grid-cols-4' };
  return <div className={`grid ${colsClass[cols]} gap-${gap}`}>{children}</div>;
}

interface AvatarGroupProps {
  avatars: { src?: string; name: string }[];
  max?: number;
}

export function AvatarGroup({ avatars, max = 4 }: AvatarGroupProps) {
  const shown = avatars.slice(0, max);
  const remaining = avatars.length - max;

  return (
    <div className="flex -space-x-2">
      {shown.map((avatar, i) => (
        <div
          key={i}
          className="w-8 h-8 rounded-full bg-gradient-to-br from-sky-500 to-cyan-400 border-2 border-black flex items-center justify-center text-xs font-bold text-black"
          title={avatar.name}
        >
          {avatar.name.slice(0, 2).toUpperCase()}
        </div>
      ))}
      {remaining > 0 && (
        <div className="w-8 h-8 rounded-full bg-white/10 border-2 border-black flex items-center justify-center text-xs text-gray-400">
          +{remaining}
        </div>
      )}
    </div>
  );
}

interface DividerProps {
  label?: string;
}

export function Divider({ label }: DividerProps) {
  if (label) {
    return (
      <div className="flex items-center gap-4 my-6">
        <div className="flex-1 border-t border-white/10" />
        <span className="text-gray-500 text-sm">{label}</span>
        <div className="flex-1 border-t border-white/10" />
      </div>
    );
  }
  return <div className="border-t border-white/10 my-6" />;
}

export function Spacer({ size = 4 }: { size?: number }) {
  return <div style={{ height: size * 4 }} />;
}