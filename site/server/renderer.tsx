import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server'
import { createMemoryHistory } from 'history'
import type { ReactElement } from 'react'
import React from 'react'
import type { FilledContext } from 'react-helmet-async'
import type { StatsCompilation } from 'webpack'

import App from '../src/index'
import { reactRender } from './reactRender'
import type { ScriptProps } from './sri'
import { processSRITags } from './sri'
import { staticHead } from './staticHead'

const isProduction = process.env.NODE_ENV === 'production'

const whitespaceRegExp = /^\s+/gm
const emptyLineRegExp = /^\s*$(?:\r\n?|\n)/gm

interface Renderer {
    path: string
    stats: StatsCompilation
}

const renderer = async ({ path, stats }: Renderer): Promise<string> => {
    const extractor = new ChunkExtractor({ entrypoints: ['client'], stats })
    const history = createMemoryHistory({ initialEntries: [path] })
    const helmetContext = {} as FilledContext

    const app = (
        <ChunkExtractorManager extractor={extractor}>
            <App helmetContext={helmetContext} history={history} />
        </ChunkExtractorManager>
    )

    const html = await reactRender(app)

    const styleElements = extractor.getStyleElements()
    const scriptElements = extractor.getScriptElements()

    const [styleTags, scriptTags] = await Promise.all([
        processSRITags(styleElements as ReactElement<ScriptProps>[], stats),
        processSRITags(scriptElements as ReactElement<ScriptProps>[], stats),
    ])

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
          ${styleTags}
          ${
              /** Do not include script tags in production build */
              isProduction ? '' : scriptTags
          }
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
