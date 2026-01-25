/**
 * Advanced React Hooks Collection
 * Custom hooks for common patterns and state management
 */

import { useState, useEffect, useCallback, useRef, useMemo, useSyncExternalStore } from 'react';
import { debounce, throttle } from '../performance';

/**
 * Hook for managing async state
 */
interface AsyncState<T> {
  data: T | null;
  error: Error | null;
  isLoading: boolean;
}

export function useAsync<T>(
  asyncFn: () => Promise<T>,
  deps: React.DependencyList = []
): AsyncState<T> & { execute: () => Promise<void> } {
  const [state, setState] = useState<AsyncState<T>>({
    data: null,
    error: null,
    isLoading: true,
  });

  const execute = useCallback(async () => {
    setState((prev) => ({ ...prev, isLoading: true, error: null }));
    try {
      const data = await asyncFn();
      setState({ data, error: null, isLoading: false });
    } catch (error) {
      setState({ data: null, error: error as Error, isLoading: false });
    }
  }, deps);

  useEffect(() => {
    execute();
  }, [execute]);

  return { ...state, execute };
}

/**
 * Hook for local storage state with SSR safety
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((prev: T) => T)) => void] {
  // Use lazy initialization
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = useCallback(
    (value: T | ((prev: T) => T)) => {
      try {
        const valueToStore = value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        
        if (typeof window !== 'undefined') {
          window.localStorage.setItem(key, JSON.stringify(valueToStore));
        }
      } catch (error) {
        console.warn(`Error setting localStorage key "${key}":`, error);
      }
    },
    [key, storedValue]
  );

  return [storedValue, setValue];
}

/**
 * Hook for debounced value
 */
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

/**
 * Hook for throttled callback
 */
export function useThrottle<T extends (...args: any[]) => any>(
  fn: T,
  delay: number
): T {
  const fnRef = useRef(fn);
  fnRef.current = fn;

  return useMemo(
    () => throttle((...args: Parameters<T>) => fnRef.current(...args), delay) as T,
    [delay]
  );
}

/**
 * Hook for intersection observer
 */
interface UseIntersectionObserverOptions {
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
  freezeOnceVisible?: boolean;
}

export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
): [React.RefObject<HTMLElement>, boolean] {
  const { threshold = 0, root = null, rootMargin = '0px', freezeOnceVisible = false } = options;
  
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (freezeOnceVisible && isIntersecting) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold, root, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, root, rootMargin, freezeOnceVisible, isIntersecting]);

  return [ref as React.RefObject<HTMLElement>, isIntersecting];
}

/**
 * Hook for window size
 */
interface WindowSize {
  width: number;
  height: number;
}

export function useWindowSize(): WindowSize {
  const getSize = useCallback((): WindowSize => {
    if (typeof window === 'undefined') {
      return { width: 0, height: 0 };
    }
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }, []);

  const [windowSize, setWindowSize] = useState<WindowSize>(getSize);

  useEffect(() => {
    const handleResize = debounce(() => {
      setWindowSize(getSize());
    }, 250);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [getSize]);

  return windowSize;
}

/**
 * Hook for media query
 */
export function useMediaQuery(query: string): boolean {
  const subscribe = useCallback(
    (callback: () => void) => {
      if (typeof window === 'undefined') return () => {};
      
      const matchMedia = window.matchMedia(query);
      matchMedia.addEventListener('change', callback);
      return () => matchMedia.removeEventListener('change', callback);
    },
    [query]
  );

  const getSnapshot = useCallback(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia(query).matches;
  }, [query]);

  const getServerSnapshot = useCallback(() => false, []);

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

/**
 * Hook for previous value
 */
export function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

/**
 * Hook for click outside detection
 */
export function useClickOutside<T extends HTMLElement>(
  handler: () => void
): React.RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const element = ref.current;
      if (!element || element.contains(event.target as Node)) {
        return;
      }
      handler();
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [handler]);

  return ref;
}

/**
 * Hook for keyboard shortcuts
 */
interface KeyboardShortcut {
  key: string;
  ctrlKey?: boolean;
  altKey?: boolean;
  shiftKey?: boolean;
  metaKey?: boolean;
}

export function useKeyboardShortcut(
  shortcut: KeyboardShortcut,
  callback: (e: KeyboardEvent) => void
): void {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (
        e.key.toLowerCase() === shortcut.key.toLowerCase() &&
        !!e.ctrlKey === !!shortcut.ctrlKey &&
        !!e.altKey === !!shortcut.altKey &&
        !!e.shiftKey === !!shortcut.shiftKey &&
        !!e.metaKey === !!shortcut.metaKey
      ) {
        e.preventDefault();
        callback(e);
      }
    };

    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [shortcut, callback]);
}

/**
 * Hook for copy to clipboard
 */
export function useCopyToClipboard(): [string | null, (text: string) => Promise<boolean>] {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copy = useCallback(async (text: string): Promise<boolean> => {
    if (!navigator?.clipboard) {
      console.warn('Clipboard not supported');
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      return true;
    } catch (error) {
      console.warn('Copy failed', error);
      setCopiedText(null);
      return false;
    }
  }, []);

  return [copiedText, copy];
}

/**
 * Hook for reduced motion preference
 */
export function useReducedMotion(): boolean {
  return useMediaQuery('(prefers-reduced-motion: reduce)');
}

/**
 * Hook for dark mode preference
 */
export function useDarkMode(): boolean {
  return useMediaQuery('(prefers-color-scheme: dark)');
}

/**
 * Hook for scroll position
 */
interface ScrollPosition {
  x: number;
  y: number;
}

export function useScrollPosition(): ScrollPosition {
  const [position, setPosition] = useState<ScrollPosition>({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = throttle(() => {
      setPosition({ x: window.scrollX, y: window.scrollY });
    }, 100);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return position;
}

/**
 * Hook for countdown timer
 */
export function useCountdown(
  targetDate: Date | number,
  interval: number = 1000
): { days: number; hours: number; minutes: number; seconds: number } {
  const [timeLeft, setTimeLeft] = useState(() => {
    const target = typeof targetDate === 'number' ? targetDate : targetDate.getTime();
    return Math.max(0, target - Date.now());
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const target = typeof targetDate === 'number' ? targetDate : targetDate.getTime();
      setTimeLeft(Math.max(0, target - Date.now()));
    }, interval);

    return () => clearInterval(timer);
  }, [targetDate, interval]);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

/**
 * Hook for toggle state
 */
export function useToggle(
  initialValue: boolean = false
): [boolean, () => void, (value: boolean) => void] {
  const [value, setValue] = useState(initialValue);
  const toggle = useCallback(() => setValue((v) => !v), []);
  return [value, toggle, setValue];
}

/**
 * Hook for mounted state
 */
export function useMounted(): boolean {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}
