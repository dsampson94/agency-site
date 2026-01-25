/**
 * Advanced Input Validation and Sanitization
 * Implements comprehensive validation rules with security best practices
 */

/**
 * Email validation with RFC 5322 compliance
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegex.test(email) && email.length <= 254;
}

/**
 * Phone number validation (international format)
 */
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^\+?[1-9]\d{1,14}$/;
  const cleaned = phone.replace(/[\s\-\(\)]/g, '');
  return phoneRegex.test(cleaned);
}

/**
 * URL validation
 */
export function isValidURL(url: string): boolean {
  try {
    const parsed = new URL(url);
    return ['http:', 'https:'].includes(parsed.protocol);
  } catch {
    return false;
  }
}

/**
 * Sanitize HTML to prevent XSS
 */
export function sanitizeHTML(input: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '/': '&#x2F;',
  };

  return input.replace(/[&<>"'\/]/g, (char) => map[char] || char);
}

/**
 * Sanitize input for SQL (basic protection)
 */
export function sanitizeSQL(input: string): string {
  return input.replace(/['";\\]/g, '');
}

/**
 * Validate password strength
 */
export function validatePassword(
  password: string
): {
  valid: boolean;
  score: number;
  feedback: string[];
} {
  const feedback: string[] = [];
  let score = 0;

  if (password.length < 8) {
    feedback.push('Password must be at least 8 characters');
  } else if (password.length >= 12) {
    score += 2;
  } else {
    score += 1;
  }

  if (/[a-z]/.test(password)) score += 1;
  if (/[A-Z]/.test(password)) score += 1;
  if (/[0-9]/.test(password)) score += 1;
  if (/[^a-zA-Z0-9]/.test(password)) score += 2;

  if (!/[a-z]/.test(password)) feedback.push('Add lowercase letters');
  if (!/[A-Z]/.test(password)) feedback.push('Add uppercase letters');
  if (!/[0-9]/.test(password)) feedback.push('Add numbers');
  if (!/[^a-zA-Z0-9]/.test(password)) feedback.push('Add special characters');

  // Check for common patterns
  if (/(.)\1{2,}/.test(password)) {
    feedback.push('Avoid repeated characters');
    score -= 1;
  }

  if (/^[0-9]+$/.test(password)) {
    feedback.push('Don\'t use only numbers');
    score -= 2;
  }

  return {
    valid: score >= 4 && password.length >= 8,
    score: Math.max(0, Math.min(6, score)),
    feedback,
  };
}

/**
 * Rate limiting helper
 */
export class RateLimiter {
  private requests: Map<string, number[]> = new Map();

  constructor(
    private maxRequests: number,
    private windowMs: number
  ) {}

  check(identifier: string): boolean {
    const now = Date.now();
    const timestamps = this.requests.get(identifier) || [];

    // Remove old timestamps outside the window
    const validTimestamps = timestamps.filter((ts) => now - ts < this.windowMs);

    if (validTimestamps.length >= this.maxRequests) {
      return false;
    }

    validTimestamps.push(now);
    this.requests.set(identifier, validTimestamps);

    // Cleanup old entries
    if (this.requests.size > 10000) {
      const cutoff = now - this.windowMs;
      for (const [key, timestamps] of this.requests.entries()) {
        if (timestamps.every((ts) => ts < cutoff)) {
          this.requests.delete(key);
        }
      }
    }

    return true;
  }

  reset(identifier: string): void {
    this.requests.delete(identifier);
  }
}

/**
 * Input length validation
 */
export function validateLength(
  input: string,
  min: number,
  max: number
): { valid: boolean; message?: string } {
  if (input.length < min) {
    return { valid: false, message: `Minimum length is ${min} characters` };
  }
  if (input.length > max) {
    return { valid: false, message: `Maximum length is ${max} characters` };
  }
  return { valid: true };
}

/**
 * Comprehensive form validation
 */
export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: string) => boolean;
  message?: string;
}

export function validateField(
  value: string,
  rules: ValidationRule
): { valid: boolean; message?: string } {
  if (rules.required && !value.trim()) {
    return { valid: false, message: rules.message || 'This field is required' };
  }

  if (rules.minLength && value.length < rules.minLength) {
    return {
      valid: false,
      message: rules.message || `Minimum length is ${rules.minLength}`,
    };
  }

  if (rules.maxLength && value.length > rules.maxLength) {
    return {
      valid: false,
      message: rules.message || `Maximum length is ${rules.maxLength}`,
    };
  }

  if (rules.pattern && !rules.pattern.test(value)) {
    return { valid: false, message: rules.message || 'Invalid format' };
  }

  if (rules.custom && !rules.custom(value)) {
    return { valid: false, message: rules.message || 'Invalid value' };
  }

  return { valid: true };
}

/**
 * CSRF token generator
 */
export function generateCSRFToken(): string {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

/**
 * Check for SQL injection patterns
 */
export function detectSQLInjection(input: string): boolean {
  const sqlPatterns = [
    /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|EXECUTE)\b)/i,
    /(UNION.*SELECT)/i,
    /(--|\*\/|\/\*)/,
    /('|('')|;|\/\*|\*\/|--)/,
  ];

  return sqlPatterns.some((pattern) => pattern.test(input));
}

/**
 * Check for XSS patterns
 */
export function detectXSS(input: string): boolean {
  const xssPatterns = [
    /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    /javascript:/gi,
    /on\w+\s*=/gi,
    /<iframe/gi,
    /<object/gi,
    /<embed/gi,
  ];

  return xssPatterns.some((pattern) => pattern.test(input));
}

/**
 * Comprehensive input sanitization
 */
export function sanitizeInput(
  input: string,
  options: {
    allowHTML?: boolean;
    maxLength?: number;
    stripXSS?: boolean;
  } = {}
): string {
  let sanitized = input.trim();

  if (options.stripXSS && detectXSS(sanitized)) {
    sanitized = sanitizeHTML(sanitized);
  }

  if (!options.allowHTML) {
    sanitized = sanitizeHTML(sanitized);
  }

  if (options.maxLength) {
    sanitized = sanitized.substring(0, options.maxLength);
  }

  return sanitized;
}
