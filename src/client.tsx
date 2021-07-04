import { loadableReady } from '@loadable/component'
import React from 'react'
import { hydrate } from 'react-dom'

const boot = async (): Promise<void> => {
    const [{ default: App }, { createBrowserHistory }] = await Promise.all([
        import('./components/App'),
        import('history'),
        loadableReady(),
    ])

    hydrate(<App history={createBrowserHistory()} />, document.body)
}

window.addEventListener('DOMContentLoaded', boot)
