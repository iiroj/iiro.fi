import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import createEmotionServer from '@emotion/server/create-instance'
import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server'
import { createMemoryHistory } from 'history'
import React from 'react'
import { renderToString } from 'react-dom/server'

import App from './components/App'

const whitespaceRegExp = /^\s+/gm
const emptyLineRegExp = /^\s*$(?:\r\n?|\n)/gm

const renderer = async ({ path, stats }) => {
    const extractor = new ChunkExtractor({ entrypoints: ['main'], stats })
    const history = createMemoryHistory({ initialEntries: [path] })
    const helmetContext = {}
    const cache = createCache({ key: 'css' })
    const { extractCritical } = createEmotionServer(cache)

    const app = (
        <ChunkExtractorManager extractor={extractor}>
            <CacheProvider value={cache}>
                <App helmetContext={helmetContext} history={history} />
            </CacheProvider>
        </ChunkExtractorManager>
    )

    const { html, css } = extractCritical(renderToString(app))
    const scriptTags = extractor.getScriptTags({ type: 'module' }).replace(/async/gm, 'defer')

    return `
    <!DOCTYPE html>
    <html ${helmetContext.helmet.htmlAttributes.toString()}>
      <head>
        <meta name="version" content="${stats.hash}" />
        ${helmetContext.helmet.meta.toString()}
        ${helmetContext.helmet.link.toString()}
        ${helmetContext.helmet.title.toString()}
        ${helmetContext.helmet.script.toString()}
        ${scriptTags}
        <style>${css}</style>
      </head>
      <body ${helmetContext.helmet.bodyAttributes.toString()}>
        <div id="root">${html}</div>
      </body>
    </html>
  `
        .replace(whitespaceRegExp, '')
        .replace(emptyLineRegExp, '')
}

export default renderer
