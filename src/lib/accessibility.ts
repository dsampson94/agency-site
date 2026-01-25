/**
 * Advanced Accessibility Utilities (WCAG 2.1 AAA Compliant)
 * Comprehensive tools for building accessible web applications
 */

/**
 * Calculate color contrast ratio (WCAG 2.1)
 */
export function getContrastRatio(foreground: string, background: string): number {
  const getLuminance = (color: string): number => {
    const rgb = color.match(/\d+/g);
    if (!rgb || rgb.length < 3) return 0;

    const [r, g, b] = rgb.map((val) => {
      const channel = parseInt(val) / 255;
      return channel <= 0.03928
        ? channel / 12.92
        : Math.pow((channel + 0.055) / 1.055, 2.4);
    });

    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };

  const l1 = getLuminance(foreground);
  const l2 = getLuminance(background);

  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);

  return (lighter + 0.05) / (darker + 0.05);
}

/**
 * Check if color combination meets WCAG standards
 */
export function meetsWCAG(
  foreground: string,
  background: string,
  level: 'AA' | 'AAA' = 'AA',
  size: 'normal' | 'large' = 'normal'
): boolean {
  const ratio = getContrastRatio(foreground, background);

  if (level === 'AAA') {
    return size === 'large' ? ratio >= 4.5 : ratio >= 7;
  }

  return size === 'large' ? ratio >= 3 : ratio >= 4.5;
}

/**
 * Generate accessible focus styles
 */
export const focusStyles = {
  ring: 'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
  outline: 'focus:outline-2 focus:outline-offset-2 focus:outline-blue-500',
  visible: 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
};

/**
 * ARIA attribute helpers
 */
export const aria = {
  expanded: (isExpanded: boolean) => ({
    'aria-expanded': isExpanded,
  }),
  
  pressed: (isPressed: boolean) => ({
    'aria-pressed': isPressed,
  }),
  
  selected: (isSelected: boolean) => ({
    'aria-selected': isSelected,
  }),
  
  hidden: (isHidden: boolean) => ({
    'aria-hidden': isHidden,
    ...(isHidden && { tabIndex: -1 }),
  }),
  
  disabled: (isDisabled: boolean) => ({
    'aria-disabled': isDisabled,
    ...(isDisabled && { tabIndex: -1 }),
  }),
  
  describedBy: (id: string) => ({
    'aria-describedby': id,
  }),
  
  labelledBy: (id: string) => ({
    'aria-labelledby': id,
  }),
  
  label: (label: string) => ({
    'aria-label': label,
  }),
  
  live: (type: 'polite' | 'assertive' | 'off' = 'polite') => ({
    'aria-live': type,
    'aria-atomic': 'true',
  }),

  controls: (id: string) => ({
    'aria-controls': id,
  }),

  hasPopup: (type: 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog' = 'menu') => ({
    'aria-haspopup': type,
  }),
};

/**
 * Keyboard navigation helpers
 */
export const keyboard = {
  isEnter: (e: KeyboardEvent | React.KeyboardEvent) => e.key === 'Enter',
  isSpace: (e: KeyboardEvent | React.KeyboardEvent) => e.key === ' ',
  isEscape: (e: KeyboardEvent | React.KeyboardEvent) => e.key === 'Escape',
  isTab: (e: KeyboardEvent | React.KeyboardEvent) => e.key === 'Tab',
  isArrowUp: (e: KeyboardEvent | React.KeyboardEvent) => e.key === 'ArrowUp',
  isArrowDown: (e: KeyboardEvent | React.KeyboardEvent) => e.key === 'ArrowDown',
  isArrowLeft: (e: KeyboardEvent | React.KeyboardEvent) => e.key === 'ArrowLeft',
  isArrowRight: (e: KeyboardEvent | React.KeyboardEvent) => e.key === 'ArrowRight',
  isHome: (e: KeyboardEvent | React.KeyboardEvent) => e.key === 'Home',
  isEnd: (e: KeyboardEvent | React.KeyboardEvent) => e.key === 'End',

  handleActivation: (
    e: KeyboardEvent | React.KeyboardEvent,
    callback: () => void
  ) => {
    if (keyboard.isEnter(e) || keyboard.isSpace(e)) {
      e.preventDefault();
      callback();
    }
  },
};

