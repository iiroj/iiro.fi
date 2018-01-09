import React from "react";
import { Route, Switch } from "react-router-dom";

import pages from "../utils/pages";

const Pages = () => (
  <Switch>{pages.map(page => <Route key={page.url} exact path={page.url} component={page.component} />)}</Switch>
);

export default Pages;
