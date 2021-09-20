import type { StyleRule } from '@vanilla-extract/css'

/**
 * Supported screen type widths
 */
export const widths = {
    mobile: 0,
    tablet: 640,
    desktop: 960,
} as const

const MEDIA = '@media'

type StyleObj = Partial<Record<'tablet' | 'desktop', StyleRule>>

export const breakpoint = (obj: StyleObj): StyleRule => {
    const styles: StyleRule = {
        [MEDIA]: {},
    }

    for (const [key, value] of Object.entries(obj)) {
        const width = widths[key as keyof typeof widths]
        if (width) {
            styles[MEDIA]![`(min-width: ${width}px)`] = value
        }
    }

    return styles
}
