import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'

import { IconEmail, IconLinkedin, IconDribbble, IconGitHub } from 'Icons'

import s from 'index.module.css'

export default function Index () {
    const microdata = `{
        '@context': 'http://schema.org',
        '@type': 'Person',
        'name': 'Iiro Jäppinem',
        'jobTitle': 'UX & UI Designer',
        'worksFor': 'Verkkokauppa.com',
        'url': 'https://iiro.fi/',
        'email': 'iiro@jappinen.fi',
        'nationality': 'Finland',
        'address': {
            '@type': 'PostalAddress',
            'addressCountry': 'Finland',
            'addressLocality': 'Helsinki'
        },
        'sameAs': [
            'https://fi.linkedin.com/in/iiroj',
            'https://dribbble.com/iiroj',
            'https://github.com/iiroj'
        ]
    }`

    return (
        <main>
            <article>
                <Helmet
                    title={"Iiro Jäppinen"}
                    script={[{type: 'application/ld+json', innerHTML: microdata }]} />
                <header className={s.profile}>
                    <div className={s.profileContainer}>
                        <img
                            className={s.profilePicture}
                            src="/profilePicture.jpg"
                            srcSet="/profilePicture.jpg 1x,
                                   /profilePicture@2x.jpg 2x,
                                   /profilePicture@3x.jpg 3x" />
                        <h1 className={s.profileName}>Iiro Jäppinen</h1>
                        <h2 className={s.profileTitle}>UX <span className={s.ampersand}>&</span> UI Designer</h2>
                    </div>
                    <aside className={s.scroll}></aside>
                </header>
                <section className={s.links}>
                    <ul className={s.linksContainer}>
                        <li>
                            <a
                                className={s.link}
                                href="mailto:iiro@jappinen.fi"
                            >
                                <IconEmail />
                                <span>iiro@jappinen.fi</span>
                            </a>
                        </li>
                    </ul>
                </section>
            </article>
        </main>
    )
}
