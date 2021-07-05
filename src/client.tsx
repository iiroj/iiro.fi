/// <reference types="react-dom/experimental" />
/// <reference types="react/experimental" />

import { loadableReady } from '@loadable/component'
import React from 'react'

const boot = async (): Promise<void> => {
    const [{ createRoot }, { default: App }, { createBrowserHistory }] = await Promise.all([
        import('react-dom'),
        import('./components/App'),
        import('history'),
        loadableReady(),
    ])

    const history = createBrowserHistory()
    const root = createRoot(document.body)

    root.render(<App history={history} />)
}

window.addEventListener('DOMContentLoaded', boot)
