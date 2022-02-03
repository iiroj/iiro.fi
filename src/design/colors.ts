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
}

const varNames = {
    background: {
        primary: '--background-primary',
        secondary: '--background-secondary',
    },
    text: {
        primary: '--text-primary',
        active: '--text-active',
    },
    actionable: '--actionable',
} as const

export const cssVars = {
    [varNames.background.primary]: raw.background.primary.light,
    [varNames.background.secondary]: raw.background.secondary.light,
    [varNames.text.primary]: raw.text.primary.light,
    [varNames.text.active]: raw.text.active.light,
    [varNames.actionable]: raw.actionable.light,

    '@media (prefers-color-scheme: dark)': {
        [varNames.background.primary]: raw.background.primary.dark,
        [varNames.background.secondary]: raw.background.secondary.dark,
        [varNames.text.primary]: raw.text.primary.dark,
        [varNames.text.active]: raw.text.active.dark,
        [varNames.actionable]: raw.actionable.dark,
    },
}

const cssVar = <T extends string>(text: T): `var(${T})` => `var(${text})`

export const colors = {
    background: {
        primary: cssVar(varNames.background.primary),
        secondary: cssVar(varNames.background.secondary),
    },
    text: {
        primary: cssVar(varNames.text.primary),
        active: cssVar(varNames.text.active),
    },
    actionable: cssVar(varNames.actionable),
}
