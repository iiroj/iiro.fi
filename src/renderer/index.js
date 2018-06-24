import '@babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom/server';
import htmlescape from 'htmlescape';
import { renderStylesToString } from 'emotion-server';
import Helmet from 'react-helmet';
import { Provider } from 'react-redux';
import { flushChunkNames } from 'react-universal-component/server';
import flushChunks from 'webpack-flush-chunks';

import App from '../client/components/App';
import getHtml from './html';
import configureStore from './configure-store';

const createScriptTags = scripts =>
  scripts.map(src => `<script type="text/javascript" src="/${src}" defer></script>`).join('');

export default async ({ assets, filename, path, publicPath, stats }) => {
  const store = await configureStore(path);
  if (!store) return;

  const app = renderStylesToString(
    ReactDOM.renderToString(
      <Provider store={store}>
        <App />
      </Provider>
    )
  );

  const helmet = Helmet.renderStatic();

  const chunkNames = flushChunkNames();
  const { scripts } = flushChunks(stats, {
    before: ['runtime', 'vendor'],
    after: ['client'],
    chunkNames
  });
  const js = createScriptTags(scripts);

  const state = htmlescape(store.getState());

  return getHtml({ app, helmet, js, state, version: stats.hash });
};
