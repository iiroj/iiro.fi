import React from 'react'
import styles from './index.module.css'
import { default as image } from './image.jpg'

function Image () {
  return (
    <img className={styles.image} src={image} />
  )
}

export default Image
