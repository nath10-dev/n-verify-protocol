// N-Verify API Client
// Usage: import { NVerifyClient } from '@/lib/client'

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'https://api.n-verify.com/v1';

export interface VerificationResult {
  certificateId: string;
  score: 'A' | 'A-' | 'B+' | 'B' | 'C' | 'D' | 'F';
  confidence: number;
  findings: string[];
  timestamp: string;
  domain: 'medical' | 'legal' | 'financial';
}

export interface Certificate {
  id: string;
  score: string;
  domain: string;
  timestamp: string;
  verifiedOutput: string;
  findings: string[];
}

export class NVerifyClient {
  private apiKey: string;
  
  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }
  
  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const response = await fetch(`${API_BASE}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`,
        ...options.headers,
      },
    });
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }
    
    return response.json();
  }
  
  async verify(output: string, domain: string): Promise<VerificationResult> {
    return this.request('/verify', {
      method: 'POST',
      body: JSON.stringify({ output, domain }),
    });
  }
  
  async getCertificate(id: string): Promise<Certificate> {
    return this.request(`/certificates/${id}`);
  }
  
  async getHistory(params?: { limit?: number; offset?: number }) {
    const query = new URLSearchParams(params as any).toString();
    return this.request(`/verifications?${query}`);
  }
  
  async getAnalytics() {
    return this.request('/analytics');
  }
}

export const createClient = (apiKey: string) => new NVerifyClient(apiKey);

export default { NVerifyClient, createClient };