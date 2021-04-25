require('@babel/register')({
    extensions: ['.es6', '.es', '.jsx', '.js', '.mjs', '.ts', '.tsx'],
})

const path = require('path')

const isProduction = process.env.NODE_ENV === 'production'

const config = {
    target: 'webworker',

    mode: isProduction ? 'production' : 'development',

    devtool: isProduction ? 'source-map' : 'eval-source-map',

    entry: {
        index: path.resolve('./index.ts'),
    },

    output: {
        filename: '[name].js',
        path: path.resolve('./dist'),
        publicPath: '/',
    },

    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },

    module: {
        rules: [
            {
                exclude: undefined,
                test: /\.(jsx?|tsx?)$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            envName: isProduction ? 'node_production' : 'node_development',
                        },
                    },
                ],
            },
        ],
    },
}

module.exports = config
