/**
 * Advanced API Rate Limiter Middleware
 * Provides flexible rate limiting with multiple strategies
 */

import { NextRequest, NextResponse } from 'next/server';
import { RateLimiter } from './validation';

interface RateLimitConfig {
  windowMs: number;
  maxRequests: number;
  message?: string;
  statusCode?: number;
  skipSuccessfulRequests?: boolean;
  skipFailedRequests?: boolean;
  keyGenerator?: (req: NextRequest) => string;
}

const limiters = new Map<string, RateLimiter>();

/**
 * Get or create rate limiter for a specific key
 */
function getRateLimiter(key: string, config: RateLimitConfig): RateLimiter {
  if (!limiters.has(key)) {
    limiters.set(key, new RateLimiter(config.maxRequests, config.windowMs));
  }
  return limiters.get(key)!;
}

/**
 * Default key generator - uses IP address
 */
function defaultKeyGenerator(req: NextRequest): string {
  const forwarded = req.headers.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(',')[0] : req.headers.get('x-real-ip') || 'unknown';
  return `ip:${ip}`;
}

/**
 * Rate limit middleware factory
 */
export function rateLimit(config: RateLimitConfig) {
  const {
    windowMs,
    maxRequests,
    message = 'Too many requests, please try again later.',
    statusCode = 429,
    keyGenerator = defaultKeyGenerator,
  } = config;

  return async function rateLimitMiddleware(
    req: NextRequest,
    handler: (req: NextRequest) => Promise<NextResponse>
  ): Promise<NextResponse> {
    const key = keyGenerator(req);
    const limiter = getRateLimiter(key, config);

    if (!limiter.check(key)) {
      return NextResponse.json(
        {
          error: message,
          code: 'RATE_LIMIT_EXCEEDED',
        },
        {
          status: statusCode,
          headers: {
            'Retry-After': String(Math.ceil(windowMs / 1000)),
            'X-RateLimit-Limit': String(maxRequests),
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': String(Date.now() + windowMs),
          },
        }
      );
    }

    const response = await handler(req);

    // Add rate limit headers to successful responses
    response.headers.set('X-RateLimit-Limit', String(maxRequests));

    return response;
  };
}

/**
 * Sliding window rate limiter
 */
export class SlidingWindowRateLimiter {
  private windows = new Map<string, Array<{ timestamp: number; weight: number }>>();

  constructor(
    private maxRequests: number,
    private windowMs: number
  ) {}

  check(identifier: string, weight: number = 1): boolean {
    const now = Date.now();
    const windowStart = now - this.windowMs;

    let requests = this.windows.get(identifier) || [];

    // Remove old requests
    requests = requests.filter((req) => req.timestamp > windowStart);

    // Calculate total weight
    const totalWeight = requests.reduce((sum, req) => sum + req.weight, 0);

    if (totalWeight + weight > this.maxRequests) {
      this.windows.set(identifier, requests);
      return false;
    }

    requests.push({ timestamp: now, weight });
    this.windows.set(identifier, requests);

    // Cleanup old entries
    if (this.windows.size > 10000) {
      for (const [key, reqs] of this.windows.entries()) {
        if (reqs.every((req) => req.timestamp < windowStart)) {
          this.windows.delete(key);
        }
      }
    }

    return true;
  }
}

/**
 * Token bucket rate limiter for burst handling
 */
export class TokenBucketRateLimiter {
  private buckets = new Map<
    string,
    { tokens: number; lastRefill: number }
  >();

  constructor(
    private capacity: number,
    private refillRate: number,
    private refillInterval: number
  ) {}

  check(identifier: string, cost: number = 1): boolean {
    const now = Date.now();
    let bucket = this.buckets.get(identifier);

    if (!bucket) {
      bucket = { tokens: this.capacity, lastRefill: now };
      this.buckets.set(identifier, bucket);
    }

    // Refill tokens based on time elapsed
    const timeSinceRefill = now - bucket.lastRefill;
    const refills = Math.floor(timeSinceRefill / this.refillInterval);

    if (refills > 0) {
      bucket.tokens = Math.min(
        this.capacity,
        bucket.tokens + refills * this.refillRate
      );
      bucket.lastRefill = now;
    }

    // Check if enough tokens
    if (bucket.tokens >= cost) {
      bucket.tokens -= cost;
      return true;
    }

    return false;
  }
}

/**
 * Pre-configured rate limiters for common use cases
 */
export const rateLimiters = {
  // Strict - for sensitive operations like auth
  strict: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    maxRequests: 5,
    message: 'Too many attempts, please try again later.',
  },

  // Standard - for general API endpoints
  standard: {
    windowMs: 60 * 1000, // 1 minute
    maxRequests: 60,
  },

  // Relaxed - for public endpoints
  relaxed: {
    windowMs: 60 * 1000, // 1 minute
    maxRequests: 100,
  },

  // Burst - allows short bursts
  burst: {
    windowMs: 1000, // 1 second
    maxRequests: 10,
  },
};

/**
 * API route wrapper with rate limiting
 */
export function withRateLimit(
  handler: (req: NextRequest) => Promise<NextResponse>,
  config: RateLimitConfig
) {
  return rateLimit(config)(null as any, handler);
}
