import Head from 'next/head'
import React, { memo } from 'react'

import LinkButton from '../components/LinkButton'
import Main from '../components/Main'
import Text from '../components/Text'

const NotFound = () => (
    <Main>
        <Head>
            <title>Page Not Found</title>
            <meta content="noarchive, nofollow, noindex" name="robots" />
        </Head>

        <Text.H1>Four Zero Four</Text.H1>

        <Text.H2>Page Not Found</Text.H2>

        <nav>
            <LinkButton href="/">Back Home</LinkButton>
        </nav>
    </Main>
)

NotFound.displayName = 'NotFound'

export default memo(NotFound)
