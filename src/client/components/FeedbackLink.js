import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';

import Link from './Link';

const FeedbackLink = ({ className }) => (
  <Link className={className} href="/feedback">
    Send Feedback
  </Link>
);

FeedbackLink.propTypes = {
  className: PropTypes.string
};

const linkStyles = css`
  background: hsla(0, 0%, 98%, 1);
  border-radius: 2px;
  border-bottom-left-radius: 0;
  box-shadow: inset 0 0 0 1px hsla(0, 0%, 90%, 1);
  color: inherit;
  display: inline-block;
  font-size: 75%;
  padding: 0.5rem 1rem;
  position: relative;
  text-decoration: none;
  transition: all 125ms ease-out 250ms;

  &::before,
  &::after {
    border-bottom: 1rem solid transparent;
    border-top: 1rem solid transparent;
    bottom: 0;
    content: '';
    display: block;
    height: 0;
    left: 0;
    position: absolute;
    transition: all 125ms ease-out 250ms;
    width: 0;
  }

  &::before {
    border-left: 1rem solid hsla(0, 0%, 90%, 1);
    transform: translateY(50%);
    z-index: -1;
  }

  &::after {
    border-left: 1rem solid hsla(0, 0%, 98%, 1);
    bottom: 2.3px;
    transform: translate(1px, 50%);
    z-index: 1;
  }

  &:hover {
    background: hsla(44, 100%, 75%, 1);
    box-shadow: inset 0 0 0 1px hsla(44, 80%, 70%, 1);
    transition: all 125ms ease-out;
  }

  &:hover::after {
    border-left: 1rem solid hsla(44, 100%, 75%, 1);
    transition: all 125ms ease-out;
  }

  &:hover::before {
    border-left: 1rem solid hsla(44, 80%, 70%, 1);
    transition: all 125ms ease-out;
  }
`;

export default styled(FeedbackLink)(linkStyles);
