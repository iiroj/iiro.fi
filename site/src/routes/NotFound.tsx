import React from 'react'
import { Helmet } from 'react-helmet-async'

import LinkButton from '../components/LinkButton'
import { main } from '../design/main.css'
import { h1, h2 } from '../design/text.css'

const NotFound = () => (
    <main className={main}>
        <Helmet>
            <title>Page Not Found</title>
        </Helmet>

        <h1 className={h1}>Four Zero Four</h1>

        <h2 className={h2}>Page Not Found</h2>

        <nav>
            <LinkButton to="/">Back Home</LinkButton>
        </nav>
    </main>
)

NotFound.displayName = 'NotFound'

export default NotFound
