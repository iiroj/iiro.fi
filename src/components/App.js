import { withRouter } from "react-router";
import posed, { PoseGroup } from "react-pose";
import React from "react";
import styled from "styled-components";

import { MessageProvider } from "../services/chat";
import { NotFound, routes } from "../routes";

import Layout from "./Layout";
import UniversalComponent from "./UniversalComponent";

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

class App extends React.PureComponent {
  state = {
    forceInitialPose: false
  };

  componentDidMount() {
    this.setState({ forceInitialPose: true });
  }

  componentDidUpdate(prevProps) {
    const { history, location } = this.props;
    if (location.key !== prevProps.location.key && history.action !== "POP") {
      window.scrollTo(0, 0);
    }
  }

  render() {
    const { forceInitialPose } = this.state;
    const { location } = this.props;

    return (
      <Layout>
        <MessageProvider>
          <PoseGroup>
            <RouteContainer key={location.key || "initial-route"}>
              <UniversalComponent
                forceInitialPose={forceInitialPose}
                src={routes.get(location.pathname) || NotFound}
              />
            </RouteContainer>
          </PoseGroup>
        </MessageProvider>
      </Layout>
    );
  }
}

export default withRouter(App);
