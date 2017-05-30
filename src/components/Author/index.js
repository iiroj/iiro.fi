import React from 'react'

import { ProfilePicture } from 'components/ProfilePicture'
import { FraktioLogo } from 'components/FraktioLogo'

import s from './styles.module.css'

export const Author = () => (
  <aside className={s.about}>
    <ProfilePicture className={s.picture} />
    <div className={s.text}>
      <p className={s.name}>Iiro Jäppinen</p>
      <p className={s.title}>UX <span className={s.amp}>&</span> UI Designer at <a className={s.fraktio} href='https://fraktio.fi' target='_blank'>
        <FraktioLogo className={s.fraktioLogo} />
        <span>fraktio</span>
      </a></p>
    </div>
  </aside>
)
