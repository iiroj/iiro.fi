import React, { Component } from 'react'
import Helmet from 'react-helmet'

import { IndexHeader } from 'components/IndexHeader'
import { IndexLinks } from 'components/IndexLinks'
import IndexBlog from 'components/IndexBlog'

export default class Index extends Component {
  render () {
    const IndexMicroData = `{
  "@context": "http://schema.org",
  "@type": "Person",
  "name": "Iiro Jäppinen",
  "jobTitle": "UX & UI Designer",
  "worksFor": {
    "@type": "Organization",
    "name": "Fraktio",
    "url": "https://fraktio.fi"
  },
  "url": "https://iiro.fi/",
  "email": "iiro@jappinen.fi",
  "nationality": "Finland",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "Finland",
    "addressLocality": "Helsinki"
  },
  "sameAs": [
    "https://dribbble.com/iiroj",
    "https://fb.me/iiro.jappinen",
    "https://fi.linkedin.com/in/iiroj",
    "https://github.com/iiroj",
    "https://t.me/iiroj"
  ]
}`

    return (
      <div>
        <main>
          <article>
            <Helmet
              title='Iiro Jäppinen'
              script={[{ type: 'application/ld+json', innerHTML: IndexMicroData }]}
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

export const pageQuery = graphql`
query Index {
  allMarkdownRemark(
    sortBy: {
      fields: [frontmatter___date],
      order: DESC
    }
  ) {
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
