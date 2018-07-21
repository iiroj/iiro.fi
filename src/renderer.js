import '@babel/polyfill';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { renderStylesToString } from 'emotion-server';
import { HeadCollector } from 'react-head';
import { flushChunkNames } from 'react-universal-component/server';
import flushChunks from 'webpack-flush-chunks';
import { html } from 'common-tags';

import Router from './client/pages';

export default async ({ assets, filename, path, publicPath, stats }) => {
  const headTags = [];

  const app = renderStylesToString(
    renderToString(
      <HeadCollector headTags={headTags}>
        <Router pathname={path} />
      </HeadCollector>
    )
  );

  const { scripts } = flushChunks(stats, {
    before: ['runtime', 'vendor'],
    after: ['client'],
    chunkNames: flushChunkNames()
  });

  return html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        ${renderToString(headTags)}
        <meta name="version" content="${stats.hash}" />
        <link rel="manifest" href="/manifest.json">
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="192x192" href="/icon-192.png" />
        <link rel="apple-touch-icon" sizes="512x512" href="/icon-512.png" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#4D4D4D">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        ${scripts.map(src => `<script type="text/javascript" src="/${src}" defer></script>`).join('\n')}
      </head>
      <body>
        ${app}
      </body>
    </html>
  `;
};
