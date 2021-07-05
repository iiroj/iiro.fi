/// <reference types="react-dom/experimental" />
/// <reference types="react/experimental" />

import { loadableReady } from '@loadable/component'
import React from 'react'
import { createRoot } from 'react-dom'

const boot = async (): Promise<void> => {
    const [{ default: App }, { createBrowserHistory }] = await Promise.all([
        import('./components/App'),
        import('history'),
        loadableReady(),
    ])

    createRoot(document.body).render(<App history={createBrowserHistory()} />)
}

window.addEventListener('DOMContentLoaded', boot)
