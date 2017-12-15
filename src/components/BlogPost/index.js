import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { pure } from "recompose";

import Back from "components/Back";
import Article from "./Article";

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

const BlogPost = ({ data }) => {
  const name = data.site.siteMetadata.name;
  const post = data.markdownRemark;
  const body = post.html;
  const postTitle = post.frontmatter.title;
  const postRawDate = post.frontmatter.date;
  const postDate = new Date(postRawDate).toDateString();
  const microdata = {
    "@context": "http://schema.org",
    "@type": "BlogPosting",
    author: {
      "@type": "Person",
      name: "Iiro Jäppinen",
    },
    publisher: {
      "@type": "Organization",
      name: "iiro.fi",
      logo: {
        "@type": "ImageObject",
        url: "https://iiro.fi/profilePicture@3x.jpg",
        height: "384",
        width: "384",
      },
    },
    datePublished: `${postRawDate}`,
    dateModified: `${postRawDate}`,
    headline: `${postTitle}`,
    image: {
      "@type": "ImageObject",
      url: "https://iiro.fi/profilePicture@3x.jpg",
      height: "384",
      width: "384",
    },
    mainEntityOfPage: `https://iiro.fi${post.fields.slug}`,
  };

  return [
    <Helmet
      key="helmet"
      title={`${postTitle} — by ${name}`}
      script={[
        {
          type: "application/ld+json",
          innerHTML: `${JSON.stringify(microdata)}`,
        },
      ]}
    />,
    <Back key="back" />,
    <Article key="article" title={postTitle} body={body} />,
  ];
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: {
      fields: {
        title: PropTypes.string.isRequired,
      }.isRequired,
      frontmatter: {
        date: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      },
      html: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }.isRequired,
    site: {
      siteMetadata: {
        name: PropTypes.string.isRequired,
        siteTitle: PropTypes.string.isRequired,
      }.isRequired,
    }.isRequired,
  }).isRequired,
};

export default pure(BlogPost);
