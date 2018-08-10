import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'react-emotion';
import { PoseGroup } from 'react-pose';

import Typing from './Typing';
import Message from './Message';

const container = css`
  align-items: flex-end;
  display: flex;
  flex: 1 1;
  max-height: 100%;
  overflow-y: auto;
  padding: 2rem;
  width: 100%;
`;

const messageList = css`
  align-items: flex-start;
  flex: 1 1;
  transition: all 125ms;
  display: flex;
  flex-direction: column;

  &:not(:first-child) {
    margin-left: 1rem;
  }
`;

const Chat = ({ avatar: Avatar, messages, onClick, typing }) => (
  /* eslint-disable-next-line */
  <div className={container} onClick={onClick}>
    {Avatar}
    <div className={messageList}>
      <PoseGroup animateOnMount>
        {messages.map((content, key) => (
          <Message key={key}>{content}</Message>
        ))}
      </PoseGroup>
      {typing && <Typing />}
    </div>
  </div>
);

Chat.propTypes = {
  avatar: PropTypes.element,
  messages: PropTypes.array.isRequired,
  onClick: PropTypes.func,
  typing: PropTypes.bool.isRequired
};

export default Chat;