/**
 * Focus management utilities
 */
export const focus = {
  trap: (element: HTMLElement): (() => void) => {
    const focusableSelectors = [
      'a[href]',
      'button:not([disabled])',
      'textarea:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
    ].join(', ');

    const focusableElements = Array.from(
      element.querySelectorAll<HTMLElement>(focusableSelectors)
    );

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!keyboard.isTab(e)) return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    element.addEventListener('keydown', handleKeyDown);

    return () => {
      element.removeEventListener('keydown', handleKeyDown);
    };
  },

  restore: (element?: HTMLElement | null): void => {
    if (element && document.contains(element)) {
      element.focus();
    }
  },

  moveTo: (
    elements: HTMLElement[],
    currentIndex: number,
    direction: 'next' | 'prev' | 'first' | 'last'
  ): number => {
    let newIndex = currentIndex;

    switch (direction) {
      case 'next':
        newIndex = (currentIndex + 1) % elements.length;
        break;
      case 'prev':
        newIndex = currentIndex - 1 < 0 ? elements.length - 1 : currentIndex - 1;
        break;
      case 'first':
        newIndex = 0;
        break;
      case 'last':
        newIndex = elements.length - 1;
        break;
    }

    elements[newIndex]?.focus();
    return newIndex;
  },
};

/**
 * Screen reader only utility class
 */
export const srOnly =
  'absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0 clip-[rect(0,0,0,0)]';

/**
 * Skip to main content link - use SkipToMain component from @/components/SkipToMain
 */

/**
 * Announce to screen readers
 */
export function announce(message: string, priority: 'polite' | 'assertive' = 'polite'): void {
  if (typeof document === 'undefined') return;

  const announcer = document.getElementById('aria-announcer') || createAnnouncer();
  announcer.setAttribute('aria-live', priority);
  announcer.textContent = message;

  // Clear after announcement
  setTimeout(() => {
    announcer.textContent = '';
  }, 1000);
}

function createAnnouncer(): HTMLElement {
  const announcer = document.createElement('div');
  announcer.id = 'aria-announcer';
  announcer.className = srOnly;
  announcer.setAttribute('role', 'status');
  announcer.setAttribute('aria-live', 'polite');
  announcer.setAttribute('aria-atomic', 'true');
  document.body.appendChild(announcer);
  return announcer;
}

/**
 * Check if reduced motion is preferred
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Get motion-safe animation classes
 */
export function motionSafe(classes: string): string {
  return prefersReducedMotion() ? '' : classes;
}

/**
 * Accessible form validation
 */
export interface ValidationResult {
  valid: boolean;
  message?: string;
}

export function getValidationAttributes(
  validation: ValidationResult,
  fieldId: string
): {
  'aria-invalid': boolean;
  'aria-describedby'?: string;
} {
  return {
    'aria-invalid': !validation.valid,
    ...(validation.message && { 'aria-describedby': `${fieldId}-error` }),
  };
}

/**
 * Generate unique IDs for accessibility
 */
let idCounter = 0;
export function generateId(prefix: string = 'a11y'): string {
  idCounter += 1;
  return `${prefix}-${idCounter}`;
}

/**
 * Check if element is in viewport
 */
export function isInViewport(element: HTMLElement): boolean {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/**
 * Scroll element into view accessibly
 */
export function scrollIntoView(
  element: HTMLElement,
  options: ScrollIntoViewOptions = { behavior: 'smooth', block: 'center' }
): void {
  if (prefersReducedMotion()) {
    options.behavior = 'auto';
  }
  element.scrollIntoView(options);
}
