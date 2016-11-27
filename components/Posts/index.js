import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import styles from './index.module.css'

function Posts (props) {
  const posts = props.posts.map((post) => {
    const postRawDate = post.data.date
    const postDate = new Date(postRawDate).toDateString()

    return (
      <li key={post.path} >
        <Link to={post.path}>
          <article className={styles.post}>
            <h1 className={styles.heading}>{post.data.title}</h1>
            <time className={styles.time} dateTime={postRawDate}>{postDate}</time>
          </article>
        </Link>
      </li>
    )
  })

  return (
    <div className={styles.container}>
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
