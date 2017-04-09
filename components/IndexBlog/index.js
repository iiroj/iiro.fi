import React from 'react'
import { Link } from 'react-router'

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
                        <h2 className={s.title}>{title}</h2>
                    </article>
                </Link>
            </li>
        )
    })

    return (
        <div className={s.container}>
            <ul className={s.posts}>
                {pageLinks}
            </ul>
        </div>
    )
}
