import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'

import { IconEmail, IconLinkedin, IconDribbble, IconGitHub } from 'Icons'
import IndexBlogPreview from 'IndexBlogPreview'
import 'index.scss'

const Index = (props) => {
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
                <header className="index-header">
                    <div className="container">
                        <img
                            className="picture"
                            src="/profilePicture.jpg"
                            srcSet="/profilePicture.jpg 1x,
                            /profilePicture@2x.jpg 2x,
                            /profilePicture@3x.jpg 3x" />
                        <h1 className="name">Iiro Jäppinen</h1>
                        <h2 className="title">UX <span className="amp">&</span> UI Designer</h2>
                    </div>
                </header>
                <section className="index-links">
                    <ul className="container">
                        <li>
                            <a
                                className="link"
                                href="mailto:iiro@jappinen.fi"
                                >
                                <IconEmail />
                                <span>iiro@jappinen.fi</span>
                            </a>
                        </li>
                        <li>
                            <a
                                className="link"
                                href="https://fi.linkedin.com/in/iiroj"
                                >
                                <IconLinkedin />
                                <span>LinkedIn</span>
                            </a>
                        </li>
                        <li>
                            <a
                                className="link"
                                href="https://github.com/iiroj"
                                >
                                <IconGitHub />
                                <span>GitHub</span>
                            </a>
                        </li>
                        <li>
                            <a
                                className="link"
                                href="https://dribbble.com/iiroj"
                                >
                                <IconDribbble />
                                <span>Dribbble</span>
                            </a>
                        </li>
                    </ul>
                </section>
                <IndexBlogPreview posts={props.route.pages} />
            </article>
        </main>
    )
}

export { Index as default }
