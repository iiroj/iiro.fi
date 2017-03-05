import React from 'react'
import { Link } from 'react-router'
import styles from './index.module.css'

function Back () {
    return (
        <nav className={styles.nav}>
            <Link to={'/'} className={styles.back}>Back to iiro.fi</Link>
        </nav>
    )
}

export { Back as default }
