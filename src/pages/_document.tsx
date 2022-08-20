import { Head, Html, Main, NextScript } from 'next/document'
import type { FC } from 'react'
import React from 'react'

const Document: FC = () => (
    <Html lang="en">
        <Head>
            <link rel="stylesheet" href="/styles.css" />
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
)

Document.displayName = 'Document'

export default Document
