import { createThemeContract } from '@vanilla-extract/css'

export const raw = {
    background: {
        primary: {
            light: 'hsl(0, 0%, 100%)',
            dark: 'hsl(0, 0%, 10%)',
        },
        secondary: {
            light: 'hsl(0, 0%, 96%)',
            dark: 'hsl(0, 0%, 16%)',
        },
    },
    text: {
        primary: {
            light: 'hsl(0, 0%, 30%)',
            dark: 'hsl(0, 0%, 80%)',
        },
        active: {
            light: 'hsl(0, 0%, 0%)',
            dark: 'hsl(0, 0%, 70%)',
        },
    },
    actionable: {
        light: 'hsl(44, 100%, 75%)',
        dark: 'hsla(44, 100%, 33%, 0.4)',
    },
} as const

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
