const presetEnv = {}

const presets = [
    ['@babel/preset-env', presetEnv],
    '@babel/preset-react',
    [
        '@emotion/babel-preset-css-prop',
        {
            sourceMap: true,
            autoLabel: 'never',
            cssPropOptimization: true,
        },
    ],
]

const plugins = ['@loadable/babel-plugin']

module.exports = (api) => {
    const env = api.env()

    api.cache.using(() => env)

    if (env.startsWith('webpack')) {
        presetEnv.modules = false
        presetEnv.targets = { esmodules: true }

        if (env.endsWith('development')) {
            plugins.push(['react-refresh/babel', { skipEnvCheck: true }])
        }
    } else if (env.startsWith('node')) {
        presetEnv.targets = { node: 'current' }
        plugins.push('@babel/plugin-syntax-dynamic-import')
    }

    return { presets, plugins }
}
