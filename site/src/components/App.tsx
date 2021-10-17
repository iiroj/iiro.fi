import './App.css' // eslint-disable-line import/no-unassigned-import

import loadable from '@loadable/component'
import React from 'react'
import type { FilledContext } from 'react-helmet-async'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Route, Routes } from 'react-router'

const Root = loadable(() => import('../routes/Root'))
const NotFound = loadable(() => import('../routes/NotFound'))

const htmlClass = typeof window === 'undefined' ? 'no-js' : 'js'

interface Props {
    helmetContext?: Partial<FilledContext>
}

const App = ({ helmetContext }: Props) => (
    <HelmetProvider context={helmetContext}>
        <Helmet>
            <html className={htmlClass} lang="en" />
        </Helmet>

        <Routes>
            <Route path="/" element={<Root />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </HelmetProvider>
)

App.displayName = 'App'

export default App
