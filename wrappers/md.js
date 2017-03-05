import React, { PropTypes } from 'react'
import Post from 'Post'

function MD (props) {
  const postPattern = /^posts\//
  const isPost = postPattern.test(props.route.page.file.dirname)

  return (
    isPost ? <Post post={props.route.page} /> : null
  )
}

MD.propTypes = {
  route: PropTypes.object.isRequired
}

export { MD as default }
