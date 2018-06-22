import path from 'path';
import webpack from 'webpack';
import CaseSensitivePathsPlugin from 'case-sensitive-paths-webpack-plugin';
import HtmlRendererWebpackPlugin from 'html-renderer-webpack-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

import renderer from './src/renderer';
import routes from './src/client/routes';

const paths = Object.keys(routes).map(r => routes[r].path);

const isProduction = process.env.NODE_ENV === 'production';

const config = {
  mode: isProduction ? 'production' : 'development',

  devtool: isProduction ? 'source-map' : 'eval',

  entry: {
    client: path.resolve('./src/client/index.js')
  },

  output: {
    chunkFilename: isProduction ? '[name].[hash:8].js' : '[name].js',
    filename: isProduction ? '[name].[hash:8].js' : '[name].js',
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
        sourceMap: true,
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

export default config;
