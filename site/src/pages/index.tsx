import Head from 'next/head'
import type { VFC } from 'react'
import React, { memo } from 'react'

import { p, ul } from '../components/index.css'
import LinkButton from '../components/LinkButton'
import microdata from '../constants/microdata.json'
import { main } from '../design/main.css'
import { h1, h2 } from '../design/text.css'

const Root: VFC = () => (
    <main className={main}>
        <Head>
            <title>Iiro Jäppinen</title>
            <meta content="Senior Web Engineer at SOK" name="description" />
            <script type="application/ld+json">{JSON.stringify(microdata)}</script>
        </Head>

        <h1 className={h1}>Iiro Jäppinen</h1>

        <h2 className={h2}>Senior Web Engineer at SOK</h2>

        <p className={p}>I build web experiences, develop tooling, and maintain open-source libraries.</p>

        <footer>
            <nav>
                <ul className={ul}>
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
                </ul>
            </nav>
        </footer>
    </main>
)

Root.displayName = 'Root'

export default memo(Root)
