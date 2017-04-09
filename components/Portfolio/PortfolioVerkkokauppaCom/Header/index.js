import React from 'react'

import  { default as pixel1x } from './pixel.png'
import  { default as pixel2x } from './pixel@2x.png'
import  { default as pixel3x } from './pixel@3x.png'
import  { default as frontpage1x } from './frontpage.jpg'
import  { default as frontpage2x } from './frontpage@2x.jpg'
import  { default as frontpage3x } from './frontpage@3x.jpg'
import s from './styles.module.css'

export const VerkkokauppaComHeader = () => (
    <header className={s.header}>
        <div className={s.headerText}>
            <h1 className={s.heading}>Verkkokauppa.com</h1>
            <p>UX/UI designer since November 2014.
                As the resident web designer,
                I oversee the visual direction of Verkkokauppa.com’s
                website.</p>
            <a
                href="https://www.verkkokauppa.com/"
                target="_blank"
                className={s.buttonLink}
            >
                Visit Verkkokauppa.com
            </a>
        </div>
        <div className={s.frontPageContainer}>
            <img
                className={s.frontPagePhone}
                src={pixel1x}
                srcSet={`${pixel1x} 1x, ${pixel2x} 2x, ${pixel3x} 3x`}
            />
            <img
                className={s.frontPageImage}
                src={frontpage1x}
                srcSet={`${frontpage1x} 1x, ${frontpage2x} 2x, ${frontpage3x} 3x`}
            />
        </div>
    </header>
)
