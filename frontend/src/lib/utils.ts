// Utility functions for N-Verify

export function formatDate(date: string | Date): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function formatTimeAgo(date: string | Date): string {
  const now = new Date();
  const past = new Date(date);
  const diff = now.getTime() - past.getTime();
  
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);
  
  if (minutes < 1) return 'Just now';
  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  if (days < 7) return `${days}d ago`;
  return formatDate(date);
}

export function getScoreColor(score: string): string {
  if (score.startsWith('A')) return 'text-green-400';
  if (score.startsWith('B')) return 'text-yellow-400';
  if (score.startsWith('C')) return 'text-orange-400';
  return 'text-red-400';
}

export function getScoreLabel(score: string): string {
  const labels: Record<string, string> = {
    'A': 'Excellent',
    'A-': 'Excellent',
    'B+': 'Good',
    'B': 'Good',
    'C': 'Fair',
    'D': 'Poor',
    'F': 'Failed',
  };
  return labels[score] || 'Unknown';
}

export function truncate(str: string, length: number): string {
  if (str.length <= length) return str;
  return str.slice(0, length) + '...';
}

export function generateId(): string {
  return Math.random().toString(36).substring(2, 15);
}

export function classNames(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function formatNumber(num: number): string {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
  if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
  return num.toString();
}

export function formatPercent(num: number): string {
  return `${Math.round(num * 100)}%`;
}

export const domains = ['medical', 'legal', 'financial'] as const;
export type Domain = typeof domains[number];

export const domainLabels: Record<Domain, string> = {
  medical: 'Medical',
  legal: 'Legal',
  financial: 'Financial',
};

export const domainColors: Record<Domain, string> = {
  medical: 'text-red-400',
  legal: 'text-purple-400',
  financial: 'text-green-400',
};