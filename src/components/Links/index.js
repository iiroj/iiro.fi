import React from 'react'

import {
  IconDribbble,
  IconEmail,
  IconFacebook,
  IconLinkedin,
  IconGitHub,
  IconTelegram
} from 'components/Icons'
import s from './styles.module.css'

export const Links = () => (
  <section className={s.section}>
    <ul className={s.list}>
      <div>
        <li>
          <a
            href='mailto:iiro@jappinen.fi'
            className={s.link}
            >
            <IconEmail className={s.icon} />
            <h2>Email</h2>
          </a>
        </li>
        <li>
          <a
            href='https://t.me/iiroj'
            className={s.link}
            >
            <IconTelegram className={s.icon} />
            <h2>Telegram</h2>
          </a>
        </li>
        <li>
          <a
            href='https://m.me/iiro.jappinen'
            className={s.link}
            >
            <IconFacebook className={s.icon} />
            <h2>Facebook</h2>
          </a>
        </li>
      </div>
      <div>
        <li>
          <a
            href='https://fi.linkedin.com/in/iiroj'
            className={s.link}
            >
            <IconLinkedin className={s.icon} />
            <h2>LinkedIn</h2>
          </a>
        </li>
        <li>
          <a
            href='https://dribbble.com/iiroj'
            className={s.link}
            >
            <IconDribbble className={s.icon} />
            <h2>Dribbble</h2>
          </a>
        </li>
        <li>
          <a
            href='https://github.com/iiroj'
            className={s.link}
            >
            <IconGitHub className={s.icon} />
            <h2>GitHub</h2>
          </a>
        </li>
      </div>
    </ul>
  </section>
)
