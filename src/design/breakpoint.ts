import type { CSSObject } from 'styled-components'

/**
 * Supported screen type widths
 */
export const widths = {
    mobile: 0,
    tablet: 640,
    desktop: 960,
} as const

type StyleObj = Partial<Record<'tablet' | 'desktop', CSSObject>>

export const breakpoint = (obj: StyleObj): CSSObject => {
    const styles: CSSObject = {}

    for (const [key, value] of Object.entries(obj)) {
        const width = widths[key as keyof typeof widths]
        if (width) {
            /* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment */
            styles[`@media (min-width: ${width}px)`] = value
        }
    }

    return styles
}
