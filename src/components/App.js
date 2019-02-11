import posed, { PoseGroup } from "react-pose";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { MessageProvider } from "../services/chat";
import { NotFound, routes } from "../routes";

import { withHistory } from "./History";
import Layout from "./Layout";

const RouteContainer = posed(
  styled.div({
    display: "flex",
    flexDirection: "column",
    minHeight: "100%",
    width: "100%"
  })
)({
  enter: { opacity: 1 },
  exit: { opacity: 0, staggerDirection: -1 }
});

const App = ({ history }) => {
  const [initialized, setInitialized] = useState(false);
  const [key, setKey] = useState("initial-route");
  const [forceInitialPose, setForceInitialPose] = useState(false);

  useEffect(() => {
    if (!initialized) {
      setForceInitialPose(true);
      history.listen(location => {
        setKey(location.key);
      });
    }
    setInitialized(true);
  });

  useEffect(() => {
    if (history.action !== "POP") {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [key]);

  const Page = routes.get(history.location.pathname) || NotFound;

  return (
    <Layout>
      <MessageProvider>
        <PoseGroup>
          <RouteContainer key={history.location.key || "initial-route"}>
            <Page forceInitialPose={forceInitialPose} />
          </RouteContainer>
        </PoseGroup>
      </MessageProvider>
    </Layout>
  );
};

App.propTypes = {
  history: PropTypes.object.isRequired
};

export default withHistory(App);
