import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { pure } from 'recompose';

const Container = styled.div`
  box-shadow: inset 0 1px 0 hsla(0, 0%, 0%, 0.1);
`;

const Header = styled.h3`
  margin: 0 auto;
  max-width: 30rem;
  padding: 5vh 1rem 2rem;
`;

const Posts = styled.ol`
  margin: 0 auto;
  max-width: 30rem;
  padding: 0 1rem;
`;

const Post = styled(Link)`
  font-family: Georgia, serif;
  display: inline-block;
  font-size: 1.2rem;
  font-style: italic;
  margin-bottom: 2rem;
`;

const BlogListing = props => {
  const pageLinks = [];
  const edges = props.edges;

  const posts = edges.map(edge => {
    const post = edge.node;
    const slug = post.fields.slug;
    const title = post.frontmatter.title;

    return (
      <li key={slug}>
        <Post to={slug}>
          <article>
            <h4>{title}</h4>
          </article>
        </Post>
      </li>
    );
  });

  return <Posts>{posts}</Posts>;
};

BlogListing.propTypes = {
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

export default pure(BlogListing);
