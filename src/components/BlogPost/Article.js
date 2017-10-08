import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Title from './Title';
import Body from './Body';

const Article = ({ body, className, title }) => (
  <article className={className}>
    <Title>{title}</Title>
    <Body dangerouslySetInnerHTML={{ __html: body }} />
  </article>
);

Article.propTypes = {
  body: PropTypes.string.isRequired,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default styled(Article)`
  width: 100%;
`;
