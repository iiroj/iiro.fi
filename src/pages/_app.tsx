/* eslint-disable-next-line import/no-unassigned-import */
import '../styles.css'

import type { AppProps } from 'next/app'
import React, { VFC } from 'react'

const App: VFC<AppProps> = ({ Component, pageProps }) => <Component {...pageProps} />

App.displayName = 'App'

export default App
