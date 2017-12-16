"use strict";

const webpack = require("webpack");
const StaticSiteGeneratorPlugin = require("static-site-generator-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");
const WebpackAssetsManifest = require("webpack-assets-manifest");
const IgnoreEmitPlugin = require("ignore-emit-webpack-plugin");

const getPaths = require("./utils/render-paths");

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
        test: /\.(md|css)$/,
        use: ["raw-loader"],
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
  devServer: {
    port: PORT,
    overlay: true,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    }),
  ],
};

if (isProduction) {
  config.entry = {
    bundle: "./src/index.js",
    renderer: "./src/renderer.js",
  };
  config.devtool = "cheap-module-source-map";
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
    new SWPrecacheWebpackPlugin({
      cacheId: "jouni.jappinen.fi",
      dontCacheBustUrlsMatching: /\.\w{8}\./,
      filename: "service-worker.js",
      minify: true,
      navigateFallback: isProduction ? "https://jouni.jappinen.fi/" : `http://localhost:${PORT}/` + "index.html",
      staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
    }),
    new WebpackAssetsManifest({
      output: "asset-manifest.json",
    }),
    new webpack.optimize.OccurrenceOrderPlugin()
  );
} else {
  config.entry = {
    dev: ["webpack-dev-server/client?http://localhost:8080", "webpack/hot/only-dev-server"],
    bundle: "./src/index.js",
  };
  config.devtool = "cheap-module-eval-source-map";
  config.plugins.push(
    new HtmlWebpackPlugin({
      template: "./template.html",
    })
  );
}

module.exports = config;
