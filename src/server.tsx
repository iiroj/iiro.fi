import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server'
import { createMemoryHistory } from 'history'
import type { Renderer } from 'html-renderer-webpack-plugin'
import React from 'react'
import { renderToString } from 'react-dom/server'
import type { FilledContext } from 'react-helmet-async'
import { ServerStyleSheet } from 'styled-components'

import App from './components/App'

const whitespaceRegExp = /^\s+/gm
const emptyLineRegExp = /^\s*$(?:\r\n?|\n)/gm

const renderer: Renderer = async ({ path, stats }) => {
    const extractor = new ChunkExtractor({ entrypoints: ['main'], stats })
    const history = createMemoryHistory({ initialEntries: [path!] })
    const helmetContext = {} as FilledContext
    const sheet = new ServerStyleSheet()

    const app = (
        <ChunkExtractorManager extractor={extractor}>
            <App helmetContext={helmetContext} history={history} />
        </ChunkExtractorManager>
    )

    const html = renderToString(sheet.collectStyles(app))

    const styleTags = sheet.getStyleTags()
    sheet.seal()

    const scriptTags = extractor
        .getScriptTags({ type: 'module' })
        .replace(/async/gm, 'defer')
        .replace(/^.*hot-update\.mjs.*$/gm, '')

    return `
    <!DOCTYPE html>
    <html ${helmetContext.helmet.htmlAttributes.toString()}>
      <head>
        <meta name="version" content="${stats.hash}" />
        ${helmetContext.helmet.title.toString()}
        ${helmetContext.helmet.meta.toString()}
        ${helmetContext.helmet.link.toString()}
        ${helmetContext.helmet.script.toString()}
        ${styleTags}
        ${scriptTags}
      </head>
      <body ${helmetContext.helmet.bodyAttributes.toString()}>
        ${html}
      </body>
    </html>
  `
        .replace(whitespaceRegExp, '')
        .replace(emptyLineRegExp, '')
}

export default renderer
