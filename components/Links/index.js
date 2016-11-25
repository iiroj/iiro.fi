import React from 'react'
import { Link } from 'react-router'
import styles from './styles.module.css'
import { default as resume } from './link-resume.svg'
import { default as portfolio } from './link-portfolio.svg'
import { default as email } from './link-email.svg'
import { default as linkedin } from './link-linkedin.svg'
import { default as dribbble } from './link-dribbble.svg'
import { default as github } from './link-github.svg'
import { default as gitlab } from './link-gitlab.svg'

function Links () {
  return (
    <article className={styles.container}>
      <h2>Links</h2>
      <ul className={styles.list}>
        <li>
          <Link
            to={'/resume/'}
            className={styles.link}
          >
            <img src={resume} />
            <span>Résumé</span>
          </Link>
        </li>
        <li>
          <Link
            to={'/portfolio/'}
            className={styles.link}
          >
            <img src={portfolio} />
            <span>Portfolio</span>
          </Link>
        </li>
        <li>
          <a
            href='mailto:iiro@jappinen.fi'
            className={styles.link}
          >
            <img src={email} />
            <span>Email</span>
          </a>
        </li>
        <li>
          <a
            href='https://fi.linkedin.com/in/iiroj'
            className={styles.link}
          >
            <img src={linkedin} />
            <span>LinkedIn</span>
          </a>
        </li>
        <li>
          <a
            href='https://dribbble.com/iiroj'
            className={styles.link}
          >
            <img src={dribbble} />
            <span>Dribbble</span>
          </a>
        </li>
        <li>
          <a
            href='https://github.com/iiroj'
            className={styles.link}
          >
            <img src={github} />
            <span>GitHub</span>
          </a>
        </li>
        <li>
          <a
            href='https://gitlab.com/u/iiroj'
            className={styles.link}
          >
            <img src={gitlab} />
            <span>GitLab</span>
          </a>
        </li>
      </ul>
    </article>
  )
}

export default Links
