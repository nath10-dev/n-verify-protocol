// React Hooks for N-Verify

import { useState, useCallback, useEffect } from 'react';
import { createClient, VerificationResult } from './client';

export function useVerification() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<VerificationResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  const verify = useCallback(async (output: string, domain: string, apiKey: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const client = createClient(apiKey);
      const res = await client.verify(output, domain);
      setResult(res);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Verification failed');
    } finally {
      setLoading(false);
    }
  }, []);
  
  const reset = useCallback(() => {
    setResult(null);
    setError(null);
  }, []);
  
  return { verify, result, error, loading, reset };
}

export function useCertificate(certificateId: string, apiKey: string) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    if (!certificateId || !apiKey) return;
    
    const fetch = async () => {
      try {
        const client = createClient(apiKey);
        const cert = await client.getCertificate(certificateId);
        setData(cert);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load');
      } finally {
        setLoading(false);
      }
    };
    
    fetch();
  }, [certificateId, apiKey]);
  
  return { data, loading, error };
}

export function useLocalStorage(key: string, initialValue: any) {
  const [stored, setStored] = useState(() => {
    if (typeof window === 'undefined') return initialValue;
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });
  
  const set = (value: any) => {
    setStored(value);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  };
  
  return [stored, set];
}

export function useDebounce<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value);
  
  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  
  return debounced;
}