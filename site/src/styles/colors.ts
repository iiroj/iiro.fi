import { colorBases } from '../design/colors'

const colors = `
    ${colorBases.background.primary}: hsl(0, 0%, 100%);
    ${colorBases.background.secondary}: hsl(0, 0%, 96%);
    ${colorBases.text.primary}: hsl(0, 0%, 30%);
    ${colorBases.text.active}: hsl(0, 0%, 0%);
    ${colorBases.actionable}: hsl(44, 100%, 75%);

    @media (prefers-color-scheme: dark) {
        ${colorBases.background.primary}: hsl(0, 0%, 10%);
        ${colorBases.background.secondary}: hsl(0, 0%, 16%);
        ${colorBases.text.primary}: hsl(0, 0%, 80%);
        ${colorBases.text.active}: hsl(0, 0%, 70%);
        ${colorBases.actionable}: hsla(44, 100%, 33%, 0.4);
    }
` as const

export default colors
