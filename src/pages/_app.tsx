/* eslint-disable-next-line import/no-unassigned-import */
import '../styles.css'

import type { AppProps } from 'next/app'
import type { FC } from 'react'
import React from 'react'

const App: FC<AppProps> = ({ Component, pageProps }) => <Component {...pageProps} />

App.displayName = 'App'

export default App
