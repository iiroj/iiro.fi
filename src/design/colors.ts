export const colorBases = {
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

export const colors = {
    background: {
        primary: `var(${colorBases.background.primary})`,
        secondary: `var(${colorBases.background.secondary})`,
    },
    text: {
        primary: `var(${colorBases.text.primary})`,
        active: `var(${colorBases.text.active})`,
    },
    actionable: `var(${colorBases.actionable})`,
} as const
