import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import Helmet from 'react-helmet'

export default class BlogIndex extends Component {
  static propTypes = {
    route: PropTypes.object
  }

  render () {
    const pageLinks = []
    const siteTitle = this.props.data.site.siteMetadata.title
    const posts = this.props.data.allMarkdownRemark.edges

    posts.forEach((post) => {
      if (post.node.path !== '/404/') {
        const title = post.node.frontmatter.title || post.node.path
        pageLinks.push(
          <li key={post.node.path} >
            <Link to={post.node.slug} >
              {post.node.frontmatter.title}
            </Link>
          </li>
        )
      }
    })

    return (
      <div>
        <Helmet title={this.props.data.site.siteMetadata.title} />
        <ul>
          {pageLinks}
        </ul>
      </div>
    )
  }
}

export const pageQuery = `
{
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark {
    edges {
      node {
        slug
        frontmatter {
          title
        }
      }
    }
  }
}
`
