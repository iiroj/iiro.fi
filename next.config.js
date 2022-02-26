/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/require-await */

const headers = require('./next/headers')

const config = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    exportPathMap: async (defaultPaths) => defaultPaths,
    headers,
    poweredByHeader: false,
    reactStrictMode: true,
    swcMinify: true,
    typescript: {
        ignoreBuildErrors: true,
    },
}

module.exports = config
