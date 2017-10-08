import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'styled-components';

const PostListItem = props => (
  <li className={props.className}>
    <Link to={props.slug}>
      <article>
        <h1>{props.title}</h1>
      </article>
    </Link>
  </li>
);

PostListItem.propTypes = {
  className: PropTypes.string,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default styled(PostListItem)`
  article {
    font-family: Georgia, serif;
    display: inline;
    font-size: 1.5em;
    line-height: 1.5em;
    font-style: italic;
  }

  h1 {
    display: inline;
  }

  & + li {
    margin-top: 2em;
  }
`;
