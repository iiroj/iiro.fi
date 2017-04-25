import React from 'react'
import Link from 'gatsby-link'

import s from './styles.module.css'

export default function IndexBlog (props) {
    const pageLinks = []
    const edges = props.edges

    edges.forEach((edge) => {
        const post = edge.node
        const slug = post.slug
        const title = post.frontmatter.title

        pageLinks.push(
            <li key={slug}>
                <Link to={slug} className={s.post}>
                    <article>
                        <h4 className={s.title}>{title}</h4>
                    </article>
                </Link>
            </li>
        )
    })

    return (
        <div className={s.container}>
            <h3 className={s.header}>Blog:</h3>
            <ul className={s.posts}>
                {pageLinks}
            </ul>
        </div>
    )
}
