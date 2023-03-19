export const headers = async () => [
    {
        source: '/:path*',
        headers: [
            /** @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy */
            {
                key: 'Content-Security-Policy',
                value: [
                    `default-src 'self'`,
                    `connect-src 'self' vitals.vercel-insights.com`,
                    `script-src 'self' 'unsafe-inline' 'unsafe-eval' cdn.vercel-insights.com`,
                ].join(';'),
            },
            /** @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security */
            {
                key: 'Strict-Transport-Security',
                value: 'max-age=63072000; includeSubDomains; preload',
            },
            /** @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection */
            {
                key: 'X-XSS-Protection',
                value: '1; mode=block',
            },
            /** @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options */
            {
                key: 'X-Frame-Options',
                value: 'DENY',
            },
            /** @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options */
            {
                key: 'X-Content-Type-Options',
                value: 'nosniff',
            },
            /** @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy */
            {
                key: 'Referrer-Policy',
                value: 'strict-origin-when-cross-origin',
            },
            /** @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy */
            {
                key: 'Cross-Origin-Embedder-Policy',
                value: 'require-corp; report-to="default";',
            },
            /** @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy */
            {
                key: 'Cross-Origin-Opener-Policy',
                value: 'same-site; report-to="default";',
            },
            /** @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Cross-Origin_Resource_Policy_(CORP) */
            {
                key: 'Cross-Origin-Resource-Policy',
                value: 'same-site',
            },
        ],
    },
];
