import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'

import { ProfilePicture } from 'components/ProfilePicture'
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
                            <ProfilePicture className={s.picture} />
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
                    <hr className={s.hr}/>
                    <section className={s.about}>
                        <p><strong>I’m Iiro Jäppinen</strong>. I design user interfaces, icons and logos. Lately I’ve been defining user stories and turning them into valuable experiences.</p>
                        <p className={s.darkGrey}><strong>Right now</strong> I work at <a href="https://m.verkkokauppa.com" target="_blank" rel="noopener noreferrer"> Verkkokauppa.com</a>, Finland’s largest and best-known online retailer. My goal is to create the best omni-channel shopping experience for all kinds of people.</p>
                        <p className={s.mediumGrey}><strong>Before that</strong> I helped design the <a href="https://www.humblebundle.com" target="_blank" rel="noopener noreferrer">Humble Indie Bundle</a> brand and concept. I moved to San Francisco in the process but have then returned to Helsinki, Finland. You can reach me online for the occasional icon.</p>
                    </section>
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
