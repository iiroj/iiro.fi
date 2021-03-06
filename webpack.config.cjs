// eslint-disable-next-line import/no-unassigned-import
require('@babel/register')

const LoadablePlugin = require('@loadable/webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlRendererWebpackPlugin = require('html-renderer-webpack-plugin')
const path = require('path')
const TerserJSPlugin = require('terser-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const { routes } = require('./src/routes')

const paths = ['/404'].concat(routes.map(([{ path }]) => path))
const renderer = path.resolve('./src/server.jsx')

const isProduction = process.env.NODE_ENV === 'production'

const mode = isProduction ? 'production' : 'development'

const config = {
    devServer: {
        contentBase: path.resolve('./public'),
        historyApiFallback: { index: '/404.html' },
        hot: true,
        port: 3000,
        transportMode: 'ws',
    },

    mode,

    devtool: isProduction ? 'source-map' : 'eval-source-map',

    entry: {
        main: path.resolve('./src/client.jsx'),
    },

    output: {
        chunkFilename: isProduction ? 'build/[name].[chunkhash:8].js' : 'build/[name].js',
        filename: isProduction ? 'build/[name].[chunkhash:8].js' : 'build/[name].js',
        path: path.resolve('./dist'),
        publicPath: '/',
    },

    resolve: {
        extensions: ['.js', '.jsx'],
    },

    module: {
        rules: [
            {
                exclude: undefined,
                test: /\.jsx?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            envName: isProduction ? 'webpack_production' : 'webpack_development',
                        },
                    },
                ],
            },
        ],
    },

    plugins: [
        new LoadablePlugin({ outputAsset: false, writeToDisk: false }),
        new HtmlRendererWebpackPlugin({ paths, renderer }),
        new CopyPlugin({
            patterns: [{ from: 'public', to: '.' }],
        }),
        !isProduction &&
            new ReactRefreshWebpackPlugin({
                overlay: {
                    sockIntegration: 'wds',
                },
            }),
    ].filter(Boolean),

    optimization: {
        minimizer: isProduction
            ? [
                  new TerserJSPlugin({
                      extractComments: false,
                      terserOptions: {
                          compress: {
                              arguments: true,
                              ecma: 8,
                              module: true,
                              passes: 2,
                              unsafe_arrows: true,
                          },
                          output: {
                              comments: false,
                              ecma: 8,
                          },
                          ecma: 8,
                          module: true,
                      },
                  }),
                  new BundleAnalyzerPlugin({
                      analyzerMode: 'disabled',
                      generateStatsFile: true,
                      openAnalyzer: false,
                  }),
              ]
            : undefined,
    },
}

module.exports = config
