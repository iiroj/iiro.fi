import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import microdata from '../constants/microdata.json'
import withRouter from '../hocs/withRouter'
import useRouter from '../hooks/useRouter'
import Globals from './Globals'

const htmlClass = typeof window === 'undefined' ? 'no-js' : 'js'

const App = ({ helmetContext }) => {
    const { route } = useRouter()
    const { Route } = route

    return (
        <HelmetProvider context={helmetContext}>
            <Helmet>
                <html className={htmlClass} lang="en" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="icon" href="/favicon.png" type="image/x-icon" />
                <link rel="apple-touch-icon" href="/icon.png" />
                <link rel="mask-icon" href="/icon.svg" color="#333333" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#ffffff" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <script type="application/ld+json" data-rh="true">
                    {JSON.stringify(microdata)}
                </script>
            </Helmet>

            <Globals />

            <Route />
        </HelmetProvider>
    )
}

App.displayName = 'App'

export default withRouter(App)
