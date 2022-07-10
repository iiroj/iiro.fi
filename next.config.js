const isProduction = process.env.NODE_ENV === 'production'

/**
 * @type {import('next').NextConfig}
 */
module.exports = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    experimental: {
        runtime: 'experimental-edge',
    },
    /* eslint-disable-next-line @typescript-eslint/require-await  */
    headers: async () => [
        {
            source: '/:path*',
            headers: [
                isProduction ? { key: 'Content-Security-Policy', value: `default-src 'self'` } : null,
                { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
                { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubdomains; preload' },
                { key: 'X-Content-Type-Options', value: 'nosniff' },
                { key: 'X-Frame-Options', value: 'DENY' },
                { key: 'X-XSS-Protection', value: '1; mode=block' },
            ].filter(Boolean),
        },
    ],
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
        localeDetection: false,
    },
    swcMinify: true,
    typescript: {
        ignoreBuildErrors: true,
    },
}
