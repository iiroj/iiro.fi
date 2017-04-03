import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'

import { default as profile1x } from 'static/profilePicture.jpg'
import { default as profile2x } from 'static/profilePicture@2x.jpg'
import { default as profile3x } from 'static/profilePicture@3x.jpg'
import { FraktioLogo } from 'components/Fraktio'
import Links from 'components/Links'

import s from 'styles/index.module.css'

export default function Index (props) {
    const siteTitle = props.data.site.siteMetadata.title
    const microdata = `{
        '@context': 'http://schema.org',
        '@type': 'Person',
        'name': 'Iiro Jäppinen',
        'jobTitle': 'UX & UI Designer',
        'worksFor': 'Fraktio',
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
                    title={siteTitle}
                    script={[{type: 'application/ld+json', innerHTML: microdata }]} />
                <header className={s.header}>
                    <div className={s.headerContainer}>
                        <img
                            className={s.picture}
                            src={profile1x}
                            srcSet={`${profile1x} 1x,
                            ${profile2x} 2x,
                            ${profile3x} 3x`} />
                        <h1 className={s.name}>Iiro Jäppinen</h1>
                        <h2 className={s.title}>
                            UX <span className={s.amp}>&</span> UI Designer at <a className={s.fraktio} href="https://fraktio.fi" target="_blank">
                                <FraktioLogo className={s.fraktioLogo} />
                                <span>fraktio</span>
                            </a>
                        </h2>
                    </div>
                </header>
                <div className={s.container}>
                    <Links />
                </div>
            </article>
        </main>
    )
}

export const pageQuery = `
{
  site {
    siteMetadata {
      title
    }
  }
}
`
