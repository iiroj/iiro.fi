import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import { IconEmail, IconLinkedin, IconDribbble, IconGitHub } from 'components/Icons'
import s from './styles.module.css'

export const IndexLinks = () => (
    <section>
        <div className={s.container}>
            <p>You can best reach me by <a className={s.link} href="mailto:iiro@jappinen.fi"><IconEmail className={s.icon} /> <span>Emailing me</span></a>.</p>
            <p>You can also find me around the internet: My professional profile on <a className={s.link} href="https://fi.linkedin.com/in/iiroj"><IconLinkedin className={s.icon} /> <span>LinkedIn</span></a>, my public code on <a className={s.link} href="https://github.com/iiroj"><IconGitHub className={s.icon} /> <span>GitHub</span></a>, and see what I'm (very rarely) working on, on <a className={s.link} href="https://dribbble.com/iiroj"><IconDribbble className={s.icon} /> <span>Dribbble</span></a>.</p>
        </div>
    </section>
)
