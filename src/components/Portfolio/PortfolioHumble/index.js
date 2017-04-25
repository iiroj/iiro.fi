import React from 'react'

import { default as humble1x } from './humble-logo.png'
import { default as humble2x } from './humble-logo@2x.png'
import { default as humble3x } from './humble-logo@3x.png'

import s from './styles.module.css'

export const PortfolioHumble = () => (
    <article className={s.humble}>
        <img
            className={s.logo}
            src={humble1x}
            srcSet={`${humble1x} 1x, ${humble2x} 2x, ${humble3x} 3x`}
        />
        <p className={s.text}>I designed the first <a href="https://www.humblebundle.com" target="_blank">Humble Bundle</a> website and many after that. I worked with Humble from its inception in 2011 until summer 2014.</p>
        <p className={s.text}>People often follow up with whether or not I also created the beautiful icons representing bundled games. I did not.</p>
    </article>
)
