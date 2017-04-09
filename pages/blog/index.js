import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import Helmet from 'react-helmet'

import s from 'styles/blog.module.css'
import { AboutAuthor } from 'components/AboutAuthor'

export default class BlogIndex extends Component {
    render () {
        const pageLinks = []
        const name = this.props.data.site.siteMetadata.name
        const edges = this.props.data.allMarkdownRemark.edges

        edges.forEach((edge) => {
            const post = edge.node
            const slug = post.slug
            const title = post.frontmatter.title

            pageLinks.push(
                <li key={slug}>
                    <Link to={slug} className={s.post}>
                        <article>
                            <h2 className={s.title}>{title}</h2>
                        </article>
                    </Link>
                </li>
            )
        })

        return (
            <div>
                <Helmet title={`Blog of ${name}`} />
                <nav>
                    <Link to="/" className={s.back}>Back to iiro.fi</Link>
                </nav>
                <main>
                    <AboutAuthor />
                    <h1 className={s.header}>Blog</h1>
                    <ul className={s.posts}>
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
                }
            }
        }
    }
}
`
