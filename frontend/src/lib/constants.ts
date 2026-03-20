// N-Verify Protocol - Constants

export const APP_NAME = 'N-Verify Protocol';
export const APP_VERSION = '1.0.0';

// API
export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
export const API_TIMEOUT = 30000;

// Blockchain
export const CHAIN_ID = parseInt(process.env.NEXT_PUBLIC_CHAIN_ID || '11155111'); // Sepolia
export const CHAIN_NAME = 'Sepolia';

// Verification
export const VERIFICATION_DOMAINS = ['medical', 'legal', 'financial'] as const;
export type VerificationDomain = typeof VERIFICATION_DOMAINS[number];

export const DOMAIN_LABELS: Record<VerificationDomain, string> = {
  medical: 'Medical',
  legal: 'Legal', 
  financial: 'Financial',
};

// Statuses
export const VERIFICATION_STATUSES = ['pending', 'processing', 'completed', 'failed'] as const;
export type VerificationStatus = typeof VERIFICATION_STATUSES[number];

export const STATUS_LABELS: Record<VerificationStatus, string> = {
  pending: 'Pending',
  processing: 'Processing',
  completed: 'Completed',
  failed: 'Failed',
};

// Reliability scores
export const RELIABILITY_SCORES = ['A+', 'A', 'B+', 'B', 'C', 'D'] as const;

// Timeouts
export const POLL_INTERVAL = 3000; // 3 seconds
export const TOKEN_REFRESH_INTERVAL = 24 * 60 * 60 * 1000; // 24 hours
