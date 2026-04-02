// Validation utilities

export const validationRules = {
  required: (value: any) => value ? null : 'This field is required',
  email: (value: string) => 
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? null : 'Invalid email address',
  minLength: (min: number) => (value: string) => 
    value.length >= min ? null : `Must be at least ${min} characters`,
  maxLength: (max: number) => (value: string) => 
    value.length <= max ? null : `Must be at most ${max} characters`,
  url: (value: string) => 
    /^https?:\/\/.+/.test(value) ? null : 'Invalid URL',
  apiKey: (value: string) => 
    value.startsWith('nv_') ? null : 'Invalid API key format',
};

export function validate(value: any, rules: ((value: any) => string | null)[]): string | null {
  for (const rule of rules) {
    const error = rule(value);
    if (error) return error;
  }
  return null;
}

export function validateForm(data: Record<string, any>, schema: Record<string, ((value: any) => string | null)[]>[]): Record<string, string> {
  const errors: Record<string, string> = {};
  
  for (const field of Object.keys(schema)) {
    const error = validate(data[field], schema[field]);
    if (error) errors[field] = error;
  }
  
  return errors;
}