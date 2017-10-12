import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { onlyUpdateForKeys } from 'recompose';

const PostListItem = styled.li`
  article,
  h1 {
    display: inline;
  }

  & + li {
    margin-top: 2em;
  }
`;

const PostList = ({ edges }) =>
  edges.map(edge => (
    <PostListItem key={edge.node.fields.slug}>
      <Link to={edge.node.fields.slug}>
        <article>
          <h1>{edge.node.frontmatter.title}</h1>
        </article>
      </Link>
    </PostListItem>
  ));

PostList.propTypes = {
  edges: PropTypes.arrayOf(
    PropTypes.shape({
      node: {
        fields: {
          slug: PropTypes.string.isRequired,
        }.isRequired,
        frontmatter: {
          title: PropTypes.string.isRequired,
        }.isRequired,
      }.isRequired,
    })
  ).isRequired,
};

const enhance = onlyUpdateForKeys(['edges']);
export default enhance(PostList);
