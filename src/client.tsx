/// <reference types="@emotion/react/types/css-prop" />

import { loadableReady } from '@loadable/component'
import { hydrate } from 'react-dom'

const boot = async (): Promise<void> => {
    const [{ default: App }, { createBrowserHistory }] = await Promise.all([
        import('./components/App'),
        import('history'),
        loadableReady(),
    ])

    const root = document.getElementById('root')

    hydrate(<App history={createBrowserHistory()} />, root)
}

window.addEventListener('DOMContentLoaded', boot)
