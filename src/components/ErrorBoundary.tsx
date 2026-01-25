'use client';

import React, { Component, type ReactNode } from 'react';
import { ErrorLogger } from '@/lib/errors';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

/**
 * Comprehensive Error Boundary Component
 * Catches and handles React component errors gracefully
 */
export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    // Log error
    ErrorLogger.getInstance().log(error, {
      componentStack: errorInfo.componentStack,
      type: 'React Error Boundary',
    });

    // Call custom error handler if provided
    this.props.onError?.(error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      // Use custom fallback if provided
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-neutral-950 px-4">
          <div className="max-w-md w-full">
            <div className="bg-neutral-900 border border-red-500/20 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <h1 className="text-2xl font-bold text-white">Something went wrong</h1>
              </div>

              <p className="text-neutral-300 mb-6 leading-relaxed">
                We apologize for the inconvenience. An unexpected error has occurred. 
                Our team has been notified and is working to fix it.
              </p>

              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="mb-6">
                  <summary className="cursor-pointer text-sm text-neutral-400 hover:text-neutral-300 mb-2">
                    Error Details (Development Only)
                  </summary>
                  <div className="bg-neutral-950 rounded-lg p-4 overflow-auto max-h-48">
                    <code className="text-xs text-red-400 break-all">
                      {this.state.error.toString()}
                    </code>
                  </div>
                </details>
              )}

              <div className="flex gap-3">
                <button
                  onClick={() => this.setState({ hasError: false, error: null })}
                  className="flex-1 bg-neutral-800 hover:bg-neutral-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Try Again
                </button>
                <button
                  onClick={() => window.location.href = '/'}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all"
                >
                  Go Home
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

/**
 * HOC to wrap components with error boundary
 */
export function withErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  fallback?: ReactNode
): React.FC<P> {
  return function WithErrorBoundaryWrapper(props: P) {
    return (
      <ErrorBoundary fallback={fallback}>
        <Component {...props} />
      </ErrorBoundary>
    );
  };
}
