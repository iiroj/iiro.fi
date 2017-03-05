import React from 'react'
import { Link } from 'react-router'
import { config } from 'config'
import styles from './index.module.css'

import Profile from 'Profile'

function About () {
  return (
    <aside className={styles.container}>
      <Profile />
      <div className={styles.text}>
        <h2 className={styles.name}>{config.authorName}</h2>
        <Link to={'/'}>About</Link>
      </div>
    </aside>
  )
}

export { About as default }
