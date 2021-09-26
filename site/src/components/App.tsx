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
                <meta content="Platform Developer at Verkkokauppa.com" name="description" />
                <link href="/site.webmanifest" rel="manifest" />
                <link href="/favicon.ico" rel="alternate icon" type="image/x-icon" />
                <link color="black" href="/icon.svg" rel="icon mask-icon" type="image/svg+xml" />
                <link href="/icon-16.png" rel="apple-touch-icon" sizes="16x16" type="image/png" />
                <link href="/icon-16.webp" rel="apple-touch-icon" sizes="16x16" type="image/webp" />
                <link href="/icon-32.png" rel="apple-touch-icon" sizes="32x32" type="image/png" />
                <link href="/icon-32.webp" rel="apple-touch-icon" sizes="32x32" type="image/webp" />
                <link href="/icon-128.png" rel="apple-touch-icon" sizes="128x128" type="image/png" />
                <link href="/icon-128.webp" rel="apple-touch-icon" sizes="128x128" type="image/webp" />
                <link href="/icon-512.png" rel="apple-touch-icon" sizes="512x512" type="image/png" />
                <link href="/icon-512.webp" rel="apple-touch-icon" sizes="512x512" type="image/webp" />
                <meta content="width=device-width, initial-scale=1" name="viewport" />
                <meta content={raw.background.primary.dark} media="(prefers-color-scheme: dark)" name="theme-color" />
                <meta content={raw.background.primary.light} name="theme-color" />
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
