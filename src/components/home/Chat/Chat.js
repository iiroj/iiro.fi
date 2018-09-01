import React from 'react';
import PropTypes from 'prop-types';
import { css, cx } from 'emotion';

import Typing from './Typing';
import Message from './Message';
import Picture from '../Picture';
import Reply from './Reply';

const messageGroup = css({
  alignItems: 'flex-end',
  display: 'none',
  flex: '1 1',
  position: 'relative',

  i: {
    left: '7rem',
    position: 'absolute',
    bottom: '2rem'
  }
});

const messageGroupVisible = css({
  display: 'flex'
});

const messageGroupFullWidth = css({
  flexBasis: '100%'
});

const backdrop = css({
  backdropFilter: 'blur(2px)',
  background: 'hsla(0, 0%, 80%, 0.8)',
  bottom: 0,
  display: 'block',
  left: 0,
  opacity: 0,
  pointerEvents: 'none',
  position: 'fixed',
  right: 0,
  top: 0,
  transition: 'opacity 125ms ease-in-out',
  visibility: 'hidden',
  willChange: 'opacity',
  zIndex: 1
});

const avatarContainer = css({
  bottom: '1rem',
  flex: '0 0 4rem',
  marginRight: '1rem',
  position: 'sticky',
  transition: 'all 125ms ease-in-out',
  width: '4rem',
  zIndex: 2,

  '> div': {
    bottom: 0,
    position: 'absolute',
    transition: 'all 125ms ease-in-out',
    willChange: 'border-radius, height, width'
  },

  '&:hover': {
    '> div': {
      borderRadius: '0.5rem',
      boxShadow: '0 2px 1rem hsla(0, 0%, 0%, 0.1)',
      height: '16rem',
      width: '16rem'
    },

    '+ *': {
      opacity: 1,
      pointerEvents: 'auto',
      visibility: 'visible'
    }
  }
});

const messageListContainer = css({
  alignItems: 'flex-start',
  display: 'flex',
  flexDirection: 'column',
  flex: '1 1',
  justifyContent: 'flex-end',
  listStyle: 'none'
});

const messageListContainerTyping = css({
  marginBottom: '4.5rem',
  transition: 'all 125ms ease-in-out'
});

const skip = css({
  appearance: 'none',
  background: 'none',
  border: 'none',
  color: 'hsl(0, 0%, 60%)',
  cursor: 'pointer',
  fontSize: '1rem',
  margin: '1rem 0',
  outline: 'none',
  textAlign: 'center',
  width: '4rem'
});

const chat = css({
  justifyContent: 'center',
  margin: 'auto',
  display: 'flex',
  flexWrap: 'wrap',
  maxWidth: '40rem',
  padding: '1rem',
  position: 'relative',
  width: '100%'
});

export default class Chat extends React.PureComponent {
  static propTypes = {
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
    const { messages, onSentFeedback, onSkip, ready, typing } = this.props;
    const { mounted } = this.state;

    return (
      <div className={chat} ref={this.ref}>
        <noscript>
          <style>{`.noscript { display: flex !important; }`}</style>
        </noscript>
        <div
          className={cx(
            messageGroup,
            mounted ? messageGroupVisible : 'noscript',
            messages.length > 0 && messageGroupFullWidth
          )}
        >
          <div className={avatarContainer}>
            <Picture />
          </div>
          <div className={backdrop} />
          {messages.length > 0 && (
            <ol
              className={cx(messageListContainer, typing && messageListContainerTyping)}
              aria-live="assertive"
              role="log"
            >
              {messages.map((content, key) => (
                <Message key={key}>{content}</Message>
              ))}
            </ol>
          )}
          {typing && <Typing />}
        </div>
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
