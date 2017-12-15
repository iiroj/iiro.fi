import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

class ScrollToTop extends PureComponent {
  componentDidUpdate = prevProps => {
    if (this.props.location !== prevProps.location) {
      window && window.scrollTo(0, 0);
    }
  };

  render = () => null;
}

ScrollToTop.propTypes = {
  location: PropTypes.object.isRequired,
};

export default withRouter(ScrollToTop);
