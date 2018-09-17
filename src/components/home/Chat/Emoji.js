import React from 'react';

// This wrapper creates accessible emojis, but jsx-a11y doesn't detect it
const Emoji = ({ children, label }) => (
  <span role="img" aria-label={label}>
    {children}
  </span>
);

export default Emoji;
