const isProduction = process.env.NODE_ENV === 'production'

// @ts-check
/** @type {import('next').NextConfig} */
module.exports = {
    cleanDistDir: true,

    eslint: {
        ignoreDuringBuilds: true,
    },

    experimental: {
        browsersListForSwc: true,
        runtime: 'experimental-edge',
    },

    generateBuildId: () => {
        if (process.env.GITHUB_SHA) {
            return process.env.GITHUB_SHA
        }

        return null
    },

    headers: () => [
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

    swcMinify: true,

    typescript: {
        ignoreBuildErrors: true,
    },
}
