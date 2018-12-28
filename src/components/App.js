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
  from: { opacity: 0 },
  enter: { beforeChildren: true, opacity: 1 },
  exit: { opacity: 0 }
});

const App = () => (
  <Layout>
    <MessageProvider>
      <Route>
        {({ location }) => (
          <PoseGroup preEnterPose="from" enterPose="enter" exitPose="exit">
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
