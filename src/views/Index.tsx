import Head from 'next/head'
import type { VFC } from 'react'
import React from 'react'

import LinkButton from '../components/LinkButton'

const Index: VFC = () => (
    <>
        <Head>
            <title>Iiro Jäppinen</title>
            <meta content="Web Competence Lead at S Group" name="description" />
        </Head>

        <h1>Iiro Jäppinen</h1>

        <h2>Web Competence Lead at S Group</h2>

        <p>I build web experiences, develop tooling, and maintain open-source libraries.</p>

        <footer>
            <nav>
                <ul>
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
    </>
)

export default Index
