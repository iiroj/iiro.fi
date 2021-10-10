export const timeout = (ms: number, callback: () => void) =>
    new Promise<void>((_, reject) => {
        setTimeout(() => {
            callback()
            reject(new Error('Timeout'))
        }, ms)
    })
