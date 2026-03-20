import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { authAPI } from '../lib/api';

interface User {
  id: string;
  email: string;
  role: string;
  organization?: string;
  createdAt: string;
  isActive?: boolean;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, organizationName?: string, role?: string) => Promise<void>;
  logout: () => void;
  checkAuth: () => Promise<void>;
  clearError: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      login: async (email: string, password: string) => {
        set({ isLoading: true, error: null });
        try {
          const response = await authAPI.login({ email, password });
          const { token, user } = response.data;
          
          localStorage.setItem('token', token);
          set({ 
            user: user, 
            token, 
            isAuthenticated: true, 
            isLoading: false 
          });
        } catch (error: any) {
          set({ 
            error: error.response?.data?.message || 'Login failed',
            isLoading: false 
          });
          throw error;
        }
      },

      register: async (email: string, password: string, organizationName?: string, role?: string) => {
        set({ isLoading: true, error: null });
        try {
          const response = await authAPI.register({ 
            email, 
            password, 
            organizationName, 
            role 
          });
          const { token, user } = response.data;
          
          localStorage.setItem('token', token);
          set({ 
            user: user, 
            token, 
            isAuthenticated: true, 
            isLoading: false 
          });
        } catch (error: any) {
          set({ 
            error: error.response?.data?.message || 'Registration failed',
            isLoading: false 
          });
          throw error;
        }
      },

      logout: () => {
        localStorage.removeItem('token');
        set({ 
          user: null, 
          token: null, 
          isAuthenticated: false,
          error: null 
        });
      },

      checkAuth: async () => {
        const token = localStorage.getItem('token');
        if (!token) {
          set({ isAuthenticated: false, user: null });
          return;
        }
        
        try {
          const response = await authAPI.me();
          set({ 
            user: response.data.user, 
            token, 
            isAuthenticated: true 
          });
        } catch (error) {
          localStorage.removeItem('token');
          set({ 
            user: null, 
            token: null, 
            isAuthenticated: false 
          });
        }
      },

      clearError: () => set({ error: null }),
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ token: state.token, user: state.user }),
    }
  )
);
