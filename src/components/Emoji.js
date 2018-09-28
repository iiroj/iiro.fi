import React from 'react';
import PropTypes from 'prop-types';

// This wrapper creates accessible emojis, but jsx-a11y doesn't detect it
const Emoji = ({ children, label }) => (
  <span role="img" aria-label={label}>
    {children}
  </span>
);

Emoji.propTypes = {
  children: PropTypes.any.isRequired,
  label: PropTypes.string.isRequired
};

export default Emoji;
