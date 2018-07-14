import produce from 'immer';

import * as types from './types';

import { routesByName, routesByPath } from '../../routes';

export const initialState = routesByPath[routesByName.HOME];

export default (state = initialState, action = {}) =>
  produce(state, draft => {
    const { payload, type } = action;

    if (type === types.PAGE_CHANGED) {
      const route = payload && routesByPath[payload.route];
      draft.component = route ? route.component : 'NotFound';
    }

    return draft;
  });
