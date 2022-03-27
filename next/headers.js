/* eslint-disable @typescript-eslint/require-await */

const isProduction = process.env.NODE_ENV === 'production'

const staticHeaders = [
    isProduction
        ? {
              key: 'Content-Security-Policy',
              value: `default-src 'self'; style-src 'unsafe-inline' 'self'; connect-src 'sef' https://vitals.vercel-insights.com;`,
          }
        : null,
    { key: 'Permissions-Policy', value: 'interest-cohort=()' /** Disable Google's FLoC */ },
    { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
    { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubdomains; preload' },
    { key: 'X-Content-Type-Options', value: 'nosniff' },
    { key: 'X-Frame-Options', value: 'DENY' },
    { key: 'X-XSS-Protection', value: '1; mode=block' },
].filter(Boolean)

const headers = async () => [{ source: '/:path*', headers: staticHeaders }]

module.exports = headers
