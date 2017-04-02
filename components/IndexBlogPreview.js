import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

const IndexBlogPreview = (props) => {
    const post = props.posts.pop()
    const postRawDate = post.data.date
    const postDate = new Date(postRawDate).toDateString()

    return (
        <section>
            <Link to={post.path}>
                <article>
                    <h1>{post.data.title}</h1>
                    <time dateTime={postRawDate}>{postDate}</time>
                </article>
            </Link>
            <nav>
                <Link to="/blog/">
                    Blog
                </Link>
            </nav>
        </section>
    )
}

export { IndexBlogPreview as default }
