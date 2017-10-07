import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { pure } from 'recompose';

const PostListItem = props => (
  <li className={props.className}>
    <Link to={props.slug}>
      <article>
        <h3>{props.title}</h3>
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
    display: inline;
    font-size: 1.5em;
    line-height: 1.5em;
    font-style: italic;
  }

  h3 {
    display: inline;
  }

  & + li {
    margin-top: 2em;
  }
`);
