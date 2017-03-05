import React from 'react'
import { Link } from 'react-router'
import styles from './index.module.css'

import { default as resume } from './link-resume.svg'
import { default as portfolio } from './link-portfolio.svg'
import { default as email } from './link-email.svg'
import { default as linkedin } from './link-linkedin.svg'
import { default as dribbble } from './link-dribbble.svg'
import { default as github } from './link-github.svg'

function Links () {
    return (
        <article className={styles.container}>
            <ul className={styles.list}>
                <div>
                    <li>
                        <Link
                            to={'/resume/'}
                            className={styles.link}
                        >
                            <img src={resume} />
                            <h2>Résumé</h2>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={'/portfolio/'}
                            className={styles.link}
                        >
                            <img src={portfolio} />
                            <h2>Portfolio</h2>
                        </Link>
                    </li>
                    <li>
                        <a
                            href="mailto:iiro@jappinen.fi"
                            className={styles.link}
                        >
                            <img src={email} />
                            <h2>Email</h2>
                        </a>
                    </li>
                </div>
                <div>
                    <li>
                        <a
                            href="https://fi.linkedin.com/in/iiroj"
                            className={styles.link}
                        >
                            <img src={linkedin} />
                            <h2>LinkedIn</h2>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://dribbble.com/iiroj"
                            className={styles.link}
                        >
                            <img src={dribbble} />
                            <h2>Dribbble</h2>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/iiroj"
                            className={styles.link}
                        >
                            <img src={github} />
                            <h2>GitHub</h2>
                        </a>
                    </li>
                </div>
            </ul>
        </article>
    )
}

export { Links as default }
