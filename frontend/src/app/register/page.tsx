'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuthStore } from '@/lib/auth-store';

export default function RegisterPage() {
  const router = useRouter();
  const { register, isLoading, error, clearError } = useAuthStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [organizationName, setOrganizationName] = useState('');
  const [role, setRole] = useState('user');
  const [localError, setLocalError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();
    setLocalError('');

    if (password !== confirmPassword) {
      setLocalError('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      setLocalError('Password must be at least 6 characters');
      return;
    }
    
    try {
      await register(email, password, organizationName, role);
      router.push('/dashboard');
    } catch (error) {
      // Error is handled in the store
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 px-4 py-12">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="text-3xl font-bold text-white">
            N-<span className="text-sky-400">Verify</span>
          </Link>
          <p className="text-slate-400 mt-2">Create your account</p>
        </div>

        {/* Form */}
        <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
          <form onSubmit={handleSubmit} className="space-y-5">
            {(error || localError) && (
              <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg text-sm">
                {error || localError}
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="organization" className="block text-sm font-medium text-slate-300 mb-2">
                Organization Name (Optional)
              </label>
              <input
                id="organization"
                type="text"
                value={organizationName}
                onChange={(e) => setOrganizationName(e.target.value)}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                placeholder="Your Company"
              />
            </div>

            <div>
              <label htmlFor="role" className="block text-sm font-medium text-slate-300 mb-2">
                Account Type
              </label>
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              >
                <option value="user">User</option>
                <option value="validator">Validator</option>
              </select>
              <p className="text-xs text-slate-500 mt-1">
                Select &quot;Validator&quot; if you want to verify AI outputs
              </p>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                placeholder="Min 6 characters"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-300 mb-2">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                placeholder="Confirm password"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-sky-500 hover:bg-sky-400 text-slate-900 font-semibold py-3 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Creating account...' : 'Create Account'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-slate-400">
              Already have an account?{' '}
              <Link href="/login" className="text-sky-400 hover:text-sky-300 font-medium">
                Sign in
              </Link>
            </p>
          </div>
        </div>

        {/* Back link */}
        <div className="text-center mt-6">
          <Link href="/" className="text-slate-400 hover:text-slate-300 text-sm">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
