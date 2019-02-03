import posed, { PoseGroup } from "react-pose";
import PropTypes from "prop-types";
import React from "react";
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

class App extends React.PureComponent {
  static propTypes = {
    history: PropTypes.object.isRequired
  };

  state = {
    key: this.props.history.location.key,
    forceInitialPose: false
  };

  componentDidMount() {
    this.setState({ forceInitialPose: true });

    this.props.history.listen(location => {
      this.setState({ key: location.key });
    });
  }

  componentDidUpdate(prevProps) {
    const { history } = this.props;
    if (
      history.location.key !== prevProps.history.location.key &&
      history.action !== "POP"
    ) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    const { forceInitialPose } = this.state;
    const { history } = this.props;

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
  }
}

export default withHistory(App);
