import Head from 'next/head'
import React, { memo } from 'react'

import LinkButton from '../components/LinkButton'
import { main } from '../design/main.css'
import { h1, h2 } from '../design/text.css'

const NotFound = () => (
    <main className={main}>
        <Head>
            <title>Page Not Found</title>
            <meta content="noarchive, nofollow, noindex" name="robots" />
        </Head>

        <h1 className={h1}>Four Zero Four</h1>

        <h2 className={h2}>Page Not Found</h2>

        <nav>
            <LinkButton href="/">Back Home</LinkButton>
        </nav>
    </main>
)

NotFound.displayName = 'NotFound'

export default memo(NotFound)
