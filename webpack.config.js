const path = require('path');
const webpack = require('webpack');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const HtmlRendererWebpackPlugin = require('html-renderer-webpack-plugin');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const renderer = require('./src/renderer');
const routes = require('./src/client/routes');

const paths = Object.keys(routes).map(r => routes[r].path);

const isProduction = process.env.NODE_ENV === 'production';

const config = {
  mode: isProduction ? 'production' : 'development',

  devtool: isProduction ? 'nosources-source-map' : 'eval',

  entry: {
    client: path.resolve('./src/client/index.js')
  },

  output: {
    chunkFilename: isProduction ? '[chunkhash:8].js' : '[name].js',
    filename: isProduction ? '[chunkhash:8].js' : '[name].js',
    path: path.resolve('./build/site'),
    publicPath: '/'
  },

  resolve: {
    extensions: ['.js']
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.resolve('./src/client'),
        use: {
          loader: require.resolve('babel-loader'),
          options: {
            envName: isProduction ? 'production' : 'development'
          }
        }
      }
    ]
  },

  plugins: [
    new CaseSensitivePathsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(isProduction ? 'production' : 'development')
      }
    }),
    new HtmlRendererWebpackPlugin({
      paths,
      renderer
    })
  ],

  optimization: undefined
};

if (isProduction) {
  config.plugins.push(
    new ServiceWorkerWebpackPlugin({
      entry: path.resolve('./src/sw.js'),
      excludes: ['**/.*', '**/*.map', '**/*.hot-update-json']
    })
  );

  config.optimization = {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: 'initial',
          maxInitialRequests: 5,
          minSize: 0,
          minChunks: 2
        },
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          priority: 10,
          enforce: true
        }
      }
    },
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: false,
        uglifyOptions: {
          mangle: true,
          output: {
            beautify: false,
            comments: false
          }
        }
      })
    ]
  };
}

module.exports = config;
