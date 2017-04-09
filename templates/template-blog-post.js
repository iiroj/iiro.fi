import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import Helmet from 'react-helmet'

import { default as profile } from 'static/profilePicture@3x.jpg'

import s from 'styles/post.module.css'

export default class BlogPost extends Component {
    render () {
        const name = this.props.data.site.siteMetadata.name
        const siteTitle = this.props.data.site.siteMetadata.siteTitle
        const post = this.props.data.markdownRemark
        const body = post.html
        const postTitle = post.frontmatter.title
        const postRawDate = post.frontmatter.date
        const postDate = new Date(postRawDate).toDateString()
        const microdata = `{
            "@context": "http://schema.org",
            "@type": "BlogPosting",
            "author": {
                "@type": "Person",
                "name": "Iiro Jäppinen"
            },
            "publisher": {
                "@type": "Organization",
                "name": "iiro.fi",
                "logo": {
                    "@type": "ImageObject",
                    "url": "${profile}",
                    "height": 384,
                    "width": 384
                }
            },
            "datePublished": "${postRawDate}",
            "dateModified": postRawDate,
            "headline": "${postTitle}",
            "image": {
                "@type": "ImageObject",
                "url": "${profile}",
                "height": 384,
                "width": 384
            },
            "mainEntityOfPage": "https://iiro.fi${post.slug}"
        }`

        return (
            <div>
                <Helmet
                    title={`${postTitle} — by ${name}`}
                    script={[{ type: 'application/ld+json', innerHTML: microdata }]} />
                <div>
                    <main>
                        <nav>
                            <Link to="/blog/" className={s.back}>Back to Blog</Link>
                        </nav>
                        <article className={s.post}>
                            <hgroup className={s.hgroup}>
                                <h1 className={s.title}>{postTitle}</h1>
                                <h6 className={s.meta}>
                                    <span>On </span>
                                    <time dateTime={postRawDate}>{postDate}</time>
                                    <span>, by {name}</span>
                                </h6>
                            </hgroup>
                            <div className={s.postBody} dangerouslySetInnerHTML={{ __html: body }} />
                        </article>
                    </main>
                </div>
            </div>
        )
    }
}

export const pageQuery = `
query BlogPostBySlug($slug: String!) {
    site {
        siteMetadata {
            name
            siteTitle
        }
    }
    markdownRemark(slug: { eq: $slug }) {
        id
        html
        slug
        frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
        }
    }
}
`
