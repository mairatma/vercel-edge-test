import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Trigger this middleware to run on the `/secret-page` route
export const config = {
  matcher: '/product/:slug*',
};

export function middleware(req: NextRequest) {
  // Extract country. Default to US if not found.
  const city = (req.geo && req.geo.city)?.toLowerCase() ?? 'unknown';
  console.log('req.geo', req.geo)

  console.log(`Visitor from ${city}`, req.nextUrl.pathname);

  req.nextUrl.pathname += `/${city}`;

  console.log(`Going to ${req.nextUrl.pathname}`);

  // Rewrite to URL
  const response = NextResponse.rewrite(req.nextUrl);

  response.cookies.set('city', city)

  return response
}
