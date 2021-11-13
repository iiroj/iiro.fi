// eslint-disable-next-line import/no-unassigned-import
import '../components/_app.css'

import type { AppProps } from 'next/app'
import React, { memo, VFC } from 'react'

const App: VFC<AppProps> = ({ Component, pageProps }) => <Component {...pageProps} />

App.displayName = 'App'

export default memo(App)
