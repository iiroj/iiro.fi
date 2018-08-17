import React from 'react';

import Svg from './Svg';

export default props => (
  <Svg {...props} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <g>
      <path d="m5 13h26v16h-30v-14" />
      <path d="m1 11v-8h10v4h20" />
    </g>
  </Svg>
);
