import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class BlogPostList extends Component {
    static defaultProps = {
        posts: []
    }

    static propTypes = {
        posts: PropTypes.array.isRequired
    }

    constructor(props) {
        super(props)

        const posts = this.props.posts
        const postList = posts.map((post) => {
            const postRawDate = post.data.date
            const postDate = new Date(postRawDate).toDateString()

            return (
                <li key={post.path}>
                    <Link to={post.path}>
                        <article>
                            <h1>{post.data.title}</h1>
                            <time dateTime={postRawDate}>{postDate}</time>
                        </article>
                    </Link>
                </li>
            )
        })

        this.state = {posts: postList}
    }

    render () {
        return (
            <ul>
                {this.state.posts}
            </ul>
        )
    }
}
