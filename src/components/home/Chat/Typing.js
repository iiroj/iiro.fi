import React from 'react';
import styled, { css, keyframes } from 'react-emotion';

const fadeIn = keyframes`
  from {
    opacity: 0;

  }
  to {
    opacity: 1;
    padding: 2.5rem 0;
  }
`;

const jump = keyframes`
  0% { transform: translateY(-50%); }
  100% { transform: translateY(50%); }
`;

const typing = css`
  animation: ${fadeIn} 125ms forwards;
  display: block;
  margin-top: -0.5rem;
  position: relative;
`;

const Ball = styled.div`
  animation: ${jump} 500ms ease-in-out forwards alternate infinite;
  animation-delay: ${props => props.i * 100}ms;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 50%;
  display: block;
  height: 0.5rem;
  left: ${props => props.i}rem;
  position: absolute;
  transform: translateY(-50%);
  width: 0.5rem;
`;

export default () => (
  <i className={typing} aria-live="polite">
    <Ball i={0} />
    <Ball i={1} />
    <Ball i={2} />
  </i>
);
