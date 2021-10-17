/// <reference types="react-dom/experimental" />
/// <reference types="react/experimental" />

import { loadableReady } from '@loadable/component'
import React from 'react'
import { hydrateRoot } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from '../src/index'

void loadableReady().then(() => {
    const rootElement = document.getElementById('root')
    if (!rootElement) return

    const root = hydrateRoot(rootElement)

    root.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    )
})
