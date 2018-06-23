'use strict';

const history = require('connect-history-api-fallback');
const proxy = require('http-proxy-middleware');
const convert = require('koa-connect');

module.exports = {
  config: './webpack.config.babel.js',
  require: ['@babel/register'],
  port: 3000,
  content: './static',
  add: (app, middleware, options) => {
    app.use(
      convert(
        proxy('/.netlify', {
          target: 'http://localhost:9000',
          pathRewrite: { '^/.netlify/functions': '' }
        })
      )
    );
    app.use(convert(history()));
  }
};
