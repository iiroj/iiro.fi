import React from 'react'
import styles from './index.module.css'

const Profile = () => (
    <img
        className={styles.profile}
        src="/profile.jpg"
        srcSet="/profile.jpg 1x,
                /profile@2x.jpg 2x,
                /profile@3x.jpg 3x"
        />
)

export { Profile as default }
