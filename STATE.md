# N-Verify Protocol - Frontend State

## Global State (Zustand)

```typescript
// Auth Store
interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  login: () => Promise<void>;
  logout: () => void;
}

// Verification Store
interface VerificationState {
  verifications: Verification[];
  current: Verification | null;
  create: (data) => Promise<void>;
  fetch: (id) => Promise<void>;
  list: () => Promise<void>;
}
```

## Local State

- useState for form inputs
- useState for UI state
- useEffect for side effects
