import React, { Component, PropTypes } from 'react'
import BlogPost from 'BlogPost'

export default class BlogPostWrapper extends Component {
    static propTypes = {
        route: PropTypes.object.isRequired
    }

    render () {
        const postPattern = /^blog\//
        const isPost = postPattern.test(this.props.route.page.file.dirname)
        this.state = { isPost: isPost }

        return (
            isPost ? <BlogPost post={this.props.route.page} /> : null
        )
    }
}
