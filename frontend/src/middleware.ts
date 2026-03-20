import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value || 
                request.headers.get('authorization')?.replace('Bearer ', '');
  
  const isAuthPage = request.nextUrl.pathname === '/login' || 
                    request.nextUrl.pathname === '/register';
  const isProtected = !isAuthPage && 
                      request.nextUrl.pathname !== '/' &&
                      request.nextUrl.pathname !== '/health';

  // Allow public routes
  if (!isProtected) {
    return NextResponse.next();
  }

  // For MVP, simple check - in production use proper JWT validation
  if (!token && isProtected) {
    // Allow API routes to handle their own auth
    if (!request.nextUrl.pathname.startsWith('/api')) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (handled by backend)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
