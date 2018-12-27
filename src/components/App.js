import React from "react";
import { Switch, Route } from "react-router";

import routes from "../routes";
import Layout from "./Layout";
import Loading from "./Loading";
import { MessageProvider } from "../services/chat";

export default () => (
  <Layout>
    <MessageProvider>
      <Loading visible={false} />
      <Switch>
        {routes.map((route, key) => (
          <Route
            key={route.path || key}
            path={route.path}
            render={props => <route.component {...props} />}
          />
        ))}
      </Switch>
    </MessageProvider>
  </Layout>
);
