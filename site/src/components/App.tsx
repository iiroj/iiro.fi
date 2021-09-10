import { css } from '@linaria/core'
import React, { Suspense } from 'react'
import type { FilledContext } from 'react-helmet-async'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import microdata from '../constants/microdata.json'
import { colors } from '../design/colors'
import withRouter from '../hocs/withRouter'
import useRouter from '../hooks/useRouter'
import colorStyles from '../styles/colors'
import fonts from '../styles/fonts'

export const globals = css`
    :global() {
        :root {
            ${colorStyles}
        }

        ${fonts}

        body {
            background-color: ${colors.background.primary};
            color: ${colors.text.primary};
            margin: 0;
        }
    }
`

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
                <meta name="theme-color" content="#ffffff" />
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
