import './App.css' // eslint-disable-line import/no-unassigned-import

import React, { Suspense } from 'react'
import type { FilledContext } from 'react-helmet-async'
import { Helmet, HelmetProvider } from 'react-helmet-async'

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
            </Helmet>

            <Suspense fallback={<>Loading...</>}>
                <Route />
            </Suspense>
        </HelmetProvider>
    )
}

App.displayName = 'App'

export default withRouter(App)
