import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

import { page } from './ducks/page';

const composeEnhancers = (...args) => (typeof window !== 'undefined' ? composeWithDevTools(...args) : compose(...args));

export default (Router, initialState) => {
  const { reducer: router, middleware, enhancer } = Router;

  const rootReducer = combineReducers({ page, router });
  const middlewares = applyMiddleware(middleware);
  const enhancers = composeEnhancers(enhancer, middlewares);

  return createStore(rootReducer, initialState, enhancers);
};
