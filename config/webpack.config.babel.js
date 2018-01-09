import webpack from "webpack";
import StaticSiteGeneratorPlugin from "static-site-generator-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import SWPrecacheWebpackPlugin from "sw-precache-webpack-plugin";
import WebpackAssetsManifest from "webpack-assets-manifest";
import IgnoreEmitPlugin from "ignore-emit-webpack-plugin";

import getPaths from "../utils/paths";

const isProduction = process.env.NODE_ENV === "production";
const PORT = 8080;

const config = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["react-hot-loader/webpack", "babel-loader", "eslint-loader"],
      },
      {
        test: /\.(ico|jpg|pdf|png|woff|woff2)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]?[hash]",
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ",.jsx"],
  },
  output: {
    filename: "[name].js?[hash]",
    libraryTarget: "umd",
    path: __dirname + "/dist",
    publicPath: "/",
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": { NODE_ENV: JSON.stringify(isProduction ? "production" : "development") },
    }),
  ],
};

if (isProduction) {
  config.entry = {
    bundle: "./src/index.js",
    renderer: "./utils/renderer.js",
  };
  config.plugins.push(
    new StaticSiteGeneratorPlugin({
      entry: "renderer",
      paths: getPaths(),
      globals: {
        navigator: {},
        window: {},
      },
    }),
    new IgnoreEmitPlugin(/^renderer\.js.*/),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new SWPrecacheWebpackPlugin({
      cacheId: "iiro.fi",
      dontCacheBustUrlsMatching: /\.\w{8}\./,
      filename: "service-worker.js",
      minify: true,
      navigateFallback: isProduction ? "https://iiro.fi/" : `http://localhost:${PORT}/` + "index.html",
      staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
    }),
    new WebpackAssetsManifest({
      output: "asset-manifest.json",
    })
  );
} else {
  config.entry = {
    dev: ["webpack-dev-server/client?http://localhost:8080", "webpack/hot/only-dev-server"],
    bundle: "./src/index.js",
  };
  config.devtool = "cheap-module-eval-source-map";
  config.devServer = {
    port: PORT,
    overlay: true,
    historyApiFallback: true,
  };
  config.plugins.push(
    new HtmlWebpackPlugin({
      template: "./template.html",
    })
  );
}

export default config;
