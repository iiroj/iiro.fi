import React, { Children, cloneElement, ReactElement } from 'react'
import { StatsCompilation } from 'webpack'

import { reactRender } from './reactRender'

export interface ScriptProps {
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
                const asset = stats.assets?.find(({ name }) => `${child.key ?? ''}`.replace(/^\//, '') === name)
                const isScriptFile = `${child.key ?? ''}`.endsWith('.js')

                const newProps: ScriptProps = {
                    ...child.props,
                    async: undefined,
                    defer: isScriptFile ? true : undefined,
                    integrity: asset?.integrity as string | undefined,
                    type: isScriptFile ? 'module' : child.props.type,
                }

                return cloneElement(child, newProps)
            })}
        </>
    )

    return reactRender(scripts)
}
