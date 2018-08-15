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
`;

const avatarContainer = css`
  bottom: 1rem;
  flex: 0 0 4rem;
  margin: 1rem;
  position: sticky;
`;

const messageListContainer = css`
  flex: 1 1;
  padding-right: 1rem;
`;

const messageList = css`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 100%;
  padding: 1rem 0;
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
            <div className={messageListContainer}>
              <div className={messageList}>
                {messages.map((content, key) => (
                  <Message key={key}>{content}</Message>
                ))}
              </div>
            </div>
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
  position: relative;
  width: 100%;

  ${Typing} {
    left: 6rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
`;
