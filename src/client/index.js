import '@babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';

import configureStore from './configure-store';
import App from './components/App';

const initialState = JSON.parse(document.getElementById('initial-state').innerHTML);

const history = createHistory();
const store = configureStore(history, initialState).store;

const root = document.getElementById('root');

ReactDOM.hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);

if (process.env.NODE_ENV === 'production') {
  navigator.serviceWorker.register('sw.js');
} else {
  if (module.hot) {
    module.hot.accept();
  }
}
