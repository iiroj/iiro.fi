import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'react-emotion';

import Typing from './Typing';
import Message from './Message';

const chat = css`
  margin: auto;
  display: flex;
  flex-direction: column;
  max-width: 40rem;
  width: 100%;
`;

const messageGroup = css`
  align-items: flex-end;
  display: flex;
  flex: 1 1;
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

const feedbackButton = css`
  margin-left: auto;
`;

const feedbackContainer = css`
  align-items: center;
  display: flex;
  width: 100%;
`;

class Chat extends React.PureComponent {
  static propTypes = {
    avatar: PropTypes.element,
    messages: PropTypes.array.isRequired,
    typing: PropTypes.bool.isRequired
  };

  render() {
    const { avatar: Avatar, messages, typing } = this.props;

    return (
      <div className={chat}>
        <div className={messageGroup}>
          <div className={avatarContainer}>{Avatar}</div>
          <div className={messageListContainer}>
            <div className={messageList}>
              {messages.map((content, key) => (
                <Message key={key}>{content}</Message>
              ))}
              {typing && <Typing />}
            </div>
          </div>
        </div>
        <div className={feedbackContainer}>
          <div className={messageListContainer}>
            <div className={messageList}>
              <button className={feedbackButton}>Send Feedback</button>
            </div>
          </div>
          <div className={avatarContainer}>{Avatar}</div>
        </div>
      </div>
    );
  }
}

export default Chat;
