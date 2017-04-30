import React, { Component, PropTypes } from 'react'
import Link from 'gatsby-link'

import { IconEmail, IconLinkedin, IconDribbble, IconGitLab, IconGitHub } from 'components/Icons'
import s from './styles.module.css'

export const IndexLinks = () => (
    <section className={s.section}>
        <ul className={s.list}>
                <li>
                    <a
                        href="mailto:iiro@jappinen.fi"
                        className={s.link}
                        >
                        <IconEmail className={s.icon} />
                        <h2>Email</h2>
                    </a>
                </li>
                <li>
                    <a
                        href="https://fi.linkedin.com/in/iiroj"
                        className={s.link}
                        >
                        <IconLinkedin className={s.icon} />
                        <h2>LinkedIn</h2>
                    </a>
                </li>
                <li>
                    <a
                        href="https://dribbble.com/iiroj"
                        className={s.link}
                        >
                        <IconDribbble className={s.icon} />
                        <h2>Dribbble</h2>
                    </a>
                </li>
                <li>
                    <a
                        href="https://gitlab.com/iiroj"
                        className={s.link}
                        >
                        <IconGitLab className={s.icon} />
                        <h2>GitLab</h2>
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/iiroj"
                        className={s.link}
                        >
                        <IconGitHub className={s.icon} />
                        <h2>GitHub</h2>
                    </a>
                </li>
        </ul>
    </section>
)
