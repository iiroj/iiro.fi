import React from 'react'
import Helmet from 'react-helmet'
import Back from 'Back'
import VerkkokauppaCom from './VerkkokauppaCom'
import { config } from 'config'
import styles from './index.module.css'

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
        title='Portfolio'
        script={[
          {'type': 'application/ld+json', 'innerHTML': breadcrumb}
        ]}
      />
      <Back />
      <div className={styles.container}>
        <VerkkokauppaCom />
        <aside className={styles.comingLater}>
          <h2>More coming soon<em>(ish)</em>...</h2>
        </aside>
      </div>
    </div>
  )
}

export default Portfolio
