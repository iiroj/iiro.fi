import { loadableReady } from '@loadable/component'
import { createElement } from 'react'
import { hydrate } from 'react-dom'

const root = document.getElementById('root')

const renderReact = async (elem) => new Promise((resolve) => void hydrate(elem, root, resolve))

const boot = async () => {
    const [{ default: App }, { createBrowserHistory }] = await Promise.all([
        import('./components/App'),
        import('history'),
        loadableReady(),
    ])
    await renderReact(createElement(App, { history: createBrowserHistory() }))
}

window.addEventListener('DOMContentLoaded', boot)
