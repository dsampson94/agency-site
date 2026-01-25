'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global error:', error);
  }, [error]);

  return (
    <html lang="en">
      <body className="bg-neutral-950 text-white min-h-screen flex items-center justify-center p-4">
        <div className="max-w-lg w-full text-center">
          {/* Error Icon */}
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full flex items-center justify-center">
              <svg
                className="w-12 h-12 text-red-500"
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
          </div>

          {/* Error Message */}
          <h1 className="text-4xl font-bold text-white mb-4">
            Something went wrong
          </h1>
          <p className="text-neutral-400 mb-8 leading-relaxed">
            We encountered an unexpected error. Our team has been notified and is
            working to fix it. Please try again.
          </p>

          {/* Error Details (Development only) */}
          {process.env.NODE_ENV === 'development' && (
            <details className="mb-8 text-left">
              <summary className="cursor-pointer text-sm text-neutral-500 hover:text-neutral-400 mb-2">
                Error Details
              </summary>
              <div className="bg-neutral-900 rounded-lg p-4 overflow-auto max-h-48">
                <code className="text-xs text-red-400 break-all">
                  {error.message}
                </code>
                {error.digest && (
                  <p className="text-xs text-neutral-500 mt-2">
                    Error ID: {error.digest}
                  </p>
                )}
              </div>
            </details>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={reset}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-neutral-900 font-semibold rounded-full hover:bg-neutral-100 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              Try Again
            </button>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-neutral-800 text-white font-semibold rounded-full hover:bg-neutral-700 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Go Home
            </Link>
          </div>

          {/* Support Link */}
          <p className="mt-8 text-sm text-neutral-500">
            Need help?{' '}
            <a
              href="mailto:support@superstack.co.za"
              className="text-blue-400 hover:text-blue-300 underline underline-offset-4"
            >
              Contact Support
            </a>
          </p>
        </div>
      </body>
    </html>
  );
}
