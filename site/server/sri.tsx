import React, { Children, ReactElement } from 'react'
import { renderToPipeableStream } from 'react-dom/server'
import { StatsCompilation } from 'webpack'

import { timeout } from './timeout'
import { getWritable } from './writable'

interface ScriptProps {
    async?: boolean
    defer?: boolean
    integrity?: string
    src: string
    type?: string
}

export const processSRITags = async (scriptElements: ReactElement<ScriptProps>[], stats: StatsCompilation) => {
    const { writable, done, getData } = getWritable()

    const scripts = (
        <>
            {Children.map(scriptElements, (child) => {
                /** Scripts should be `defer` instead of `async` */
                delete child.props.async
                child.props.defer = true

                /** Get integrity hash from Webpack Stats, via `webpack-subresource-integrity` */
                const asset = stats.assets!.find(({ name }) => `${child.key}`.replace(/^\//, '') === name)
                if (asset) child.props.integrity = asset.integrity

                /** Mark JS files as ESM modules */
                if (`${child.key}`.endsWith('.js')) child.props.type = 'module'

                return child
            })}
        </>
    )

    const { abort, pipe } = renderToPipeableStream(scripts, {
        onCompleteAll() {
            pipe(writable)
        },
    })

    await Promise.race([done, timeout(250, abort)])

    return getData()
}
