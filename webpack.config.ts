import CaseSensitivePathsPlugin from "case-sensitive-paths-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";
import FriendlyErrorsWebpackPlugin from "friendly-errors-webpack-plugin";
import HtmlRendererWebpackPlugin from "html-renderer-webpack-plugin";
import path from "path";
import TerserPlugin from "terser-webpack-plugin";
import WatchExternalFilesPlugin from "webpack-watch-files-plugin";
import webpack, { Configuration } from "webpack";

import renderer from "./src/renderer";
import { routes } from "./src/routes";

const isProduction = process.env.NODE_ENV === "production";
const staticRoutes = [...Array.from(routes).map(route => route[0]), "/404"];

const config: Configuration = {
  target: "web",

  mode: isProduction ? "production" : "development",

  devtool: isProduction ? "nosources-source-map" : "eval",

  resolve: {
    extensions: [".ts", ".js", ".tsx", ".jsx", ".jpg"]
  },

  entry: {
    client: path.resolve("./src/client.ts")
  },

  output: {
    chunkFilename: isProduction
      ? "static/[chunkhash:8].js"
      : "static/[name].[chunkhash:8].js",
    filename: isProduction ? "static/[hash:8].js" : "static/[name].[hash:8].js",
    path: path.resolve("./public"),
    publicPath: "/"
  },

  module: {
    rules: [
      {
        test: /\.(jsx?|tsx?)$/,
        exclude: /node_modules/,
        use: {
          loader: require.resolve("babel-loader"),
          options: {
            envName: "webpack"
          }
        }
      }
    ]
  },

  plugins: [
    new CaseSensitivePathsPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(isProduction ? "production" : "development")
      }
    }),
    new HtmlRendererWebpackPlugin({ paths: staticRoutes, renderer }),
    new CopyPlugin([{ from: "static/" }])
  ],

  optimization: {}
};

if (isProduction) {
  config.optimization!.minimizer = [
    new TerserPlugin({
      parallel: true
    })
  ];
} else {
  config.plugins!.push(
    new WatchExternalFilesPlugin({ files: ["./src/**/*"], exclude: [/\.DS*/] }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new FriendlyErrorsWebpackPlugin()
  );
}

export default config;
