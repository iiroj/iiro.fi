import React from 'react';

export default props => (
  <svg height="32" viewBox="0 0 32 32" width="32" {...props} xmlns="http://www.w3.org/2000/svg">
    <g
      style={{
        fill: 'none',
        fillRule: 'evenodd',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        stroke: '#4d4d4d',
        strokeWidth: 2
      }}
    >
      <path d="m5 13h26v16h-30v-14" />
      <path d="m1 11v-8h10v4h20" />
    </g>
  </svg>
);
