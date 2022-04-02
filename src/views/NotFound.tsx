import Head from 'next/head'
import React from 'react'

import LinkButton from '../components/LinkButton'

const NotFound = () => (
    <>
        <Head>
            <title>Page Not Found</title>
            <meta content="noarchive, nofollow, noindex" name="robots" />
        </Head>

        <h1>Four Zero Four</h1>

        <h2>Page Not Found</h2>

        <nav>
            <LinkButton href="/">Back Home</LinkButton>
        </nav>
    </>
)

NotFound.displayName = 'NotFound'

export default NotFound
