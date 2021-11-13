/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/require-await */

const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin')
const withPlugins = require('next-compose-plugins')

const headers = require('./next/headers')

const config = {
    eslint: { ignoreDuringBuilds: true },
    experimental: {
        esmExternals: true,
    },
    exportPathMap: async (defaultPaths) => defaultPaths,
    headers,
    poweredByHeader: false,
    reactStrictMode: true,
    swcMinify: true,
    target: 'serverless',
    trailingSlash: false,
    typescript: { ignoreBuildErrors: true },
    webpack5: true,
}

const plugins = [createVanillaExtractPlugin]

module.exports = withPlugins(plugins, config)
