import createHistory from 'history/createMemoryHistory';

import configureStore from '../client/configure-store';

export default async path => {
  const history = createHistory({ initialEntries: [path] });
  const { store, thunk } = configureStore(history);

  await thunk(store);

  return store;
};
