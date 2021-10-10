import React, { Children, ReactElement } from 'react'
import { StatsCompilation } from 'webpack'

import { reactRender } from './reactRender'

interface ScriptProps {
    async?: boolean
    defer?: boolean
    integrity?: string
    src: string
    type?: string
}

export const processSRITags = (
    scriptElements: ReactElement<ScriptProps>[],
    stats: StatsCompilation
): Promise<string> => {
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

    return reactRender(scripts)
}
