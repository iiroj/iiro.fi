import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import styles from './index.module.css'

function Posts (props) {
  const posts = props.posts.map((post) => {
    return (
      <li key={post.path} >
        <article className={styles.post}>
          <h2>
            <Link to={post.path}>
              {post.data.title}
            </Link>
          </h2>
        </article>
      </li>
    )
  })

  return (
    <div className={styles.container}>
      <h2>Posts</h2>
      <ul className={styles.list}>
        {posts}
      </ul>
    </div>
  )
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired
}

export default Posts
