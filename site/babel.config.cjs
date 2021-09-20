const presetEnv = {}

const presets = [['@babel/preset-env', presetEnv], '@babel/preset-react', '@babel/preset-typescript']

const plugins = ['@loadable/babel-plugin', '@vanilla-extract/babel-plugin']

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
