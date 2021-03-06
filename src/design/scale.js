const ratio = 1.414

/**
 * Modular scale based on augmented fourths (1.414)
 * @param step the number of scale steps
 * @default 1
 */
const scale = Object.assign((step = 1) => step ** ratio + 'rem', {
    ratio,
})

export default scale
