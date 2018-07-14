import '@babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom/server';
import { renderStylesToString } from 'emotion-server';
import createHistory from 'history/createMemoryHistory';
import { Provider } from 'react-redux';
import Helmet from 'react-helmet';
import { flushChunkNames } from 'react-universal-component/server';
import flushChunks from 'webpack-flush-chunks';
import htmlescape from 'htmlescape';
import { html } from 'common-tags';

import configureClientStore from './client/configure-store';
import App from './client/components/App';

const createScriptTags = scripts =>
  scripts.map(src => `<script type="text/javascript" src="/${src}" defer></script>`).join('');

const configureServerStore = async path => {
  const history = createHistory({ initialEntries: [path] });
  const { store, thunk } = configureClientStore(history);
  await thunk(store);
  return store;
};

export default async ({ assets, filename, path, publicPath, stats }) => {
  const store = await configureServerStore(path);
  if (!store) return;

  const app = renderStylesToString(
    ReactDOM.renderToString(
      <Provider store={store}>
        <App />
      </Provider>
    )
  );

  const helmet = Helmet.renderStatic();

  const { scripts } = flushChunks(stats, {
    before: ['runtime', 'vendor'],
    after: ['client'],
    chunkNames: flushChunkNames()
  });

  const js = createScriptTags(scripts);

  const state = htmlescape(store.getState());

  const version = stats.hash;

  return html`
    <!DOCTYPE html>
    <html lang="en" ${helmet.htmlAttributes.toString()}>
      <head>
        <meta charSet="utf-8" />
        ${helmet.title.toString()}
        <meta name="version" content="${version}" />
        <link rel="manifest" href="/manifest.json">
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="192x192" href="/icon-192.png" />
        <link rel="apple-touch-icon" sizes="512x512" href="/icon-512.png" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#4D4D4D">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        ${js}
        ${helmet.script.toString()}
        <script id="initial-state" type="application/json">${state}</script>
      </head>
      <body ${helmet.bodyAttributes.toString()}>
        ${app}
      </body>
    </html>
  `;
};
