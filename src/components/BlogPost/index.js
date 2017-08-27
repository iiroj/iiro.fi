import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "styled-components";
import { default as syntax } from "./syntax.css";

import Back from "components/Back";
import Footer from "components/Footer";
import Author from "components/Author";

const Title = styled.h1`
  background-color: white;
  font-family: Georgia, serif;
  font-size: 1.5rem;
  padding: 2rem 4rem;
  text-align: center;
`;

const Wrapper = styled.main`
  background-color: white;
  box-shadow: 0 1px 0 rgba(0, 0, 0, .05);
`;

const Post = styled.article`
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 38rem;
  padding: 2rem 1rem 4rem 1rem;
  position: relative;
  z-index: 1;

  span.gatsby-resp-image-wrapper {
    background: none;
    margin: 2rem -1rem;
    overflow: hidden;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: 500;
    margin: 1rem 0;
  }

  p {
    margin-bottom: 0.5rem;
  }

  em {
    font-style: oblique;
  }

  strong {
    font-weight: 500;
  }

  s {
    color: hsl(0, 0%, 60%);
    text-decoration: line-through;
  }

  ul ol {
    list-style-type: square;
    margin: 0 -0.5rem 0.5rem -0.5rem;
    padding: 0 1rem;
  }

  ol {
    list-style-type: decimal;
  }

  hr {
    border: none;
    box-shadow: 0 1px 0 hsla(0, 0%, 0%, 0.1);
    height: 1px;
    margin: 4rem auto;
    width: 50%;
  }

  blockquote {
    box-shadow: inset 2px 0 0 hsla(0, 0%, 0%, 0.1);
    color: hsla(0, 0%, 60%, 1);
    margin: 0 -0.5rem;
    padding: 0 1rem;

    cite {
      color: rgb(142, 142, 142);
      display: block;
    }
  }

  code {
    background-color: hsla(0, 64%, 95%, 1);
    color: hsla(0, 64%, 48%, 1);
    font-family: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New",
      monospace;
    font-size: 0.9rem !important;
    padding: 0 0.25rem;
  }

  pre {
    background-color: #f5f5f8;
    box-shadow: 0 0 0 1px hsla(0, 0%, 0%, 0.08);
    margin: 2rem -1rem;
    overflow-x: scroll;
    padding: 1rem 1.5rem;

    code {
      background-color: #f5f5f8;
      color: #50525e;
      padding: 0;
    }
  }

  ${syntax};
`;

const Posted = styled.p`
  font-weight: inherit;
  margin-bottom: 1rem;
`;

const BlogPost = props => {
  const name = props.data.site.siteMetadata.name;
  const post = props.data.markdownRemark;
  const body = post.html;
  const postTitle = post.frontmatter.title;
  const postRawDate = post.frontmatter.date;
  const postDate = new Date(postRawDate).toDateString();
  const microdata = {
    "@context": "http://schema.org",
    "@type": "BlogPosting",
    author: {
      "@type": "Person",
      name: "Iiro Jäppinen"
    },
    publisher: {
      "@type": "Organization",
      name: "iiro.fi",
      logo: {
        "@type": "ImageObject",
        url: "https://iiro.fi/profilePicture@3x.jpg",
        height: "384",
        width: "384"
      }
    },
    datePublished: `${postRawDate}`,
    dateModified: `${postRawDate}`,
    headline: `${postTitle}`,
    image: {
      "@type": "ImageObject",
      url: "https://iiro.fi/profilePicture@3x.jpg",
      height: "384",
      width: "384"
    },
    mainEntityOfPage: `https://iiro.fi${post.fields.slug}`
  };

  return (
    <div>
      <Helmet
        title={`${postTitle} — by ${name}`}
        script={[
          {
            type: "application/ld+json",
            innerHTML: `${JSON.stringify(microdata)}`
          }
        ]}
      />
      <Back />
      <Title>
        {postTitle}
      </Title>
      <Wrapper>
        <Post dangerouslySetInnerHTML={{ __html: body }} />
      </Wrapper>
      <Footer>
        <Posted>
          <span>Posted first on </span>
          <time dateTime={postRawDate}>
            {postDate}
          </time>
          <span>, by:</span>
        </Posted>
        <Author />
      </Footer>
    </div>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: {
      fields: {
        title: PropTypes.string.isRequired
      }.isRequired,
      frontmatter: {
        date: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
      },
      html: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    }.isRequired,
    site: {
      siteMetadata: {
        name: PropTypes.string.isRequired,
        siteTitle: PropTypes.string.isRequired
      }.isRequired
    }.isRequired
  }).isRequired
};

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        name
        siteTitle
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;

export default BlogPost;
