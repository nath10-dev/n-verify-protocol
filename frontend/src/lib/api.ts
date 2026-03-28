import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api/v1';

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests
apiClient.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

// Handle auth errors
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('authToken');
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

// ==================== Auth API ====================

export const authAPI = {
  register: async (email: string, password: string, name: string) => {
    const response = await apiClient.post('/auth/register', { email, password, name });
    return response.data;
  },

  login: async (email: string, password: string) => {
    const response = await apiClient.post('/auth/login', { email, password });
    if (response.data.token) {
      localStorage.setItem('authToken', response.data.token);
    }
    return response.data;
  },

  logout: () => {
    localStorage.removeItem('authToken');
  },

  me: async () => {
    const response = await apiClient.get('/auth/me');
    return response.data;
  },
};

// ==================== Verification API ====================

export interface VerificationRequest {
  domain: 'medical' | 'legal' | 'financial';
  aiOutput: string;
  context?: string;
}

export interface VerificationResult {
  id: string;
  certificateId: string;
  reliabilityScore: string;
  domain: string;
  reasoningChain: any;
  verificationDetails: any;
  createdAt: string;
}

export const verificationAPI = {
  create: async (data: VerificationRequest): Promise<VerificationResult> => {
    const response = await apiClient.post('/verify', data);
    return response.data;
  },

  list: async (): Promise<VerificationResult[]> => {
    const response = await apiClient.get('/verify');
    return response.data;
  },

  get: async (id: string): Promise<VerificationResult> => {
    const response = await apiClient.get(`/verify/${id}`);
    return response.data;
  },
};

// ==================== Validator API ====================

export const validatorAPI = {
  register: async (walletAddress: string, domain: string) => {
    const response = await apiClient.post('/validators/register', { walletAddress, domain });
    return response.data;
  },

  getStatus: async (walletAddress: string) => {
    const response = await apiClient.get(`/validators/${walletAddress}/status`);
    return response.data;
  },

  stake: async (domain: string) => {
    const response = await apiClient.post('/validators/stake', { domain });
    return response.data;
  },
};

// ==================== User API ====================

export const userAPI = {
  updateProfile: async (data: { name?: string; walletAddress?: string }) => {
    const response = await apiClient.put('/users/profile', data);
    return response.data;
  },

  getAPIKeys: async () => {
    const response = await apiClient.get('/users/api-keys');
    return response.data;
  },

  createAPIKey: async (name: string) => {
    const response = await apiClient.post('/users/api-keys', { name });
    return response.data;
  },
};

export default apiClient;