/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */

const presets = []

const plugins = ['@loadable/babel-plugin', '@vanilla-extract/babel-plugin']

module.exports = (api) => {
    const env = api.env()

    api.cache.using(() => env)

    if (env.startsWith('node')) {
        presets.push(
            [
                '@babel/preset-env',
                {
                    targets: { node: 'current' },
                },
            ],
            '@babel/preset-react',
            '@babel/preset-typescript'
        )
        plugins.push('@babel/plugin-syntax-dynamic-import')
    }

    return { presets, plugins }
}
