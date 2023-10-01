import { next } from "@vercel/edge";

const SECURITY_HEADERS = {
  "Content-Security-Policy": `default-src 'self'; style-src 'self' 'unsafe-inline'`,
  "Cross-Origin-Embedder-Policy": `require-corp; report-to="default"`,
  "Cross-Origin-Opener-Policy": `same-site; report-to="default"`,
  "Cross-Origin-Resource-Policy": `same-site`,
  "Permissions-Policy": `browsing-topics=(), interest-cohort=()`,
  "Referrer-Policy": `strict-origin-when-cross-origin`,
  "Strict-Transport-Security": `max-age=31536000; includeSubDomains; preload`,
  "X-Content-Type-Options": `nosniff`,
  "X-Frame-Options": `DENY`,
  "X-XSS-Protection": `1; mode=`,
};

/** @typedef {import('@vercel/edge').RequestContext} RequestContext */

/** @type {(request: Request, context: RequestContext) => Promise<Response>} */
export const GET = async (request, context) => {
  return next({
    headers: {
      ...SECURITY_HEADERS,
    },
  });
};

export const config = {
  matcher:
    "/((?!static/|favicon.ico|robots.txt|site.webmanifest|sitemap.xml).*)",
};
