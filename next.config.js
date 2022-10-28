const isProduction = process.env.NODE_ENV === 'production'

// @ts-check
/** @type {import('next').NextConfig} */
module.exports = {
    cleanDistDir: true,

    eslint: {
        ignoreDuringBuilds: true,
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
                { key: 'Link', value: `</styles.css>; rel=preload; as=style` },
                { key: 'Content-Security-Policy', value: isProduction ? `default-src 'self'` : '' },
                { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
                { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubdomains; preload' },
                { key: 'X-Content-Type-Options', value: 'nosniff' },
                { key: 'X-Frame-Options', value: 'DENY' },
                { key: 'X-XSS-Protection', value: '1; mode=block' },
            ],
        },
    ],

    typescript: {
        ignoreBuildErrors: true,
    },
}
