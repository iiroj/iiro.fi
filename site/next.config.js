/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/require-await */

const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin')

const headers = require('./next/headers')

const withVanillaExtract = createVanillaExtractPlugin()

const config = {
    eslint: { ignoreDuringBuilds: true },
    exportPathMap: async (defaultPaths) => defaultPaths,
    headers,
    poweredByHeader: false,
    reactStrictMode: true,
    swcMinify: true,
    target: 'serverless',
    typescript: { ignoreBuildErrors: true },
}

module.exports = withVanillaExtract(config)
