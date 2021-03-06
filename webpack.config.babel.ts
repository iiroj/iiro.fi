/**
 * Register babel to all extensions so that
 * `./server/renderer.tsx` works correctly
 */
require('@babel/register')({
    extensions: ['.es6', '.es', '.jsx', '.js', '.mjs', '.ts', '.tsx'],
})

import LoadablePlugin from '@loadable/webpack-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'
import HtmlRendererWebpackPlugin from 'html-renderer-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import path from 'path'
import TerserJSPlugin from 'terser-webpack-plugin'
import type { Configuration } from 'webpack'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

import { getServerRoutes } from './server/routes'

const renderer = path.resolve('./server/renderer.tsx')

const isProduction = process.env.NODE_ENV === 'production'

const minimizer = isProduction
    ? [
          new TerserJSPlugin({
              extractComments: false,
              terserOptions: {
                  compress: {
                      arguments: true,
                      ecma: 2020,
                      module: true,
                      passes: 2,
                      unsafe_arrows: true,
                  },
                  output: {
                      comments: false,
                      ecma: 2020,
                  },
                  ecma: 2020,
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

const configuration: Configuration = {
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

    /** @ts-expect-error: LoadablePlugin has bad types */
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

export default configuration
