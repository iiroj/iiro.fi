import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Title from './Title';
import Body from './Body';
import Footer from './Footer';

const Article = ({ body, title }) => (
  <Fragment>
    <Title>{title}</Title>
    <Body dangerouslySetInnerHTML={{ __html: body }} />
    <Footer />
  </Fragment>
);

Article.propTypes = {
  body: PropTypes.string.isRequired,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Article;
