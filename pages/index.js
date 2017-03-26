import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'

import { IconEmail } from 'Icons'

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
                    </div>
                </header>
            </article>
        </main>
    )
}
