import { rewrite, next } from '@vercel/edge';

export const config = {
  matcher: '/((?!api/auth|lock\\.html|favicon\\.ico|_static).*)',
};

export default function middleware(request: Request) {
  const cookieHeader = request.headers.get('cookie') || '';
  const tokenMatch = cookieHeader.match(/cheqout_access=([^;]+)/);
  const token = tokenMatch ? tokenMatch[1] : null;

  // Valid token — let them through with security headers
  if (token && token === process.env.ACCESS_TOKEN) {
    return next({
      headers: {
        'X-Robots-Tag': 'noindex, nofollow, noarchive',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
      },
    });
  }

  // No valid token — serve the lock screen
  return rewrite(new URL('/lock.html', request.url));
}
