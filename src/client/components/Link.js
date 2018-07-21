import React from 'react';
import PropTypes from 'prop-types';

import history from '../utils/history';

const handleRouteChange = event => {
  const href = event.currentTarget.getAttribute('href');
  const isExternalLink = href.startsWith('http');
  const isNewTab = event.metaKey || event.ctrlKey;

  if (isExternalLink || isNewTab) return;

  event.preventDefault();
  history.push(href);
};

const Link = ({ children, href, onClick, ...rest }) => (
  <a href={href} onClick={handleRouteChange} {...rest}>
    {children}
  </a>
);

Link.propTypes = {
  children: PropTypes.any.isRequired,
  href: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default Link;
