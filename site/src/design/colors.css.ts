import { createThemeContract } from '@vanilla-extract/css'

export const colors = createThemeContract({
    background: {
        primary: null,
        secondary: null,
    },
    text: {
        primary: null,
        active: null,
    },
    actionable: null,
})
