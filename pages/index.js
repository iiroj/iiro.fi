import React from 'react'
import Helmet from 'react-helmet'

import { IndexHeader } from 'components/IndexHeader'
import { IndexLinks } from 'components/IndexLinks'
import { IndexBlogPreview } from 'components/IndexBlogPreview'
import { IndexAbout } from 'components/IndexAbout'

import s from './styles.module.css'

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

const Index = (props) => (
    <main>
        <article className={s.container}>
            <Helmet
                title="Iiro Jäppinen"
                script={[{type: 'application/ld+json', innerHTML: IndexMicroData }]}
            />
            <IndexHeader />
            <IndexLinks />
            <IndexBlogPreview post={props.data.allMarkdownRemark.edges[0].node} />
            <IndexAbout />
        </article>
    </main>
)

export { Index as default }

export const pageQuery = `
query Index {
    allMarkdownRemark(sortBy: { fields: frontmatter___date, order: DESC }, limit: 1) {
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
