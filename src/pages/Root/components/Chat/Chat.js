import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import Picture from "../../../../components/Picture";

import Message from "./Message";
import Reply from "./Reply";
import Typing from "./Typing";

const MessageGroup = styled.div(
  {
    alignItems: "flex-end",
    display: "none",
    flex: "1 1",
    position: "relative",

    i: {
      left: "7rem",
      position: "absolute",
      bottom: "2rem"
    }
  },
  props => props.mounted && { display: "flex" },
  props => props.fullWidth && { flexBasis: "100%" }
);

const Backdrop = styled.div({
  backdropFilter: "blur(2px)",
  background: "hsla(0, 0%, 80%, 0.8)",
  bottom: 0,
  display: "block",
  left: 0,
  opacity: 0,
  pointerEvents: "none",
  position: "fixed",
  right: 0,
  top: 0,
  transition: "opacity 125ms ease-in-out",
  visibility: "hidden",
  willChange: "opacity",
  zIndex: 1
});

const PictureContainer = styled.div({
  bottom: "1rem",
  flex: "0 0 4rem",
  marginRight: "1rem",
  position: "sticky",
  transition: "all 125ms ease-in-out",
  width: "4rem",
  zIndex: 2,

  "> img": {
    borderRadius: "50%",
    bottom: 0,
    position: "absolute",
    transition: "all 125ms ease-in-out",
    willChange: "border-radius, height, width"
  },

  "&:hover": {
    "> img": {
      borderRadius: "0.5rem",
      boxShadow: "0 2px 1rem hsla(0, 0%, 0%, 0.1)",
      height: "16rem",
      width: "16rem"
    },

    "+ *": {
      opacity: 1,
      pointerEvents: "auto",
      visibility: "visible"
    }
  }
});

const MessageListContainer = styled.ol(
  {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    flex: "1 1",
    justifyContent: "flex-end",
    listStyle: "none"
  },
  props =>
    props.typing && {
      marginBottom: "4.5rem",
      transition: "all 125ms ease-in-out"
    }
);

const SkipButton = styled.button({
  appearance: "none",
  background: "none",
  border: "none",
  color: "hsl(0, 0%, 60%)",
  cursor: "pointer",
  fontSize: "1rem",
  margin: "1rem 0 1rem auto",
  outline: "none",
  textAlign: "center",
  width: "4rem"
});

const Container = styled.div({
  justifyContent: "center",
  margin: "auto",
  display: "flex",
  flexWrap: "wrap",
  maxWidth: "40rem",
  padding: "1rem",
  position: "relative",
  width: "100%"
});

export default class Chat extends React.PureComponent {
  static propTypes = {
    messages: PropTypes.array.isRequired,
    onSentFeedback: PropTypes.func.isRequired,
    onSkip: PropTypes.func.isRequired,
    onStart: PropTypes.func.isRequired,
    ready: PropTypes.bool.isRequired,
    typing: PropTypes.bool.isRequired
  };

  ref = React.createRef();

  state = {
    mounted: false,
    sticky: true
  };

  handleScroll = () => {
    const { height, top } = this.ref.current.getBoundingClientRect();
    this.setState({ sticky: window.innerHeight - top >= height });
  };

  componentDidMount() {
    this.props.onStart();
    this.setState({ mounted: true });
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  componentDidUpdate(prevProps) {
    const { messages, typing } = this.props;

    if (!this.state.sticky) return;

    if (typing || messages.length !== prevProps.messages.length) {
      const scrollDistance =
        this.ref.scrollHeight -
        document.documentElement.scrollTop +
        window.innerHeight;
      window.scrollTo(0, scrollDistance);
    }
  }

  render() {
    const { messages, onSentFeedback, onSkip, ready, typing } = this.props;
    const { mounted } = this.state;

    return (
      <Container ref={this.ref}>
        <noscript>
          <style>{`.noscript { display: flex !important; }`}</style>
        </noscript>

        <MessageGroup
          className={!mounted && "noscript"}
          fullWidth={messages.length > 0}
          mounted={mounted}
        >
          <PictureContainer>
            <Picture />
          </PictureContainer>

          <Backdrop />

          {(messages.length > 0 || typing) && (
            <MessageListContainer
              typing={typing}
              aria-live="assertive"
              role="log"
            >
              {messages.map((content, key) => (
                <Message initialPose="exit" pose="enter" key={key}>
                  {content}
                </Message>
              ))}
              {typing && <Typing key="typing" />}
            </MessageListContainer>
          )}
        </MessageGroup>

        {ready || <SkipButton onClick={onSkip}>Skip</SkipButton>}

        {mounted && <Reply onSentFeedback={onSentFeedback} ready={ready} />}
      </Container>
    );
  }
}
