import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'

export default function BlogPost (props) {
    const post = props.data.markdownRemark
    const siteTitle = props.data.site.siteMetadata.siteTitle

    return (
        <div>
            <Helmet title={`${post.frontmatter.title} | ${siteTitle}`}/>
            <h1>{post.frontmatter.title}</h1>
            <p>{post.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
    )
}

export const pageQuery = `
query BlogPostByPath($slug: String!) {
    site {
        siteMetadata {
            name
            siteTitle
        }
    }
    markdownRemark(slug: { eq: $slug }) {
        id
        html
        frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
        }
    }
}
`
