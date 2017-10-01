import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { pure } from 'recompose';

const PostListItem = props => (
  <li className={props.className}>
    <Link to={props.slug}>
      <article>
        <h4>{props.title}</h4>
      </article>
    </Link>
  </li>
);

PostListItem.propTypes = {
  className: PropTypes.string,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default pure(styled(PostListItem)`
  article {
    font-family: Georgia, serif;
    display: inline-block;
    font-size: 1.2em;
    font-style: italic;
    margin-bottom: 2rem;
  }
`);
