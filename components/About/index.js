import React from 'react'
import { Link } from 'react-router'
import { config } from 'config'
import styles from './index.module.css'

function About () {
  return (
    <aside className={styles.container}>
      <img className={styles.image} src='/profile.jpg' />
      <div>
        <h2 className={styles.name}>{config.authorName}</h2>
        <Link to={'/'}>About</Link>
      </div>
    </aside>
  )
}

export default About
