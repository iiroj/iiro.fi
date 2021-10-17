import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server'
import React from 'react'
import type { FilledContext } from 'react-helmet-async'
import { StaticRouter } from 'react-router-dom/server'
import type { StatsCompilation } from 'webpack'

import App from '../src/index'
import { reactRender } from './reactRender'
import { processSRI } from './sri'
import { staticHead } from './staticHead'

const whitespaceRegExp = /^\s+/gm
const emptyLineRegExp = /^\s*$(?:\r\n?|\n)/gm

interface Renderer {
    path: string
    stats: StatsCompilation
}

const renderer = async ({ path, stats }: Renderer): Promise<string> => {
    const extractor = new ChunkExtractor({ entrypoints: ['client'], stats })
    const helmetContext = {} as FilledContext

    const app = (
        <ChunkExtractorManager extractor={extractor}>
            <StaticRouter location={path}>
                <App helmetContext={helmetContext} />
            </StaticRouter>
        </ChunkExtractorManager>
    )

    const html = await reactRender(app)

    const styleTags = extractor.getStyleTags()
    const scriptTags = extractor
        .getScriptTags({ type: 'module' })
        .replaceAll('async', 'defer')
        .replaceAll(/^.*hot-update\.mjs.*$/gm, '')

    return `
      <!DOCTYPE html>
      <html ${helmetContext.helmet.htmlAttributes.toString()}>
        <head>
          ${stats.hash ? `<meta name="version" content="${stats.hash}" />` : ''}
          ${helmetContext.helmet.title.toString()}
          ${helmetContext.helmet.meta.toString()}
          ${helmetContext.helmet.link.toString()}
          ${helmetContext.helmet.script.toString()}
          ${staticHead}
          ${processSRI(styleTags, stats)}
          ${processSRI(scriptTags, stats)}
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
