import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import PostListItem from './PostListItem';

const PostList = ({ edges }) =>
  edges.map(edge => (
    <PostListItem key={edge.node.fields.slug} slug={edge.node.fields.slug} title={edge.node.frontmatter.title} />
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

export default PostList;
