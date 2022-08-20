import Head from 'next/head'
import Link from 'next/link'
import type { FC } from 'react'
import React from 'react'

const NotFound: FC = () => (
    <>
        <Head>
            <title>Page Not Found</title>
            <meta content="noarchive, nofollow, noindex" name="robots" />
        </Head>

        <h1>Four Zero Four</h1>

        <h2>Page Not Found</h2>

        <footer>
            <nav>
                <ul>
                    <li>
                        <Link href="/">Back Home</Link>
                    </li>
                </ul>
            </nav>
        </footer>
    </>
)

NotFound.displayName = 'NotFound'

export default NotFound
