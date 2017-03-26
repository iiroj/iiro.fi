import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'

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
                    "url": "https://iiro.fi/icon.png",
                    "height": 600,
                    "width": 600
                }
            },
            "datePublished": "${postRawDate}",
            "dateModified": "${postRawDate}",
            "headline": "Readme",
            "image": {
                "@type": "ImageObject",
                "url": "https://iiro.fi/profile.jpg",
                "height": 512,
                "width": 512
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
