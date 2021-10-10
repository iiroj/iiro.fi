import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server'
import { createMemoryHistory } from 'history'
import type { Renderer } from 'html-renderer-webpack-plugin'
import React from 'react'
import { renderToPipeableStream } from 'react-dom/server'
import type { FilledContext } from 'react-helmet-async'

import App from '../src/index'
import { processSRITags } from './sri'
import staticHead from './staticHead'
import { timeout } from './timeout'
import { getWritable } from './writable'

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

    const styleElements = extractor.getStyleElements()
    const scriptElements = extractor.getScriptElements()

    const [styleTags, scriptTags] = await Promise.all([
        processSRITags(styleElements as any, stats),
        processSRITags(scriptElements as any, stats),
    ])

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
