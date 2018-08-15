import React from 'react';
import styled from 'react-emotion';

const Icon = props => (
  <svg {...props} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="15" />
    <path d="m17 23 4-12-12 4 6 2" />
  </svg>
);

export default styled(Icon)`
  fill: none;
  height: 2rem;
  display: block;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2px;
  stroke: hsl(0, 0%, 80%);
  width: 2rem;

  circle,
  path {
    transition: all 125ms ease-in-out;
  }
`;
