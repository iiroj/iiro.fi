import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'

import BlogPostList from 'BlogPostList'

export default class BlogIndex extends Component {
    static defaultProps = {
        pages: []
    }

    static propTypes = {
        route: PropTypes.object.isRequired
    }

    state = {
        pages: this.props.route.pages
    }

    render () {
        const pages = this.state.pages
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
}
