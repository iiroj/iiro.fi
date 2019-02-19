import PropTypes from "prop-types";
import React, { useCallback } from "react";

import useHistory from "../hooks/history";

const HistoryLink = ({ children, href, ...rest }) => {
  const history = useHistory();
  const handleClick = useCallback(
    event => {
      event.preventDefault();
      history.push(href);
    },
    [href]
  );

  return (
    <a {...rest} onClick={handleClick}>
      {children}
    </a>
  );
};

HistoryLink.propTypes = {
  href: PropTypes.string.isRequired
};

export default HistoryLink;
