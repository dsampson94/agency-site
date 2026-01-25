'use client';

import Link from 'next/link';
import { forwardRef, type ReactNode, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from 'react';
import clsx from 'clsx';

/**
 * Button variants for different use cases
 */
const variants = {
  primary: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40',
  secondary: 'bg-neutral-800 text-white hover:bg-neutral-700 border border-neutral-700',
  outline: 'bg-transparent text-white border border-neutral-600 hover:border-neutral-500 hover:bg-neutral-800/50',
  ghost: 'bg-transparent text-neutral-300 hover:text-white hover:bg-neutral-800/50',
  danger: 'bg-red-600 text-white hover:bg-red-700 shadow-lg shadow-red-500/25',
  success: 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-500/25',
  invert: 'bg-white text-neutral-900 hover:bg-neutral-100',
};

/**
 * Button sizes
 */
const sizes = {
  xs: 'px-3 py-1 text-xs',
  sm: 'px-4 py-1.5 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-base',
  xl: 'px-8 py-4 text-lg',
};

/**
 * Base button styles
 */
const baseStyles = `
  inline-flex items-center justify-center gap-2
  rounded-full font-semibold
  transition-all duration-200
  focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500
  disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none
  active:scale-[0.98]
`;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
  href?: string;
  external?: boolean;
}

export interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
  href: string;
  external?: boolean;
}

/**
 * Loading spinner component
 */
function LoadingSpinner({ className }: { className?: string }) {
  return (
    <svg
      className={clsx('animate-spin', className)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}

/**
 * Enhanced Button Component with full TypeScript support
 * Supports variants, sizes, loading states, and icons
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'secondary',
      size = 'sm',
      isLoading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      className,
      children,
      disabled,
      href,
      external = false,
      type = 'button',
      ...props
    },
    ref
  ) => {
    const buttonClasses = clsx(
      baseStyles,
      variants[variant],
      sizes[size],
      fullWidth && 'w-full',
      className
    );

    const content = (
      <>
        {isLoading && <LoadingSpinner className="w-4 h-4" />}
        {!isLoading && leftIcon}
        <span className="relative">{children}</span>
        {rightIcon}
      </>
    );

    // If href is provided, render as link
    if (href) {
      if (external) {
        return (
          <a
            href={href}
            className={buttonClasses}
            target="_blank"
            rel="noopener noreferrer"
            {...(props as any)}
          >
            {content}
          </a>
        );
      }

      return (
        <Link href={href} className={buttonClasses} {...(props as any)}>
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || isLoading}
        className={buttonClasses}
        aria-busy={isLoading}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';

/**
 * Icon-only button variant
 */
export interface IconButtonProps extends Omit<ButtonProps, 'children' | 'leftIcon' | 'rightIcon'> {
  icon: ReactNode;
  'aria-label': string;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, className, size = 'md', ...props }, ref) => {
    const iconSizes = {
      xs: 'w-6 h-6',
      sm: 'w-8 h-8',
      md: 'w-10 h-10',
      lg: 'w-12 h-12',
      xl: 'w-14 h-14',
    };

    return (
      <Button
        ref={ref}
        className={clsx(iconSizes[size], 'p-0', className)}
        {...props}
      >
        {icon}
      </Button>
    );
  }
);

IconButton.displayName = 'IconButton';

/**
 * Button group for grouped actions
 */
export function ButtonGroup({
  children,
  className,
  direction = 'horizontal',
}: {
  children: ReactNode;
  className?: string;
  direction?: 'horizontal' | 'vertical';
}) {
  return (
    <div
      className={clsx(
        'inline-flex',
        direction === 'horizontal' ? 'flex-row' : 'flex-col',
        '[&>*:not(:first-child)]:rounded-l-none',
        '[&>*:not(:last-child)]:rounded-r-none',
        '[&>*:not(:first-child)]:-ml-px',
        className
      )}
      role="group"
    >
      {children}
    </div>
  );
}
