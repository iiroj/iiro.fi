import React from 'react';
import styled, { keyframes } from 'react-emotion';

const jump = keyframes`
  from { transform: translateY(-50%) }
  to   { transform: translateY(50%) }
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

const fadeIn = keyframes`
  from { opacity: 0 }
  to   { opacity: 1 }
`;

export default styled(({ className }) => (
  <i className={className} aria-live="polite">
    <Ball i={0} />
    <Ball i={1} />
    <Ball i={2} />
  </i>
))`
  animation: ${fadeIn} 125ms ease-in-out;
  display: block;
  height: 0.5rem;
  position: relative;
  width: 2.5rem;
`;
