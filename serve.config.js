'use strict';

const proxy = require('http-proxy-middleware');
const convert = require('koa-connect');

module.exports = {
  require: ['@babel/register'],
  port: 3000,
  content: './static',
  add: app => {
    app.use(
      convert(
        proxy('/.netlify', {
          target: 'http://localhost:9000',
          pathRewrite: { '^/.netlify/functions': '' }
        })
      )
    );
  }
};
