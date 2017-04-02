import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'

import BlogPostList from 'BlogPostList'

const BlogIndex = (props) => {
    const pages = props.route.pages
    const posts = []

    pages.forEach((page) => {
        if (page.file.ext === 'md' && page.data.draft !== true) {
            posts.push(page)
        }
    })

    return (
        <BlogPostList posts={posts} />
    )
}

export { BlogIndex as default }
