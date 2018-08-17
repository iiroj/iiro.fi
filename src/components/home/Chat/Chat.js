import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';

import Typing from './Typing';
import Message from './Message';
import Picture from '../Picture';
import Reply from './Reply';

const MessageGroup = styled.div`
  align-items: flex-end;
  display: ${props => (props.visible ? 'flex' : 'none')};
  flex: 1 1;
  flex-basis: ${props => (props.fullWidth ? '100%' : undefined)};
  position: relative;
  will-change: height;
`;

const avatarContainer = css`
  bottom: 1rem;
  flex: 0 0 4rem;
  margin-right: 1rem;
  position: sticky;
`;

const MessageListContainer = styled.ol`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  flex: 1 1;
  justify-content: flex-end;
  list-style: none;
  will-change: height;

  ${props =>
    props.typing &&
    css`
      margin-bottom: 4.5rem;
      transition: all 125ms ease-in-out;
    `};
`;

const skip = css`
  appearance: none;
  background: none;
  border: none;
  color: hsl(0, 0%, 60%);
  cursor: pointer;
  font-size: 1rem;
  margin: 1rem 0;
  outline: none;
  text-align: center;
  width: 4rem;
`;

class Chat extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    messages: PropTypes.array.isRequired,
    onSentFeedback: PropTypes.func.isRequired,
    onSkip: PropTypes.func.isRequired,
    ready: PropTypes.bool.isRequired,
    typing: PropTypes.bool.isRequired
  };

  state = {
    mounted: false,
    sticky: true
  };

  ref = React.createRef();

  handleScroll = () => {
    const { height, top } = this.ref.current.getBoundingClientRect();
    this.setState({ sticky: window.innerHeight - top >= height });
  };

  componentDidMount() {
    this.setState({ mounted: true });
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  componentDidUpdate(prevProps) {
    const { messages, typing } = this.props;

    if (!this.state.sticky) return;

    if (typing || messages.length !== prevProps.messages.length) {
      const scrollDistance = this.ref.current.scrollHeight - document.documentElement.scrollTop + window.innerHeight;
      window.scrollTo(0, scrollDistance);
    }
  }

  render() {
    const { className, messages, onSentFeedback, onSkip, ready, typing } = this.props;
    const { mounted } = this.state;

    return (
      <div className={className} ref={this.ref}>
        <noscript>
          <style>{`${MessageGroup} { display: flex; }`}</style>
        </noscript>
        <MessageGroup visible={mounted} fullWidth={messages.length > 0}>
          <div className={avatarContainer}>
            <Picture />
          </div>
          {messages.length > 0 && (
            <MessageListContainer aria-live="assertive" role="log" typing={typing}>
              {messages.map((content, key) => (
                <Message key={key}>{content}</Message>
              ))}
            </MessageListContainer>
          )}
          {typing && <Typing />}
        </MessageGroup>
        {ready || (
          <button className={skip} onClick={onSkip}>
            Skip
          </button>
        )}
        {mounted && <Reply onSentFeedback={onSentFeedback} />}
      </div>
    );
  }
}

export default styled(Chat)`
  justify-content: center;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  max-width: 40rem;
  padding: 1rem;
  position: relative;
  width: 100%;

  ${Typing} {
    left: 7rem;
    position: absolute;
    bottom: 2rem;
  }
`;
