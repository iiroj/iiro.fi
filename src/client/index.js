import '@babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

ReactDOM.hydrate(<App pathname={window.location.pathname} />, document.body);

if (process.env.NODE_ENV === 'production') {
  navigator.serviceWorker.register('sw.js');
} else {
  if (module.hot) {
    module.hot.accept();
  }
}
