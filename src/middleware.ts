import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * Advanced Middleware with Security, Performance, and SEO enhancements
 */
export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  const { pathname } = request.nextUrl

  // Enhanced security headers
  response.headers.set('X-DNS-Prefetch-Control', 'on')
  response.headers.set('X-Frame-Options', 'SAMEORIGIN')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), interest-cohort=()')
  
  // HSTS for production
  if (process.env.NODE_ENV === 'production') {
    response.headers.set(
      'Strict-Transport-Security',
      'max-age=63072000; includeSubDomains; preload'
    )
  }

  // Optimized cache headers for different asset types
  if (pathname.startsWith('/_next/static/')) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable')
  } else if (pathname.startsWith('/_next/image')) {
    response.headers.set('Cache-Control', 'public, max-age=86400, stale-while-revalidate=604800')
  } else if (pathname.match(/\.(jpg|jpeg|png|gif|webp|avif|svg|ico)$/)) {
    response.headers.set('Cache-Control', 'public, max-age=86400, stale-while-revalidate=604800')
  } else if (pathname.match(/\.(woff|woff2|ttf|otf|eot)$/)) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable')
  }
  
  // Preload critical resources for homepage
  if (pathname === '/') {
    const preloadHeaders = [
      '</fonts/Mona-Sans.var.woff2>; rel=preload; as=font; type=font/woff2; crossorigin',
      '</icon.svg>; rel=preload; as=image',
    ]
    response.headers.set('Link', preloadHeaders.join(', '))
  }

  // Add timing headers for performance monitoring
  response.headers.set('X-Response-Time', String(Date.now()))

  // SEO: Canonical URL handling
  if (!pathname.includes('.') && !pathname.startsWith('/api')) {
    const url = new URL(request.url)
    
    // Remove trailing slash for consistency (except root)
    if (pathname !== '/' && pathname.endsWith('/')) {
      url.pathname = pathname.slice(0, -1)
      return NextResponse.redirect(url, 301)
    }

    // Lowercase URLs for consistency
    if (pathname !== pathname.toLowerCase()) {
      url.pathname = pathname.toLowerCase()
      return NextResponse.redirect(url, 301)
    }
  }

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api routes
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, robots.txt, sitemap.xml
     */
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|manifest.json).*)',
  ],
}