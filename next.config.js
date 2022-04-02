/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/require-await */

const headers = require('./next/headers')

const config = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    experimental: {
        runtime: 'edge',
    },
    headers,
    swcMinify: true,
    typescript: {
        ignoreBuildErrors: true,
    },
}

module.exports = config
