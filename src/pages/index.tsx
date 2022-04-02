import Head from 'next/head'
import type { VFC } from 'react'
import React from 'react'

import LinkButton from '../components/LinkButton'
import Main from '../components/Main'
import Text from '../components/Text'
import Ul from '../components/Ul'
import microdata from '../constants/microdata.json'

const Root: VFC = () => (
    <Main>
        <Head>
            <title>Iiro Jäppinen</title>
            <meta content="Senior Web Engineer at SOK" name="description" />
            <script type="application/ld+json">{JSON.stringify(microdata)}</script>
        </Head>

        <Text.H1>Iiro Jäppinen</Text.H1>

        <Text.H2>Senior Web Engineer at SOK</Text.H2>

        <Text.P>I build web experiences, develop tooling, and maintain open-source libraries.</Text.P>

        <footer>
            <nav>
                <Ul>
                    <li>
                        <LinkButton href="https://github.com/iiroj" rel="author">
                            GitHub
                        </LinkButton>
                    </li>
                    <li>
                        <LinkButton href="https://linkedin.com/in/iiroj" rel="author">
                            LinkedIn
                        </LinkButton>
                    </li>
                </Ul>
            </nav>
        </footer>
    </Main>
)

Root.displayName = 'Root'

export default Root
