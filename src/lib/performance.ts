/**
 * Advanced Performance Utilities
 * Implements sophisticated caching, memoization, and optimization strategies
 */

import { cache } from 'react';

/**
 * Advanced debounce with leading/trailing edge control
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  options: { leading?: boolean; trailing?: boolean; maxWait?: number } = {}
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  let lastCallTime = 0;
  let lastInvokeTime = 0;
  let result: ReturnType<T>;

  const { leading = false, trailing = true, maxWait } = options;

  function invokeFunc(time: number, args: Parameters<T>) {
    lastInvokeTime = time;
    result = func(...args);
    return result;
  }

  return function (this: any, ...args: Parameters<T>) {
    const time = Date.now();
    const isInvoking = shouldInvoke(time);

    lastCallTime = time;

    if (isInvoking) {
      if (timeout === null && leading) {
        return invokeFunc(time, args);
      }
      if (maxWait !== undefined && time - lastInvokeTime >= maxWait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        return invokeFunc(time, args);
      }
    }

    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      timeout = null;
      if (trailing) {
        invokeFunc(Date.now(), args);
      }
    }, wait);

    return result;
  };

  function shouldInvoke(time: number): boolean {
    const timeSinceLastCall = time - lastCallTime;
    return (
      lastCallTime === 0 ||
      timeSinceLastCall >= wait ||
      (maxWait !== undefined && time - lastInvokeTime >= maxWait)
    );
  }
}

/**
 * Throttle function with leading/trailing options
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  options: { leading?: boolean; trailing?: boolean } = {}
): (...args: Parameters<T>) => void {
  return debounce(func, wait, { ...options, maxWait: wait });
}

/**
 * Advanced memoization with TTL and size limits
 */
export function memoizeWithTTL<T extends (...args: any[]) => any>(
  fn: T,
  options: {
    ttl?: number;
    maxSize?: number;
    keyGenerator?: (...args: Parameters<T>) => string;
  } = {}
): T {
  const { ttl = 5 * 60 * 1000, maxSize = 100, keyGenerator } = options;
  const defaultKeyGen = (...args: Parameters<T>) => JSON.stringify(args);
  const getKey = keyGenerator || defaultKeyGen;

  const cache = new Map<string, { value: ReturnType<T>; timestamp: number }>();

  return ((...args: Parameters<T>): ReturnType<T> => {
    const key = getKey(...args);
    const now = Date.now();

    // Check if cached and not expired
    const cached = cache.get(key);
    if (cached && now - cached.timestamp < ttl) {
      return cached.value;
    }

    // Compute new value
    const value = fn(...args);

    // Implement LRU eviction if size limit exceeded
    if (cache.size >= maxSize) {
      const firstKey = cache.keys().next().value;
      if (firstKey !== undefined) {
        cache.delete(firstKey);
      }
    }

    cache.set(key, { value, timestamp: now });
    return value;
  }) as T;
}

/**
 * React Server Components cache wrapper
 */
export const cachedFetch = cache(async (url: string, options?: RequestInit) => {
  const response = await fetch(url, {
    ...options,
    next: { revalidate: 3600 }, // 1 hour cache
  });

  if (!response.ok) {
    throw new Error(`Fetch failed: ${response.status} ${response.statusText}`);
  }

  return response.json();
});

/**
 * Lazy loading with Intersection Observer
 */
export function createLazyLoader<T>(
  loader: () => Promise<T>,
  options: IntersectionObserverInit = {}
): {
  load: () => Promise<T>;
  observe: (element: Element) => void;
  unobserve: (element: Element) => void;
} {
  let loadPromise: Promise<T> | null = null;
  let hasLoaded = false;

  const defaultOptions: IntersectionObserverInit = {
    rootMargin: '50px',
    threshold: 0.01,
    ...options,
  };

  const observer =
    typeof IntersectionObserver !== 'undefined'
      ? new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasLoaded) {
              load();
            }
          });
        }, defaultOptions)
      : null;

  function load(): Promise<T> {
    if (!loadPromise) {
      hasLoaded = true;
      loadPromise = loader();
    }
    return loadPromise;
  }

  return {
    load,
    observe: (element: Element) => observer?.observe(element),
    unobserve: (element: Element) => observer?.unobserve(element),
  };
}

/**
 * Measure component render performance
 */
export function measurePerformance(name: string, fn: () => void): void {
  if (typeof performance === 'undefined') return;

  const start = performance.now();
  fn();
  const end = performance.now();

  console.log(`[Performance] ${name}: ${(end - start).toFixed(2)}ms`);
}

/**
 * Web Vitals reporting helper
 */
export function reportWebVitals(metric: {
  id: string;
  name: string;
  value: number;
  label: 'web-vital' | 'custom';
}): void {
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.log(`[Web Vital] ${metric.name}:`, metric.value);
  }

  // Send to analytics using global gtag
  if (typeof globalThis !== 'undefined' && globalThis.gtag) {
    globalThis.gtag('event', metric.name, {
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      event_category: metric.label === 'web-vital' ? 'Web Vitals' : 'Custom Metrics',
      event_label: metric.id,
      non_interaction: true,
    });
  }
}

/**
 * Preload critical resources
 */
export function preloadResource(
  href: string,
  as: 'script' | 'style' | 'font' | 'image'
): void {
  if (typeof document === 'undefined') return;

  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;

  if (as === 'font') {
    link.crossOrigin = 'anonymous';
  }

  document.head.appendChild(link);
}

/**
 * Prefetch resources for future navigation
 */
export function prefetchResource(href: string): void {
  if (typeof document === 'undefined') return;

  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = href;

  document.head.appendChild(link);
}

/**
 * Check if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Efficient array batching for large operations
 */
export async function batchProcess<T, R>(
  items: T[],
  processor: (item: T) => Promise<R>,
  batchSize: number = 10
): Promise<R[]> {
  const results: R[] = [];

  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    const batchResults = await Promise.all(batch.map(processor));
    results.push(...batchResults);
  }

  return results;
}

declare global {
  // eslint-disable-next-line no-var
  var gtag: ((...args: unknown[]) => void) | undefined;
}
