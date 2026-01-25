import Link from 'next/link';
import { Container } from '@/components/Container';
import { FadeIn } from '@/components/FadeIn';

export const metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for could not be found.',
};

export default function NotFound() {
  return (
    <Container className="flex h-full items-center pt-24 sm:pt-32 lg:pt-40">
      <FadeIn className="w-full max-w-2xl mx-auto">
        <div className="text-center">
          {/* Animated 404 */}
          <div className="relative mb-8">
            <span className="text-[12rem] font-bold leading-none bg-gradient-to-br from-neutral-800 to-neutral-900 bg-clip-text text-transparent select-none">
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
            </div>
          </div>

          {/* Content */}
          <h1 className="font-display text-3xl font-semibold text-neutral-950 sm:text-4xl mb-4">
            Page not found
          </h1>
          <p className="text-neutral-600 max-w-md mx-auto mb-8 leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. 
            Let&apos;s get you back on track.
          </p>

          {/* Search and Navigation */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-neutral-950 text-white font-semibold rounded-full hover:bg-neutral-800 transition-all hover:scale-105"
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
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-neutral-300 text-neutral-950 font-semibold rounded-full hover:border-neutral-500 hover:bg-neutral-50 transition-all"
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Contact Us
            </Link>
          </div>

          {/* Quick Links */}
          <div className="border-t border-neutral-200 pt-8">
            <p className="text-sm text-neutral-500 mb-4">Popular destinations</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/services"
                className="text-sm font-medium text-neutral-950 hover:text-blue-600 transition-colors"
              >
                Services
              </Link>
              <span className="text-neutral-300">•</span>
              <Link
                href="/work"
                className="text-sm font-medium text-neutral-950 hover:text-blue-600 transition-colors"
              >
                Our Work
              </Link>
              <span className="text-neutral-300">•</span>
              <Link
                href="/about"
                className="text-sm font-medium text-neutral-950 hover:text-blue-600 transition-colors"
              >
                About Us
              </Link>
              <span className="text-neutral-300">•</span>
              <Link
                href="/blog"
                className="text-sm font-medium text-neutral-950 hover:text-blue-600 transition-colors"
              >
                Blog
              </Link>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  );
}
