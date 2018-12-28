import PropTypes from "prop-types";
import React from "react";

import { withHistory } from "./History";

class HistoryLink extends React.PureComponent {
  static propTypes = {
    history: PropTypes.object.isRequired
  };

  handleClick = event => {
    event.preventDefault();
    this.props.history.push(this.props.href);
  };

  render() {
    const { children, ...rest } = this.props;
    return (
      <a {...rest} onClick={this.handleClick}>
        {children}
      </a>
    );
  }
}

export default withHistory(HistoryLink);
