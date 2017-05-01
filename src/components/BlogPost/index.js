import React, { Component, PropTypes } from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import { default as profile } from 'components/ProfilePicture/profilePicture@3x.jpg'
import { Back } from 'components/Back'
import { AboutAuthor } from 'components/AboutAuthor'

import s from './styles.module.css'
import './syntax.css'

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
    "dateModified": "${postRawDate}",
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
                <Back />
                <h1 className={s.title}>{postTitle}</h1>
                <main className={s.wrapper}>
                    <article className={s.post} dangerouslySetInnerHTML={{ __html: body }} />
                </main>
                <footer className={s.footer}>
                    <p className={s.date}>
                        <span>Posted first on </span>
                        <time dateTime={postRawDate}>{postDate}</time>
                        <span>, by:</span>
                    </p>
                    <AboutAuthor />
                </footer>
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
