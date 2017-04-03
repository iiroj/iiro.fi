import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'

import { default as profile } from 'static/profilePicture@2x.jpg'

export default class BlogPost extends Component {
    static propTypes = {
        post: PropTypes.object.isRequired
    }

    render () {
        const post = this.props.post
        const body = post.data.body
        const postTitle = post.data.title
        const postRawDate = post.data.date
        const postDate = new Date(postRawDate).toDateString()

        const microdata = `{
            "@context": "http://schema.org",
            "@type": "BlogPosting",
            "author": {
                "@type": "Person",
                "name": "Iiro Jäppinen"
            },
            "publisher": {
                "@type": "Organization",
                "name": "iiro.fi",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://iiro.fi/${profile}",
                    "height": 384,
                    "width": 384
                }
            },
            "datePublished": "${postRawDate}",
            "dateModified": postRawDate,
            "headline": "${postTitle}",
            "image": {
                "@type": "ImageObject",
                "url": "https://iiro.fi/${profile}",
                "height": 384,
                "width": 384
            },
            "mainEntityOfPage": "https://iiro.fi${post.path}"
        }`

        return (
            <div>
                <Helmet
                    title={`${postTitle} — by Iiro Jäppinen`}
                    script={[{ type: 'application/ld+json', innerHTML: microdata }]} />
                <div>
                    <main>
                        <article>
                            <hgroup>
                                <h1>{postTitle}</h1>
                                <h6>
                                    <span>On </span>
                                    <time dateTime={postRawDate}>{postDate}</time>
                                    <span>, by Iiro Jäppinen</span>
                                </h6>
                            </hgroup>
                            <section dangerouslySetInnerHTML={{ __html: body }} />
                        </article>
                    </main>
                </div>
            </div>
        )
    }
}
