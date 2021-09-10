/// <reference types="react-dom/experimental" />
/// <reference types="react/experimental" />

import { loadableReady } from '@loadable/component'
import { createBrowserHistory } from 'history'
import React from 'react'
import { hydrateRoot } from 'react-dom'

import App from '../src/index'

const boot = async (): Promise<void> => {
    await loadableReady()

    const rootElement = document.getElementById('root')
    if (!rootElement) return

    const root = hydrateRoot(rootElement)
    const history = createBrowserHistory()

    root.render(<App history={history} />)
}

window.addEventListener('DOMContentLoaded', boot)
