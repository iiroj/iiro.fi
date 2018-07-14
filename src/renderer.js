import '@babel/polyfill';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { renderStylesToString } from 'emotion-server';
import { initializeCurrentLocation, routerForExpress } from 'redux-little-router';
import { Provider } from 'react-redux';
import { HeadCollector } from 'react-head';
import { flushChunkNames } from 'react-universal-component/server';
import flushChunks from 'webpack-flush-chunks';
import { html, safeHtml } from 'common-tags';

import { routesByPath } from './client/routes';
import configureClientStore from './client/store';
import App from './client/components/App';

const configureServerStore = async path => {
  const router = routerForExpress({ routes: routesByPath, request: { path } });
  const store = configureClientStore(router);
  const state = store.getState();
  store.dispatch(initializeCurrentLocation(state.router));
  return store;
};

export default async ({ assets, filename, path, publicPath, stats }) => {
  const store = await configureServerStore(path);

  const headTags = [];
  const app = renderStylesToString(
    renderToString(
      <HeadCollector headTags={headTags}>
        <Provider store={store}>
          <App />
        </Provider>
      </HeadCollector>
    )
  );

  const { scripts } = flushChunks(stats, {
    before: ['runtime', 'vendor'],
    after: ['client'],
    chunkNames: flushChunkNames()
  });

  const state = safeHtml(JSON.stringify(store.getState()));

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
        <script id="initial-state" type="application/json">${state}</script>
      </head>
      <body>
        ${app}
      </body>
    </html>
  `;
};
