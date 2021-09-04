const timing = 'ease-in-out'
const duration = 150

const transition = Object.assign(
    (...props: string[]) => `
        transition: ${props.map((prop) => `${prop} ${duration}ms ${timing}`).join(', ')};
    `,
    { duration, timing }
)

export default transition
