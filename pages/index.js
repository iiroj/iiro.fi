import React, { PropTypes } from 'react'
import Helmet from 'react-helmet'
import { config } from 'config'
import styles from 'index.module.css'

import Profile from 'Profile'
import Links from 'Links'
import Posts from 'Posts'

function Index (props) {
    const pages = props.route.pages
    const posts = []

    pages.forEach((page) => {
        if (page.file.ext === 'md' && page.data.draft !== true) {
            posts.push(page)
        }
    })

    const breadcrumb = `{
        "@context": "http://schema.org",
        "@type": "WebSite",
        "name": "${config.siteTitle}",
        "alternateName": "${config.authorName}",
        "url": "${config.siteUrl}"
    }`
    const microdata = `{
        "@context": "http://schema.org",
        "@type": "Person",
        "name": "${config.authorName}",
        "jobTitle": "${config.authorJobTitle}",
        "worksFor": "${config.authorWorksAt}",
        "url": "${config.siteUrl}",
        "email": "${config.authorEmail}",
        "nationality": "Finland",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "Finland",
            "addressLocality": "Helsinki"
        },
        "sameAs": [
            "https://fi.linkedin.com/in/iiroj",
            "https://dribbble.com/iiroj",
            "https://github.com/iiroj",
            "https://gitlab.com/u/iiroj"
        ]
    }`

    return (
        <div className={styles.container}>
            <Helmet
                title={config.authorName}
                script={[
                    { type: 'application/ld+json', innerHTML: breadcrumb },
                    { type: 'application/ld+json', innerHTML: microdata }
                ]}
            />
            <main className={styles.about}>
                <header className={styles.header}>
                    <Profile />
                    <h1 className={styles.headerText}>iiro.fi</h1>
                </header>
                <p><strong>I’m Iiro Jäppinen</strong>. I design user interfaces, icons and logos. Lately I’ve been defining user stories and turning them into valuable experiences.</p>
                <p className={styles.darkGrey}><strong>Right now</strong> I work at <a href="https://m.verkkokauppa.com" target="_blank" rel="noopener noreferrer"> Verkkokauppa.com</a>, Finland’s largest and best-known online retailer. My goal is to create the best omni-channel shopping experience for all kinds of people.</p>
                <p className={styles.mediumGrey}><strong>Before that</strong> I helped design the <a href="https://www.humblebundle.com" target="_blank" rel="noopener noreferrer">Humble Indie Bundle</a> brand and concept. I moved to San Francisco in the process but have then returned to Helsinki, Finland. You can reach me online for the occasional icon.</p>
            </main>
            <Links />
            <Posts posts={posts} />
        </div>
    )
}

Index.propTypes = {
    route: PropTypes.object.isRequired
}

export { Index as default }
