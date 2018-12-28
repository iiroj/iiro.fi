import { Switch, Route } from "react-router";
import posed, { PoseGroup } from "react-pose";
import React from "react";
import styled from "styled-components";

import { MessageProvider } from "../services/chat";
import Layout from "./Layout";
import routes from "../routes";

const RouteContainer = posed(
  styled.div({
    display: "flex",
    flexDirection: "column",
    minHeight: "100%",
    width: "100%"
  })
)({
  enter: { opacity: 1, staggerChildren: 50 },
  exit: { opacity: 0, staggerChildren: 50, staggerDirection: -1 }
});

const App = () => (
  <Layout>
    <MessageProvider>
      <Route>
        {({ location }) => (
          <PoseGroup>
            <RouteContainer key={location.key || "initial-route"}>
              <Switch location={location}>
                {routes.map((route, key) => (
                  <Route
                    key={route.path || key}
                    path={route.path}
                    render={props => <route.component {...props} />}
                  />
                ))}
              </Switch>
            </RouteContainer>
          </PoseGroup>
        )}
      </Route>
    </MessageProvider>
  </Layout>
);

export default App;
