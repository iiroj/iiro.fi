export const SECURITY_HEADERS = {
  ["Content-Security-Policy"]: [
    `default-src 'self'`,
    `connect-src https://cloudflareinsights.com`,
    `script-src 'self' https://static.cloudflareinsights.com`,
  ].join(";"),
  ["Cross-Origin-Embedder-Policy"]: `require-corp; report-to="default"`,
  ["Cross-Origin-Opener-Policy"]: `same-site; report-to="default"`,
  ["Cross-Origin-Resource-Policy"]: `same-site`,
  ["Permissions-Policy"]: `browsing-topics=(), interest-cohort=()`,
  ["Referrer-Policy"]: `strict-origin-when-cross-origin`,
  ["Strict-Transport-Security"]: `max-age=31536000; includeSubDomains`,
  ["X-Content-Type-Options"]: `nosniff`,
  ["X-Frame-Options"]: `DENY`,
};
