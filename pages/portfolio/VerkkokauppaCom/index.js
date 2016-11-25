import React, { Component } from 'react'

import styles from './VerkkokauppaCom.module.css'

const iphone = require('./iphone.png')
const ipad = require('./ipad.png')
const macbook = require('./macbook.png')

export default class VerkkokauppaCom extends Component {
  render () {
    return (
      <article className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.heading}>Verkkokauppa.com</h1>
        </header>
        <div className={styles.imageContainer}>
          <img
            className={styles.iphone}
            src={iphone}
          />
          <img
            className={styles.ipad}
            src={ipad}
          />
          <img
            className={styles.macbook}
            src={macbook}
          />
        </div>
      </article>
    )
  }
}
