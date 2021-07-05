// eslint-disable-next-line import/no-unassigned-import
require('@babel/register')({
    extensions: ['.es6', '.es', '.jsx', '.js', '.mjs', '.ts', '.tsx'],
})

const LoadablePlugin = require('@loadable/webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlRendererWebpackPlugin = require('html-renderer-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const TerserJSPlugin = require('terser-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const { getServerRoutes } = require('./server/routes')

const renderer = path.resolve('./server/renderer.tsx')

const isProduction = process.env.NODE_ENV === 'production'

const minimizer = isProduction
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
    : undefined

const config = {
    devServer: {
        historyApiFallback: { index: '/404.html' },
        hot: true,
        port: 3000,
        static: path.resolve('./public'),
    },

    mode: isProduction ? 'production' : 'development',

    target: 'browserslist',

    devtool: isProduction ? 'source-map' : false,

    entry: {
        main: path.resolve('./src/client.tsx'),
    },

    experiments: {
        outputModule: true,
    },

    output: {
        chunkFilename: isProduction ? 'build/[name].[chunkhash:8].js' : 'build/[name].js',
        filename: isProduction ? 'build/[name].[chunkhash:8].js' : 'build/[name].js',
        module: true,
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
                        options: { envName: isProduction ? 'webpack_production' : 'webpack_development' },
                    },
                    {
                        loader: '@linaria/webpack-loader',
                        options: { sourceMap: true },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: { esModule: true },
                    },
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true },
                    },
                ],
            },
        ],
    },

    plugins: [
        new LoadablePlugin({ outputAsset: false, writeToDisk: false }),
        new HtmlRendererWebpackPlugin({ paths: getServerRoutes, renderer }),
        new CopyPlugin({
            patterns: [{ from: 'public', to: '.' }],
        }),
        new MiniCssExtractPlugin({
            filename: isProduction ? 'build/[name].[chunkhash:8].css' : 'build/[name].css',
            experimentalUseImportModule: true,
        }),
        !isProduction &&
            new ReactRefreshWebpackPlugin({
                esModule: true,
                overlay: {
                    sockIntegration: 'wds',
                    sockProtocol: 'ws',
                },
            }),
    ].filter(Boolean),

    optimization: {
        chunkIds: isProduction ? 'deterministic' : 'named',
        minimizer,
        moduleIds: isProduction ? 'deterministic' : 'named',
        removeAvailableModules: isProduction,
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'async',
            minSize: 500,
        },
    },
}

module.exports = config
