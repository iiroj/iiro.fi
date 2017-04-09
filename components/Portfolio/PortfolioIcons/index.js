import React from 'react'

import { default as iconsBg } from './icons.jpg'
import { default as growl1x } from './growl.png'
import { default as growl2x } from './growl@2x.png'
import { default as growl3x } from './growl@3x.png'
import { default as tune1x } from './tuneinstructor.png'
import { default as tune2x } from './tuneinstructor@2x.png'
import { default as tune3x } from './tuneinstructor@3x.png'

import s from './styles.module.css'

export const PortfolioIcons = () => (
    <article className={s.icons}>
        <img
            className={s.iconsGrid}
            src={iconsBg}
            />
        <h1 className={s.heading}>Icon Aficionado</h1>
        <div className={s.iconExamples}>
            <div className={s.iconGrowl}>
                <img
                    src={growl1x}
                    srcSet={`${growl1x} 1x, ${growl2x} 2x, ${growl3x} 3x`}
                />
                <a
                    href="http://growl.info"
                    target="_blank"
                    className={s.buttonLink}
                >
                    Growl
                </a>
            </div>
            <div className={s.iconTuneInstructor}>
                <img
                    src={tune1x}
                    srcSet={`${tune1x} 1x, ${tune2x} 2x, ${tune3x} 3x`}
                />
                <a
                    href="https://www.tune-instructor.de/en/"
                    target="_blank"
                    className={s.buttonLink}
                >
                    Tune•Instructor
                </a>
            </div>
        </div>
    </article>
)
