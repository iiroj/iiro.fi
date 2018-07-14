import '@babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { initializeCurrentLocation, routerForBrowser } from 'redux-little-router';

import { routesByPath } from './routes';
import configureStore from './store';
import App from './components/App';

const initialState = JSON.parse(document.getElementById('initial-state').innerHTML);

const router = routerForBrowser({ routes: routesByPath });
const store =
  module.hot && module.hot.data && module.hot.data.store ? module.hot.data.store : configureStore(router, initialState);

const initialLocation = initialState.router;
if (initialLocation) {
  store.dispatch(initializeCurrentLocation(initialLocation));
}

ReactDOM.hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.body
);

if (process.env.NODE_ENV === 'production') {
  navigator.serviceWorker.register('sw.js');
} else {
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(data => {
      data.store = store;
    });
  }
}
