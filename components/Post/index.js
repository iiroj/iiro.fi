import React, { PropTypes } from 'react'
import Helmet from 'react-helmet'
import Back from 'Back'
import About from 'About'
import { config } from 'config'
import styles from './index.module.css'

function Post (props) {
  const post = props.post
  const body = post.data.body
  const postTitle = post.data.title
  const postRawDate = post.data.date
  const postDate = new Date(postRawDate).toDateString()

  const breadcrumb = `{
    "@context": "http://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@id": "${config.siteUrl}",
        "name": "Posts",
        "image": "${config.siteUrl}/icon.png"
      }
    },{
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@id": "${config.siteUrl}${post.path}",
        "name": "${postTitle}",
        "image": "${config.siteUrl}/profile.jpg"
      }
    }]
  }`
  const microdata = `{
    "@context": "http://schema.org",
    "@type": "BlogPosting",
    "author": {
      "@type": "Person",
      "name": "${config.authorName}"
    },
    "publisher": {
      "@type": "Organization",
      "name": "${config.siteTitle}",
        "logo": {
        "@type": "ImageObject",
          "url": "${config.siteUrl}/icon.png",
          "height": 600,
          "width": 600
      }
    },
    "datePublished": "2016-11-22",
    "dateModified": "2016-11-22",
    "headline": "Readme",
    "image": {
      "@type": "ImageObject",
        "url": "${config.siteUrl}/profile.jpg",
        "height": 512,
        "width": 512
    },
    "mainEntityOfPage": "${config.siteUrl}${post.path}"
  }`

  return (
    <div>
      <Helmet
        title={`${postTitle} — by ${config.authorName}`}
        script={[
          {'type': 'application/ld+json', 'innerHTML': breadcrumb},
          {'type': 'application/ld+json', 'innerHTML': microdata}
        ]}
      />
      <Back />
      <div className={styles.postContainer}>
        <main className={styles.post}>
          <hgroup className={styles.hgroup}>
            <h1 className={styles.title}>{postTitle}</h1>
            <h6 className={styles.meta}>
              <span>On </span>
              <time dateTime={postRawDate}>{postDate}</time>
              <span>, by {config.authorName}</span>
            </h6>
          </hgroup>
          <div
            className={styles.postBody}
            dangerouslySetInnerHTML={{ __html: body }}
          />
        </main>
      </div>
      <About />
    </div>
  )
}

Post.propTypes = {
  post: PropTypes.object.isRequired
}

export { Post as default }
