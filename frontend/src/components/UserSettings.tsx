'use client';

import { useState } from 'react';

export default function UserSettings() {
  const [activeTab, setActiveTab] = useState('profile');
  const [form, setForm] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    company: 'Acme Corp',
    timezone: 'UTC'
  });
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    newsletter: false,
    updates: true
  });

  const tabs = [
    { id: 'profile', label: 'Profile' },
    { id: 'account', label: 'Account' },
    { id: 'notifications', label: 'Notifications' },
    { id: 'security', label: 'Security' },
    { id: 'api', label: 'API Keys' }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Settings</h1>

        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-48 flex-shrink-0">
            <nav className="space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    activeTab === tab.id
                      ? 'bg-sky-500/20 text-sky-400'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Content */}
          <div className="flex-1 bg-gray-900 border border-white/10 rounded-2xl p-6">
            {activeTab === 'profile' && (
              <>
                <h2 className="text-xl font-semibold mb-6">Profile Settings</h2>
                <div className="space-y-6">
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-sky-500 to-cyan-400 flex items-center justify-center text-2xl font-bold">
                      {form.name[0]}
                    </div>
                    <button className="px-4 py-2 border border-white/20 rounded-lg text-sm hover:bg-white/5">
                      Change Avatar
                    </button>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Name</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({...form, name: e.target.value})}
                      className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl focus:border-sky-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Email</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({...form, email: e.target.value})}
                      className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl focus:border-sky-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Company</label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({...form, company: e.target.value})}
                      className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl focus:border-sky-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Timezone</label>
                    <select
                      value={form.timezone}
                      onChange={(e) => setForm({...form, timezone: e.target.value})}
                      className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl focus:border-sky-500 focus:outline-none"
                    >
                      <option value="UTC">UTC</option>
                      <option value="EST">EST (UTC-5)</option>
                      <option value="PST">PST (UTC-8)</option>
                      <option value="CET">CET (UTC+1)</option>
                    </select>
                  </div>
                  <button className="px-6 py-3 bg-sky-500 text-black font-medium rounded-xl hover:bg-sky-400">
                    Save Changes
                  </button>
                </div>
              </>
            )}

            {activeTab === 'notifications' && (
              <>
                <h2 className="text-xl font-semibold mb-6">Notification Preferences</h2>
                <div className="space-y-4">
                  {[
                    { key: 'email', label: 'Email Notifications', desc: 'Receive verification results via email' },
                    { key: 'push', label: 'Push Notifications', desc: 'Browser notifications for new updates' },
                    { key: 'newsletter', label: 'Newsletter', desc: 'Monthly product updates and news' },
                    { key: 'updates', label: 'Product Updates', desc: 'Important platform changes' }
                  ].map((item) => (
                    <div key={item.key} className="flex items-center justify-between py-4 border-b border-white/5">
                      <div>
                        <div className="font-medium">{item.label}</div>
                        <div className="text-gray-500 text-sm">{item.desc}</div>
                      </div>
                      <button
                        onClick={() => setNotifications({...notifications, [item.key]: !notifications[item.key as keyof typeof notifications]})}
                        className={`w-12 h-6 rounded-full transition-colors ${
                          notifications[item.key as keyof typeof notifications] ? 'bg-sky-500' : 'bg-gray-600'
                        }`}
                      >
                        <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                          notifications[item.key as keyof typeof notifications] ? 'translate-x-6' : 'translate-x-0.5'
                        }`} />
                      </button>
                    </div>
                  ))}
                </div>
              </>
            )}

            {activeTab === 'security' && (
              <>
                <h2 className="text-xl font-semibold mb-6">Security Settings</h2>
                <div className="space-y-6">
                  <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-yellow-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <div>
                        <div className="font-medium text-yellow-400">Two-factor authentication</div>
                        <div className="text-gray-400 text-sm">Add an extra layer of security to your account</div>
                      </div>
                    </div>
                  </div>
                  <button className="w-full py-3 border border-white/20 rounded-xl hover:bg-white/5 text-left px-4">
                    Change Password
                  </button>
                  <button className="w-full py-3 border border-white/20 rounded-xl hover:bg-white/5 text-left px-4">
                    Enable 2FA
                  </button>
                  <button className="w-full py-3 border border-red-500/50 text-red-400 rounded-xl hover:bg-red-500/10 text-left px-4">
                    Delete Account
                  </button>
                </div>
              </>
            )}

            {activeTab === 'api' && (
              <>
                <h2 className="text-xl font-semibold mb-6">API Keys</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-black/50 border border-white/10 rounded-xl">
                    <div>
                      <div className="font-mono text-sky-400">nv_live_************************</div>
                      <div className="text-gray-500 text-sm">Created Jan 15, 2026</div>
                    </div>
                    <button className="text-red-400 text-sm hover:underline">Revoke</button>
                  </div>
                  <button className="w-full py-3 border border-dashed border-white/20 rounded-xl text-gray-400 hover:border-white/40 hover:text-white">
                    + Generate New API Key
                  </button>
                </div>
              </>
            )}

            {activeTab === 'account' && (
              <>
                <h2 className="text-xl font-semibold mb-6">Account Settings</h2>
                <div className="space-y-6">
                  <div>
                    <div className="text-gray-400 text-sm mb-2">Plan</div>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-sky-500/20 text-sky-400 rounded-full text-sm font-medium">Pro</span>
                      <span className="text-gray-500 text-sm">Current plan</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-2">Usage This Month</div>
                    <div className="text-2xl font-bold">8,432 / 10,000 verifications</div>
                    <div className="w-full bg-gray-800 h-2 rounded-full mt-2">
                      <div className="bg-sky-500 h-2 rounded-full" style={{ width: '84.32%' }} />
                    </div>
                  </div>
                  <button className="px-6 py-3 bg-white text-black font-medium rounded-xl hover:bg-gray-200">
                    Manage Subscription
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}