import React, { Component } from 'react'
import Helmet from 'react-helmet'

import { IndexHeader } from 'components/IndexHeader'
import { IndexLinks } from 'components/IndexLinks'
import IndexBlog from 'components/IndexBlog'

export default class Index extends Component {
    render () {
        const IndexMicroData = `
        {
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
        }
        `

        return (
            <div>
                <main>
                    <article>
                        <Helmet
                            title="Iiro Jäppinen"
                            script={[{type: 'application/ld+json', innerHTML: IndexMicroData }]}
                        />
                        <IndexHeader />
                        <IndexLinks />
                    </article>
                </main>
                <IndexBlog edges={this.props.data.allMarkdownRemark.edges} />
            </div>
        )
    }
}

export const pageQuery = `
query Index {
    allMarkdownRemark(sortBy: { fields: frontmatter___date, order: DESC }, frontmatter: { draft: { ne: true }}) {
        edges {
            node {
                slug
                frontmatter {
                    title
                }
            }
        }
    }
}
`
