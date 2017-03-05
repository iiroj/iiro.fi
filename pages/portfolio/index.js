import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router'
import { config } from 'config'
import styles from './index.module.css'

import VerkkokauppaCom from 'VerkkokauppaCom'
import Icons from 'Icons'

function Portfolio () {
    const breadcrumb = `{
        "@context": "http://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
            "@type": "ListItem",
            "position": 1,
            "item": {
                "@id": "${config.siteUrl}/portfolio",
                "name": "Portfolio",
                "image": "${config.siteUrl}/icon.png"
            }
        }]
    }`

    return (
        <div>
            <Helmet
                title="Portfolio of Iiro Jäppinen"
                script={[
                    { type: 'application/ld+json', innerHTML: breadcrumb }
                ]}
                />
            <div className={styles.container}>
                <nav>
                    <Link className={styles.back} to="/" title="Back to iiro.fi">Back to iiro.fi</Link>
                </nav>
                <header className={styles.header}>
                    <h1>Portfolio of Iiro Jäppinen</h1>
                </header>
                <VerkkokauppaCom />
                <Icons />
                <aside>
                    <p className={styles.more}>With more coming soon...</p>
                </aside>
            </div>
        </div>
    )
}

export { Portfolio as default }
