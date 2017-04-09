import React from 'react'
import { Link } from 'react-router'

import { ProfilePicture } from 'components/ProfilePicture'
import { FraktioLogo } from 'components/Fraktio'

import s from './styles.module.css'

export const IndexHeader = () => (
    <header>
        <div className={s.headerContainer}>
            <ProfilePicture className={s.picture} />
            <h1 className={s.name}>I am Iiro Jäppinen</h1>
            <h2 className={s.title}>
                An UX <span className={s.amp}>&</span> UI Designer at <a className={s.fraktio} href="https://fraktio.fi" target="_blank">
                <FraktioLogo className={s.fraktioLogo} />
                <span>fraktio</span>
                </a>
            </h2>
        </div>
    </header>
)
