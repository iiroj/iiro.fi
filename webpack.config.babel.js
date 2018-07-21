import path from 'path';
import webpack from 'webpack';
import CaseSensitivePathsPlugin from 'case-sensitive-paths-webpack-plugin';
import HtmlRendererWebpackPlugin from 'html-renderer-webpack-plugin';
import ServiceWorkerWebpackPlugin from 'serviceworker-webpack-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

import renderer from './src/renderer';
import App from './src/client/components/App';

const paths = Object.keys(App.pages);

const isProduction = process.env.NODE_ENV === 'production';

const config = {
  devServer: {
    contentBase: path.join(__dirname, 'static'),
    historyApiFallback: {
      index: '/404.html',
      disableDotRule: true,
      rewrites: [
        {
          from: /.*[^\/]$/,
          to: ({ parsedUrl: { pathname } }) => (pathname.endsWith('.html') ? pathname : pathname + '.html')
        }
      ],
      verbose: true
    },
    hot: true,
    overlay: true,
    port: 3000,
    proxy: {
      '/.netlify': {
        target: 'http://localhost:9000',
        pathRewrite: { '^/.netlify/functions': '' }
      }
    }
  },

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
} else {
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = config;
