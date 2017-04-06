import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'

import { default as profile1x } from 'static/profilePicture.jpg'
import { default as profile2x } from 'static/profilePicture@2x.jpg'
import { default as profile3x } from 'static/profilePicture@3x.jpg'
import { FraktioLogo } from 'components/Fraktio'
import Links from 'components/Links'
import IndexBlogPreview from 'components/IndexBlogPreview'

import s from 'styles/index.module.css'

export default class Index extends Component {
    render () {
        const microdata = `
{
    '@context': 'http://schema.org',
    '@type': 'Person',
    'name': '${this.props.data.site.siteMetadata.name}',
    'jobTitle': '${this.props.data.site.siteMetadata.jobTitle}',
    'worksFor': '${this.props.data.site.siteMetadata.worksFor}',
    'url': '${this.props.data.site.siteMetadata.siteUrl}',
    'email': '${this.props.data.site.siteMetadata.email}',
    'nationality': '${this.props.data.site.siteMetadata.country}',
    'address': {
        '@type': 'PostalAddress',
        'addressCountry': '${this.props.data.site.siteMetadata.country}',
        'addressLocality': '${this.props.data.site.siteMetadata.city}'
    },
    'sameAs': [
        '${this.props.data.site.siteMetadata.linkedin}',
        '${this.props.data.site.siteMetadata.dribbble}',
        '${this.props.data.site.siteMetadata.github}'
    ]
}
`

        return (
            <main>
                <article>
                    <Helmet
                        title={this.props.data.site.siteMetadata.name}
                        script={[{type: 'application/ld+json', innerHTML: microdata }]}
                    />
                    <header className={s.header}>
                        <div className={s.headerContainer}>
                            <img
                                className={s.picture}
                                src={profile1x}
                                srcSet={`${profile1x} 1x,
                                ${profile2x} 2x,
                                ${profile3x} 3x`} />
                            <h1 className={s.name}>{this.props.data.site.siteMetadata.name}</h1>
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
                        <IndexBlogPreview post={this.props.data.allMarkdownRemark.edges[0].node} />
                    </div>
                </article>
            </main>
        )
    }
}

export const pageQuery = `
query Index {
    site {
        siteMetadata {
            city
            country
            dribbble
            email
            github
            jobTitle
            linkedin
            name
            siteUrl
            worksFor
        }
    }
    allMarkdownRemark(sortBy: { fields: frontmatter___date, order: DESC }, limit: 1) {
        edges {
            node {
                slug
                frontmatter {
                    title
                    date
                }
            }
        }
    }
}
`
