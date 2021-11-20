import type { AppProps } from 'next/app'
import React, { memo, VFC } from 'react'

import Globals from '../components/Globals'

const App: VFC<AppProps> = ({ Component, pageProps }) => (
    <>
        <Globals />
        <Component {...pageProps} />
    </>
)

App.displayName = 'App'

export default memo(App)
