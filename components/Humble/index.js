import React from 'react'
import styles from './index.module.css'

const Humble = () => (
    <article className={styles.humble}>
        <img
            className={styles.logo}
            src="humble/humble-logo.png"
            srcSet="humble/humble-logo.png 1x,
            humble/humble-logo@2x.png 2x,
            humble/humble-logo@3x.png 3x"
        />
        <p className={styles.text}>I designed the first <a href="https://www.humblebundle.com" target="_blank">Humble Bundle</a> website and many after that. I worked with Humble from its inception in 2011 until summer 2014.</p>
        <p className={styles.text}>People often follow up with whether or not I also created the beautiful icons representing bundled games. I did not.</p>
    </article>
)

export { Humble as default }
