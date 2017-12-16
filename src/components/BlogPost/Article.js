import React, { Fragment } from "react";
import PropTypes from "prop-types";

import Title from "./Title";
import Body from "./Body";
import Footer from "./Footer";

const Article = ({ body, className, title }) => {
  return (
    <Fragment>
      <Title>{title}</Title>
      <Body>{body}</Body>
      <Footer />
    </Fragment>
  );
};

Article.propTypes = {
  body: PropTypes.object.isRequired,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Article;
