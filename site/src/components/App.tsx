import './App.css' // eslint-disable-line import/no-unassigned-import

import React, { Suspense } from 'react'
import type { FilledContext } from 'react-helmet-async'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import microdata from '../constants/microdata.json'
import { raw } from '../design/colors.css'
import withRouter from '../hocs/withRouter'
import useRouter from '../hooks/useRouter'

const htmlClass = typeof window === 'undefined' ? 'no-js' : 'js'

interface Props {
    helmetContext?: Partial<FilledContext>
}

const App = ({ helmetContext }: Props) => {
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
                <meta name="description" content="Platform Developer at Verkkokauppa.com" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content={raw.background.primary.dark} media="(prefers-color-scheme: dark)" />
                <meta name="theme-color" content={raw.background.primary.light} media="(prefers-color-scheme: light)" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <script type="application/ld+json" data-rh="true">
                    {JSON.stringify(microdata)}
                </script>
            </Helmet>

            <Suspense fallback={<>Loading...</>}>
                <Route />
            </Suspense>
        </HelmetProvider>
    )
}

App.displayName = 'App'

export default withRouter(App)
