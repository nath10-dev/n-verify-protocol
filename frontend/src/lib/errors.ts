// API Error handling utilities

export class APIError extends Error {
  status: number;
  code?: string;
  
  constructor(message: string, status: number = 500, code?: string) {
    super(message);
    this.name = 'APIError';
    this.status = status;
    this.code = code;
  }
}

export class NetworkError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'NetworkError';
  }
}

export class ValidationError extends Error {
  fields: Record<string, string>;
  
  constructor(fields: Record<string, string>) {
    super('Validation failed');
    this.name = 'ValidationError';
    this.fields = fields;
  }
}

export async function handleAPIResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    if (response.status === 401) {
      throw new APIError('Unauthorized', 401, 'UNAUTHORIZED');
    }
    if (response.status === 403) {
      throw new APIError('Forbidden', 403, 'FORBIDDEN');
    }
    if (response.status === 404) {
      throw new APIError('Not found', 404, 'NOT_FOUND');
    }
    if (response.status === 429) {
      throw new APIError('Rate limited', 429, 'RATE_LIMITED');
    }
    
    const data = await response.json().catch(() => ({}));
    throw new APIError(data.message || 'Something went wrong', response.status, data.code);
  }
  
  return response.json();
}

export function isNetworkError(error: unknown): boolean {
  return error instanceof TypeError || error instanceof NetworkError;
}

export function isAPIError(error: unknown): boolean {
  return error instanceof APIError;
}

export function getErrorMessage(error: unknown): string {
  if (error instanceof APIError) return error.message;
  if (error instanceof Error) return error.message;
  return 'Something went wrong';
}

// Retry logic
export async function retry<T>(
  fn: () => Promise<T>,
  options: { retries: number; delay: number } = { retries: 3, delay: 1000 }
): Promise<T> {
  let lastError: Error;
  
  for (let i = 0; i < options.retries; i++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error as Error;
      if (i < options.retries - 1) {
        await new Promise(r => setTimeout(r, options.delay));
      }
    }
  }
  
  throw lastError!;
}