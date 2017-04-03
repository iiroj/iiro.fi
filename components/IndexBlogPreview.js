import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default (props) => {
    const latestPost = props.pages.filter( page => {
        if ( page.file.ext === 'md' ) {
            return page
        }
    }).pop()
    const latestPostRawDate = latestPost.data.date
    const latestPostDate = new Date(latestPostRawDate).toDateString()

    return (
        <section>
            <h3>From the blog:</h3>
            <Link to={latestPost.path}>
                <article>
                    <h1>{latestPost.data.title}</h1>
                    <time dateTime={latestPostRawDate}>{latestPostDate}</time>
                </article>
            </Link>
            <nav>
                <Link to="/blog/">Visit Blog</Link>
            </nav>
        </section>
    )
}
