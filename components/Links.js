import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import { IconEmail, IconLinkedin, IconDribbble, IconGitHub } from 'components/Icons'
import s from 'styles/links.module.css'

export default function Links (props) {
    return (
        <section className="index-links">
            <ul className="container">
                <li>
                    <a
                        className={s.link}
                        href="mailto:iiro@jappinen.fi"
                        >
                        <IconEmail className={s.icon} />
                        <span>iiro@jappinen.fi</span>
                    </a>
                </li>
                <li>
                    <a
                        className={s.link}
                        href="https://fi.linkedin.com/in/iiroj"
                        >
                        <IconLinkedin className={s.icon} />
                        <span>LinkedIn</span>
                    </a>
                </li>
                <li>
                    <a
                        className={s.link}
                        href="https://github.com/iiroj"
                        >
                        <IconGitHub className={s.icon} />
                        <span>GitHub</span>
                    </a>
                </li>
                <li>
                    <a
                        className={s.link}
                        href="https://dribbble.com/iiroj"
                        >
                        <IconDribbble className={s.icon} />
                        <span>Dribbble</span>
                    </a>
                </li>
            </ul>
        </section>
    )
}
