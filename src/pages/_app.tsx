import type { AppProps } from 'next/app'
import Head from 'next/head'
import React, { memo, VFC } from 'react'

import Globals from '../components/Globals'

const App: VFC<AppProps> = ({ Component, pageProps }) => (
    <>
        <Head>
            <html lang="en" />
        </Head>
        <Globals />
        <Component {...pageProps} />
    </>
)

App.displayName = 'App'

export default memo(App)
