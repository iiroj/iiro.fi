import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import s from 'styles/IndexBlogPreview.module.css'

export default function IndexBlogPreview (props) {
    const post = props.post
    const slug = post.slug
    const title = props.post.frontmatter.title
    const rawDate = props.post.frontmatter.date
    const date = new Date(rawDate).toDateString()

    return (
        <section className={s.container}>
            <h3 className={s.header}>From the blog:</h3>
            <Link to={slug} className={s.articleLink}>
                <article className={s.article}>
                    <h1>{title}</h1>
                    <time dateTime={rawDate}>{date}</time>
                </article>
            </Link>
            <nav>
                <Link to="/blog/">Visit Blog</Link>
            </nav>
        </section>
    )
}
