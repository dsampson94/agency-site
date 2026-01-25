/**
 * Comprehensive Error Handling System
 * Provides structured error classes and handling utilities
 */

/**
 * Base application error
 */
export class AppError extends Error {
  constructor(
    message: string,
    public code: string,
    public statusCode: number = 500,
    public isOperational: boolean = true,
    public context?: Record<string, any>
  ) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      code: this.code,
      statusCode: this.statusCode,
      context: this.context,
    };
  }
}

/**
 * Validation error
 */
export class ValidationError extends AppError {
  constructor(message: string, context?: Record<string, any>) {
    super(message, 'VALIDATION_ERROR', 400, true, context);
  }
}

/**
 * Authentication error
 */
export class AuthenticationError extends AppError {
  constructor(message: string = 'Authentication required', context?: Record<string, any>) {
    super(message, 'AUTH_ERROR', 401, true, context);
  }
}

/**
 * Authorization error
 */
export class AuthorizationError extends AppError {
  constructor(message: string = 'Insufficient permissions', context?: Record<string, any>) {
    super(message, 'AUTHORIZATION_ERROR', 403, true, context);
  }
}

/**
 * Not found error
 */
export class NotFoundError extends AppError {
  constructor(resource: string = 'Resource', context?: Record<string, any>) {
    super(`${resource} not found`, 'NOT_FOUND', 404, true, context);
  }
}

/**
 * Rate limit error
 */
export class RateLimitError extends AppError {
  constructor(
    message: string = 'Too many requests',
    public retryAfter?: number,
    context?: Record<string, any>
  ) {
    super(message, 'RATE_LIMIT_ERROR', 429, true, context);
  }
}

/**
 * Database error
 */
export class DatabaseError extends AppError {
  constructor(message: string, context?: Record<string, any>) {
    super(message, 'DATABASE_ERROR', 500, false, context);
  }
}

/**
 * External service error
 */
export class ExternalServiceError extends AppError {
  constructor(service: string, message: string, context?: Record<string, any>) {
    super(`${service} error: ${message}`, 'EXTERNAL_SERVICE_ERROR', 502, false, context);
  }
}

/**
 * Error logger
 */
export class ErrorLogger {
  private static instance: ErrorLogger;

  private constructor() {}

  static getInstance(): ErrorLogger {
    if (!ErrorLogger.instance) {
      ErrorLogger.instance = new ErrorLogger();
    }
    return ErrorLogger.instance;
  }

  log(error: Error, context?: Record<string, any>): void {
    const isProduction = process.env.NODE_ENV === 'production';

    const errorInfo = {
      name: error.name,
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
      context,
      ...(error instanceof AppError && {
        code: error.code,
        statusCode: error.statusCode,
        isOperational: error.isOperational,
      }),
    };

    if (isProduction) {
      // In production, send to error tracking service
      this.sendToErrorTracking(errorInfo);
    } else {
      // In development, log to console with formatting
      console.error('🚨 Error:', errorInfo);
    }
  }

  private sendToErrorTracking(errorInfo: any): void {
    // Integrate with services like Sentry, DataDog, etc.
    // For now, just log
    console.error('[Error Tracking]', errorInfo);
  }
}

/**
 * Safe async handler for API routes
 */
export function asyncHandler<T extends any[], R>(
  fn: (...args: T) => Promise<R>
): (...args: T) => Promise<R> {
  return async (...args: T): Promise<R> => {
    try {
      return await fn(...args);
    } catch (error) {
      ErrorLogger.getInstance().log(
        error instanceof Error ? error : new Error(String(error)),
        { args }
      );
      throw error;
    }
  };
}

/**
 * Error boundary fallback component props
 */
export interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

/**
 * Format error for user display
 */
export function formatErrorForUser(error: unknown): {
  message: string;
  code?: string;
  statusCode?: number;
} {
  if (error instanceof AppError) {
    return {
      message: error.message,
      code: error.code,
      statusCode: error.statusCode,
    };
  }

  if (error instanceof Error) {
    // Don't expose internal error details in production
    const isProduction = process.env.NODE_ENV === 'production';
    return {
      message: isProduction ? 'An unexpected error occurred' : error.message,
      code: 'INTERNAL_ERROR',
      statusCode: 500,
    };
  }

  return {
    message: 'An unexpected error occurred',
    code: 'UNKNOWN_ERROR',
    statusCode: 500,
  };
}

/**
 * Retry logic for operations
 */
export async function retryOperation<T>(
  operation: () => Promise<T>,
  options: {
    maxRetries?: number;
    delayMs?: number;
    backoff?: boolean;
    onRetry?: (attempt: number, error: Error) => void;
  } = {}
): Promise<T> {
  const { maxRetries = 3, delayMs = 1000, backoff = true, onRetry } = options;

  let lastError: Error;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await operation();
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));

      if (attempt < maxRetries) {
        const delay = backoff ? delayMs * Math.pow(2, attempt) : delayMs;
        onRetry?.(attempt + 1, lastError);
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  }

  throw lastError!;
}

/**
 * Circuit breaker pattern
 */
export class CircuitBreaker {
  private failures = 0;
  private lastFailureTime: number | null = null;
  private state: 'closed' | 'open' | 'half-open' = 'closed';
  private readonly threshold: number;
  private readonly resetTimeout: number;

  constructor(
    threshold: number = 5,
    _timeout: number = 60000,
    resetTimeout: number = 30000
  ) {
    this.threshold = threshold;
    this.resetTimeout = resetTimeout;
  }

  async execute<T>(operation: () => Promise<T>): Promise<T> {
    if (this.state === 'open') {
      if (
        this.lastFailureTime &&
        Date.now() - this.lastFailureTime >= this.resetTimeout
      ) {
        this.state = 'half-open';
      } else {
        throw new AppError(
          'Circuit breaker is open',
          'CIRCUIT_BREAKER_OPEN',
          503
        );
      }
    }

    try {
      const result = await operation();

      if (this.state === 'half-open') {
        this.reset();
      }

      return result;
    } catch (error) {
      this.recordFailure();
      throw error;
    }
  }

  private recordFailure(): void {
    this.failures++;
    this.lastFailureTime = Date.now();

    if (this.failures >= this.threshold) {
      this.state = 'open';
    }
  }

  private reset(): void {
    this.failures = 0;
    this.lastFailureTime = null;
    this.state = 'closed';
  }

  getState(): { state: string; failures: number } {
    return {
      state: this.state,
      failures: this.failures,
    };
  }
}

/**
 * Global error handler for unhandled rejections
 */
export function setupGlobalErrorHandlers(): void {
  if (typeof window === 'undefined') return;

  window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
    ErrorLogger.getInstance().log(
      event.reason instanceof Error ? event.reason : new Error(String(event.reason)),
      { type: 'unhandledRejection' }
    );
  });

  window.addEventListener('error', (event) => {
    console.error('Uncaught error:', event.error);
    ErrorLogger.getInstance().log(
      event.error instanceof Error ? event.error : new Error(String(event.error)),
      { type: 'uncaughtError' }
    );
  });
}
