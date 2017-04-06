import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import Helmet from 'react-helmet'

import s from 'styles/blog.module.css'

export default class BlogIndex extends Component {
    render () {
        const pageLinks = []
        const name = this.props.data.site.siteMetadata.name
        const posts = this.props.data.allMarkdownRemark.edges

        posts.forEach((post) => {
            const title = post.node.frontmatter.title
            pageLinks.push(
                <li key={post.node.slug} >
                    <Link to={post.node.slug} >
                        {post.node.frontmatter.title}
                    </Link>
                </li>
            )
        })

        return (
            <div>
                <Helmet title={`Blog of ${name}`} />
                <nav className={s.back}>
                    <Link to="/">Back to iiro.fi</Link>
                </nav>
                <main>
                    <header className={s.header}>
                        <h1 className={s.h1}>Blog</h1>
                    </header>
                    <ul className="blog-list">
                        {pageLinks}
                    </ul>
                </main>
            </div>
        )
    }
}

export const pageQuery = `
query BlogIndex {
    site {
        siteMetadata {
            name
        }
    }
    allMarkdownRemark(sortBy: { fields: frontmatter___date, order: DESC }) {
        edges {
            node {
                slug
                frontmatter {
                    title
                    date
                }
            }
        }
    }
}
`
