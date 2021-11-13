/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/require-await */

const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin')
const { getGlobalCssLoader } = require('next/dist/build/webpack/config/blocks/css/loaders')

const headers = require('./next/headers')

const config = {
    eslint: { ignoreDuringBuilds: true },
    exportPathMap: async (defaultPaths) => defaultPaths,
    headers,
    poweredByHeader: false,
    reactStrictMode: true,
    swcMinify: true,
    target: 'serverless',
    typescript: { ignoreBuildErrors: true },
    webpack(config, { dev, isServer }) {
        const oneOfRule = config.module.rules.find((rule) => 'oneOf' in rule)

        oneOfRule.oneOf.unshift({
            test: /\.vanilla\.css$/i,
            sideEffects: true,
            use: getGlobalCssLoader(
                {
                    assetPrefix: config.assetPrefix,
                    isClient: !isServer,
                    isServer,
                    isDevelopment: dev,
                    future: config.future || {},
                    experimental: config.experimental || {},
                },
                [],
                []
            ),
        })

        config.plugins.push(new VanillaExtractPlugin())

        return config
    },
}

module.exports = config
