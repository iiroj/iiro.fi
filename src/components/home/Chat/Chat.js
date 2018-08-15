import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';

import Typing from './Typing';
import Message from './Message';
import Picture from '../Picture';
import Reply from './Reply';

const MessageGroup = styled.div`
  align-items: flex-end;
  display: flex;
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

const MessageListContainer = styled.div`
  flex: 1 1;
  will-change: height;

  ${props =>
    props.typing &&
    css`
      margin-bottom: 4.5rem;
      transition: all 125ms ease-in-out;
    `};
`;

const messageList = css`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  transition: all 125ms;

  &:not(:first-child) {
    margin-left: 1rem;
  }
`;

class Chat extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    messages: PropTypes.array.isRequired,
    typing: PropTypes.bool.isRequired
  };

  render() {
    const { className, messages, typing } = this.props;

    return (
      <div className={className}>
        <MessageGroup fullWidth={messages.length > 0}>
          <div className={avatarContainer}>
            <Picture />
          </div>
          {messages.length > 0 && (
            <MessageListContainer typing={typing}>
              <div className={messageList}>
                {messages.map((content, key) => (
                  <Message key={key}>{content}</Message>
                ))}
              </div>
            </MessageListContainer>
          )}
          {typing && <Typing />}
        </MessageGroup>
        <Reply />
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
