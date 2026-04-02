'use client';

import { useState } from 'react';
import Link from 'next/link';

interface SidebarProps {
  links: { name: string; href: string; icon?: string }[];
  active?: string;
}

export function Sidebar({ links, active }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={`bg-gray-900 border-r border-white/10 transition-all ${collapsed ? 'w-16' : 'w-64'}`}>
      <div className="p-4 flex items-center justify-between border-b border-white/10">
        {!collapsed && <span className="font-bold">Menu</span>}
        <button onClick={() => setCollapsed(!collapsed)} className="text-gray-400 hover:text-white">
          {collapsed ? '→' : '←'}
        </button>
      </div>
      
      <nav className="p-2">
        {links.map(link => (
          <Link
            key={link.name}
            href={link.href}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
              active === link.href
                ? 'bg-sky-500/20 text-sky-400'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {link.icon && <span>{link.icon}</span>}
            {!collapsed && <span>{link.name}</span>}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-black flex">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-16'} bg-gray-900 border-r border-white/10 transition-all`}>
        <div className="p-4 border-b border-white/10 flex items-center justify-between">
          {sidebarOpen && <span className="font-bold text-sky-400">N-Verify</span>}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-gray-400">
            {sidebarOpen ? '←' : '→'}
          </button>
        </div>
        <nav className="p-2 space-y-1">
          {[
            { name: 'Dashboard', icon: '📊', href: '/dashboard' },
            { name: 'Verify', icon: '✓', href: '/verify' },
            { name: 'Certificates', icon: '📜', href: '/certificates' },
            { name: 'Analytics', icon: '📈', href: '/analytics' },
            { name: 'Team', icon: '👥', href: '/team' },
            { name: 'Settings', icon: '⚙️', href: '/settings' },
          ].map(link => (
            <Link
              key={link.name}
              href={link.href}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5"
            >
              <span>{link.icon}</span>
              {sidebarOpen && <span>{link.name}</span>}
            </Link>
          ))}
        </nav>
      </div>

      {/* Main */}
      <main className="flex-1">{children}</main>
    </div>
  );
}