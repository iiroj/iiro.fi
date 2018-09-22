import 'dotenv/config';

import path from 'path';
import webpack from 'webpack';
import CaseSensitivePathsPlugin from 'case-sensitive-paths-webpack-plugin';
import HtmlRendererWebpackPlugin from 'html-renderer-webpack-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

import routes from './src/routes';
import renderer from './src/renderer';

const isProduction = process.env.NODE_ENV === 'production';

const config = {
  devServer: {
    contentBase: path.join(__dirname, 'static'),
    historyApiFallback: {
      index: '/404.html'
    },
    hot: true,
    overlay: true,
    port: 3000
  },

  mode: isProduction ? 'production' : 'development',

  devtool: isProduction ? 'nosources-source-map' : 'eval',

  entry: {
    client: path.resolve('./src/index.js')
  },

  output: {
    chunkFilename: isProduction ? '[chunkhash:8].js' : '[name].js',
    filename: isProduction ? '[chunkhash:8].js' : '[name].js',
    path: path.resolve('./build'),
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
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
        NODE_ENV: JSON.stringify(isProduction ? 'production' : 'development'),
        LAMBDA_BASE_URL: JSON.stringify(process.env.LAMBDA_BASE_URL)
      }
    }),
    new HtmlRendererWebpackPlugin({
      paths: Object.keys(routes),
      renderer
    })
  ],

  optimization: {
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
    }
  }
};

if (isProduction) {
  config.plugins.push(new CopyWebpackPlugin([{ from: 'static', to: '.' }]));

  config.optimization.minimizer = [
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
  ];
} else {
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = config;
