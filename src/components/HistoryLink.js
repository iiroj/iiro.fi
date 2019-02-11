import PropTypes from "prop-types";
import React from "react";

import { withHistory } from "./History";

const HistoryLink = ({ children, history, href, ...rest }) => (
  <a
    {...rest}
    onClick={event => {
      event.preventDefault();
      history.push(href);
    }}
  >
    {children}
  </a>
);

HistoryLink.propTypes = {
  history: PropTypes.object.isRequired
};

export default withHistory(HistoryLink);
