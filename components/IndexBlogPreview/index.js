import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import s from './styles.module.css'

export const IndexBlogPreview = (props) => {
    const post = props.post
    const slug = post.slug
    const title = props.post.frontmatter.title

    return (
        <section>
            <div className={s.container}>
                <h3 className={s.header}>From The Blog:</h3>
                <Link to={slug} className={s.article}>
                    <article>
                        <h1 className={s.title}>{title}</h1>
                    </article>
                </Link>
                <nav>
                    <Link to="/blog/">Visit My Blog</Link>
                </nav>
            </div>
        </section>
    )
}
