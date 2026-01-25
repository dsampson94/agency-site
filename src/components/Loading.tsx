'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'spinner' | 'dots' | 'pulse' | 'skeleton';
  className?: string;
  text?: string;
  fullScreen?: boolean;
}

const sizes = {
  sm: { spinner: 'w-4 h-4', dots: 'w-2 h-2' },
  md: { spinner: 'w-8 h-8', dots: 'w-3 h-3' },
  lg: { spinner: 'w-12 h-12', dots: 'w-4 h-4' },
  xl: { spinner: 'w-16 h-16', dots: 'w-5 h-5' },
};

/**
 * Spinner variant
 */
function Spinner({ size, className }: { size: keyof typeof sizes; className?: string }) {
  return (
    <svg
      className={clsx('animate-spin text-blue-500', sizes[size].spinner, className)}
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
 * Animated dots variant
 */
function Dots({ size, className }: { size: keyof typeof sizes; className?: string }) {
  return (
    <div className={clsx('flex items-center gap-1', className)}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={clsx(
            'rounded-full bg-blue-500 animate-pulse',
            sizes[size].dots
          )}
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </div>
  );
}

/**
 * Pulse variant
 */
function Pulse({ size, className }: { size: keyof typeof sizes; className?: string }) {
  return (
    <div className={clsx('relative', className)}>
      <div
        className={clsx(
          'bg-blue-500/30 rounded-full animate-ping absolute inset-0',
          sizes[size].spinner
        )}
      />
      <div
        className={clsx(
          'bg-blue-500 rounded-full relative',
          sizes[size].spinner
        )}
      />
    </div>
  );
}

/**
 * Main Loading component
 */
export function Loading({
  size = 'md',
  variant = 'spinner',
  className,
  text,
  fullScreen = false,
}: LoadingProps) {
  const content = (
    <div
      className={clsx('flex flex-col items-center justify-center gap-4', className)}
      role="status"
      aria-live="polite"
    >
      {variant === 'spinner' && <Spinner size={size} />}
      {variant === 'dots' && <Dots size={size} />}
      {variant === 'pulse' && <Pulse size={size} />}
      
      {text && (
        <p className="text-neutral-400 text-sm animate-pulse">{text}</p>
      )}
      
      <span className="sr-only">Loading...</span>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-neutral-950/90 backdrop-blur-sm flex items-center justify-center z-50">
        {content}
      </div>
    );
  }

  return content;
}

/**
 * Skeleton loader for content placeholders
 */
interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
  animation?: 'pulse' | 'wave' | 'none';
}

export function Skeleton({
  className,
  variant = 'text',
  width,
  height,
  animation = 'pulse',
}: SkeletonProps) {
  const baseClasses = 'bg-neutral-800';
  
  const variantClasses = {
    text: 'rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-lg',
  };
  
  const animationClasses = {
    pulse: 'animate-pulse',
    wave: 'relative overflow-hidden before:absolute before:inset-0 before:translate-x-[-100%] before:bg-gradient-to-r before:from-transparent before:via-neutral-700/50 before:to-transparent before:animate-[shimmer_2s_infinite]',
    none: '',
  };

  return (
    <div
      className={clsx(
        baseClasses,
        variantClasses[variant],
        animationClasses[animation],
        className
      )}
      style={{
        width: width ?? (variant === 'text' ? '100%' : undefined),
        height: height ?? (variant === 'text' ? '1em' : undefined),
      }}
      aria-hidden="true"
    />
  );
}

/**
 * Page loading state
 */
export function PageLoading() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) return prev;
        return prev + Math.random() * 10;
      });
    }, 200);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-neutral-950 flex flex-col items-center justify-center z-50">
      {/* Logo animation */}
      <div className="mb-8">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl animate-pulse flex items-center justify-center">
          <span className="text-white text-2xl font-bold">S</span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-64 h-1 bg-neutral-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Loading text */}
      <p className="mt-4 text-neutral-400 text-sm">
        Loading experience...
      </p>
    </div>
  );
}

/**
 * Content skeleton for cards/articles
 */
export function ContentSkeleton({ lines = 3 }: { lines?: number }) {
  return (
    <div className="space-y-4 p-6 bg-neutral-900 rounded-2xl">
      <Skeleton variant="rectangular" height={200} animation="wave" />
      <div className="space-y-2">
        <Skeleton variant="text" height={24} width="60%" />
        {Array.from({ length: lines }).map((_, i) => (
          <Skeleton
            key={i}
            variant="text"
            height={16}
            width={i === lines - 1 ? '80%' : '100%'}
          />
        ))}
      </div>
    </div>
  );
}

/**
 * Card skeleton grid
 */
export function CardSkeletonGrid({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <ContentSkeleton key={i} />
      ))}
    </div>
  );
}
