import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import { IconEmail, IconLinkedin, IconDribbble, IconGitHub } from 'Icons'
import 'links.scss'

export default function Links (props) {
    return (
        <section className="index-links">
            <ul className="container">
                <li>
                    <a
                        className="link"
                        href="mailto:iiro@jappinen.fi"
                        >
                        <IconEmail />
                        <span>iiro@jappinen.fi</span>
                    </a>
                </li>
                <li>
                    <a
                        className="link"
                        href="https://fi.linkedin.com/in/iiroj"
                        >
                        <IconLinkedin />
                        <span>LinkedIn</span>
                    </a>
                </li>
                <li>
                    <a
                        className="link"
                        href="https://github.com/iiroj"
                        >
                        <IconGitHub />
                        <span>GitHub</span>
                    </a>
                </li>
                <li>
                    <a
                        className="link"
                        href="https://dribbble.com/iiroj"
                        >
                        <IconDribbble />
                        <span>Dribbble</span>
                    </a>
                </li>
            </ul>
        </section>
    )
}
