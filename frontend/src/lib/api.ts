import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

const api = axios.create({
  baseURL: `${API_URL}/api/v1`,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

// Handle auth errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('token');
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  register: (data: { email: string; password: string; organizationName?: string; role?: string }) =>
    api.post('/auth/register', data),
  
  login: (data: { email: string; password: string }) =>
    api.post('/auth/login', data),
  
  refresh: () =>
    api.post('/auth/refresh'),
  
  me: () =>
    api.get('/auth/me'),
};

// Verification API
export const verifyAPI = {
  create: (data: { domain: string; aiOutput: string; metadata?: object }) =>
    api.post('/verify', data),
  
  get: (requestId: string) =>
    api.get(`/verify/${requestId}`),
  
  list: (params?: { status?: string; domain?: string; limit?: number; offset?: number }) =>
    api.get('/verify', { params }),
  
  getCertificate: (requestId: string) =>
    api.get(`/verify/${requestId}/certificate`),
};

// Reasoning API
export const reasoningAPI = {
  getGraph: (graphId: string) =>
    api.get(`/reasoning/${graphId}`),
  
  getNode: (graphId: string, nodeId: string) =>
    api.get(`/reasoning/${graphId}/nodes/${nodeId}`),
};

// Validators API
export const validatorsAPI = {
  register: (data: { domain: string; walletAddress: string; stakeAmount: number }) =>
    api.post('/validators/register', data),
  
  getStats: (validatorId: string) =>
    api.get(`/validators/${validatorId}/stats`),
  
  verifyNode: (validatorId: string, data: { nodeId: string; result: string; confidence: number; evidence: unknown[] }) =>
    api.post(`/validators/${validatorId}/verify-node`, data),
};

// Analytics API
export const analyticsAPI = {
  dashboard: () =>
    api.get('/analytics/dashboard'),
  
  domain: (domain: string) =>
    api.get(`/analytics/domain/${domain}`),
  
  user: () =>
    api.get('/analytics/user'),
};

export default api;
