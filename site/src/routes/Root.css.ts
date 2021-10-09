import { style } from '@vanilla-extract/css'

import { spacing } from '../design/spacing.css'

export const p = style({
    margin: 0,
})

export const ul = style({
    display: 'flex',
    listStyle: 'none',
    margin: `-${spacing.tiny}`,
    padding: 0,
})
