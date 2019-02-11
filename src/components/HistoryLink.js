import PropTypes from "prop-types";
import React, { useCallback } from "react";

import { withHistory } from "./History";

const HistoryLink = ({ children, history, href, ...rest }) => {
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
  history: PropTypes.object.isRequired
};

export default withHistory(HistoryLink);
