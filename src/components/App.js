import posed, { PoseGroup } from "react-pose";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { NotFound, routes } from "../routes";
import { ChatProvider } from "../services/chat";

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
  const [key, setKey] = useState("initial-route");
  const [forceInitialPose, setForceInitialPose] = useState(false);

  useEffect(() => {
    setForceInitialPose(true);
    history.listen(location => {
      setKey(location.key);
    });
  }, []);

  useEffect(() => {
    if (history.action !== "POP") {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [key]);

  const Page = routes.get(history.location.pathname) || NotFound;

  return (
    <Layout>
      <ChatProvider>
        <PoseGroup>
          <RouteContainer key={history.location.key || "initial-route"}>
            <Page forceInitialPose={forceInitialPose} />
          </RouteContainer>
        </PoseGroup>
      </ChatProvider>
    </Layout>
  );
};

App.propTypes = {
  history: PropTypes.object.isRequired
};

export default withHistory(App);
