import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import createEmotionServer from '@emotion/server/create-instance'
import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server'
import { createMemoryHistory } from 'history'
import type { Renderer } from 'html-renderer-webpack-plugin'
import { renderToString } from 'react-dom/server'
import type { FilledContext } from 'react-helmet-async'

import App from './components/App'

const whitespaceRegExp = /^\s+/gm
const emptyLineRegExp = /^\s*$(?:\r\n?|\n)/gm

const renderer: Renderer = async ({ path, stats }) => {
    const extractor = new ChunkExtractor({ entrypoints: ['main'], stats })
    const history = createMemoryHistory({ initialEntries: [path!] })
    const helmetContext = {} as FilledContext
    const cache = createCache({ key: 'css' })
    const { extractCriticalToChunks, constructStyleTagsFromChunks } = createEmotionServer(cache)

    const app = (
        <ChunkExtractorManager extractor={extractor}>
            <CacheProvider value={cache}>
                <App helmetContext={helmetContext} history={history} />
            </CacheProvider>
        </ChunkExtractorManager>
    )

    const { html, styles } = extractCriticalToChunks(renderToString(app))

    const scriptTags = extractor
        .getScriptTags({ type: 'module' })
        .replace(/async/gm, 'defer')
        .replace(/^.*hot-update\.mjs.*$/gm, '')

    return `
    <!DOCTYPE html>
    <html ${helmetContext.helmet.htmlAttributes.toString()}>
      <head>
        <meta name="version" content="${stats.hash}" />
        ${helmetContext.helmet.meta.toString()}
        ${helmetContext.helmet.link.toString()}
        ${helmetContext.helmet.title.toString()}
        ${helmetContext.helmet.script.toString()}
        ${constructStyleTagsFromChunks({ html, styles })}
        ${scriptTags}
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
