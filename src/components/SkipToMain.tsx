'use client';

/**
 * Skip to Main Content Link
 * WCAG 2.1 compliant skip navigation for keyboard users
 */
export function SkipToMain() {
  return (
    <a
      href="#main-content"
      className="
        absolute left-0 top-0 z-50
        bg-blue-600 text-white font-semibold
        px-4 py-2 rounded-br-lg
        -translate-y-full focus:translate-y-0
        transition-transform duration-200
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
      "
    >
      Skip to main content
    </a>
  );
}

export default SkipToMain;
