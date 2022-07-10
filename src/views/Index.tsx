import Head from 'next/head'
import Link from 'next/link'
import type { FC } from 'react'
import React from 'react'

const Index: FC = () => (
    <>
        <Head>
            <title>Iiro Jäppinen</title>
            <meta content="Web Competence Lead at SOK" name="description" />
        </Head>

        <h1>Iiro Jäppinen</h1>

        <h2>Web Competence Lead at SOK</h2>

        <p>I build web experiences, develop tooling, and maintain open-source libraries.</p>

        <footer>
            <nav>
                <ul>
                    <li>
                        <Link href="https://github.com/iiroj" rel="author">
                            GitHub
                        </Link>
                    </li>
                    <li>
                        <Link href="https://linkedin.com/in/iiroj" rel="author">
                            LinkedIn
                        </Link>
                    </li>
                </ul>
            </nav>
        </footer>
    </>
)

export default Index
