import React, { Component, PropTypes } from 'react'
import Post from 'Post'

export default class MD extends Component {
  static propTypes = {
    route: PropTypes.object.isRequired
  }

  render () {
    const postPattern = /^posts\//
    const isPost = postPattern.test(this.props.route.page.file.dirname)

    return (
      isPost ? <Post post={this.props.route.page} /> : null
    )
  }
}
