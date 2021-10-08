import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server'
import { createMemoryHistory } from 'history'
import type { Renderer } from 'html-renderer-webpack-plugin'
import React from 'react'
import { renderToPipeableStream } from 'react-dom/server'
import type { FilledContext } from 'react-helmet-async'

import App from '../src/index'
import staticHead from './staticHead'
import { getWritable } from './writable'

const timeout = (ms: number, callback: () => void) =>
    new Promise<void>((_, reject) => {
        setTimeout(() => {
            callback()
            reject(new Error('Timeout'))
        }, ms)
    })

const whitespaceRegExp = /^\s+/gm
const emptyLineRegExp = /^\s*$(?:\r\n?|\n)/gm

const renderer: Renderer = async ({ path, stats }) => {
    const extractor = new ChunkExtractor({ entrypoints: ['client'], stats })
    const history = createMemoryHistory({ initialEntries: [path!] })
    const helmetContext = {} as FilledContext

    const app = (
        <ChunkExtractorManager extractor={extractor}>
            <App helmetContext={helmetContext} history={history} />
        </ChunkExtractorManager>
    )

    const { writable, done, getData } = getWritable()

    const { abort, pipe } = renderToPipeableStream(app, {
        onCompleteAll() {
            pipe(writable)
        },
    })

    await Promise.race([done, timeout(250, abort)])

    const html = getData()

    const styleTags = extractor.getStyleTags()

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
          ${staticHead}
          ${styleTags}
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
