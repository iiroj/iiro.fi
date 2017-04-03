import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'

import { default as profile1x } from 'static/profilePicture.jpg'
import { default as profile2x } from 'static/profilePicture@2x.jpg'
import { default as profile3x } from 'static/profilePicture@3x.jpg'
import Links from 'Links'
import { FraktioLogo } from 'Fraktio'

import 'index.scss'

export default (props) => {
    const siteTitle = props.data.site.siteMetadata.title
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
                    title={siteTitle}
                    script={[{type: 'application/ld+json', innerHTML: microdata }]} />
                <header className="index-header">
                    <div className="container">
                        <img
                            className="picture"
                            src={profile1x}
                            srcSet={`${profile1x} 1x,
                            ${profile2x} 2x,
                            ${profile3x} 3x`} />
                        <h1 className="name">Iiro Jäppinen</h1>
                        <h2 className="title">
                            UX <span className="amp">&</span> UI Designer at <a href="https://fraktio.fi" target="_blank">
                                <FraktioLogo />
                                <span>fraktio</span>
                            </a>
                        </h2>
                    </div>
                </header>
                <div className="index-links_blog">
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
