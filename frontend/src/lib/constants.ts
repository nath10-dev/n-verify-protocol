// Shared constants for N-Verify

export const APP_NAME = 'N-Verify Protocol';
export const APP_URL = 'https://n-verify.com';

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.n-verify.com/v1';
export const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || '';

export const DOMAINS = ['medical', 'legal', 'financial'] as const;
export type Domain = typeof DOMAINS[number];

export const SCORES = ['A', 'A-', 'B+', 'B', 'C', 'D', 'F'] as const;
export type Score = typeof SCORES[number];

export const SCORE_LABELS: Record<Score, string> = {
  A: 'Excellent',
  'A-': 'Excellent',
  'B+': 'Good',
  B: 'Good',
  C: 'Fair',
  D: 'Poor',
  F: 'Failed',
};

export const SCORE_COLORS: Record<Score, string> = {
  A: 'text-green-400',
  'A-': 'text-green-400',
  'B+': 'text-yellow-400',
  B: 'text-yellow-400',
  C: 'text-orange-400',
  D: 'text-orange-400',
  F: 'text-red-400',
};

export const ROUTES = {
  HOME: '/',
  VERIFY: '/verify',
  DASHBOARD: '/dashboard',
  PRICING: '/pricing',
  DOCS: '/docs',
  BLOG: '/blog',
  LOGIN: '/login',
  REGISTER: '/register',
} as const;

export const STORAGE_KEYS = {
  API_KEY: 'nverify_api_key',
  USER: 'nverify_user',
  THEME: 'nverify_theme',
} as const;

export const ANALYTICS_EVENTS = {
  VERIFICATION_START: 'verification_start',
  VERIFICATION_COMPLETE: 'verification_complete',
  VERIFICATION_ERROR: 'verification_error',
  CERTIFICATE_VIEWED: 'certificate_viewed',
  PAGE_VIEWED: 'page_viewed',
} as const;

export const LIMITS = {
  MAX_OUTPUT_LENGTH: 50000,
  MAX_FILE_SIZE: 10 * 1024 * 1024, // 10MB
  API_RATE_LIMIT: 1000,
  DEFAULT_PAGE_SIZE: 20,
  MAX_PAGE_SIZE: 100,
} as const;