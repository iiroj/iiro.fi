import React from 'react';
import { Route, Switch } from 'react-router-dom';

import routes from '../routes';
import UniversalComponent from './UniversalComponent';

const Router = () => (
  <Switch>
    {routes.map(({ defaultPath, page, path }, key) => (
      <Route
        exact
        key={key}
        path={defaultPath ? undefined : path}
        render={() => <UniversalComponent src={() => import(`../pages/${page}`)} />}
      />
    ))}
  </Switch>
);

export default Router;
