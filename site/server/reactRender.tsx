import { ReactElement } from 'react'
import { renderToPipeableStream } from 'react-dom/server'
import { PassThrough } from 'stream'

export const reactRender = async (element: ReactElement, timeout = 250): Promise<string> => {
    /** variable for rendered string */
    let data = ''

    /** Create a new passthrough stream for ReactDOM to render into */
    const writable = new PassThrough({ encoding: 'utf-8' })

    /** Pass stream's chunks to the data variable */
    writable.on('data', (chunk) => {
        data += chunk
    })

    /** Start rendering after the entire tree is completed */
    const { abort, pipe } = renderToPipeableStream(element, {
        onCompleteAll() {
            pipe(writable)
        },
    })

    /** Race React's render promise against a timeout promise */
    await Promise.race([
        /**
         * Promise that resolves when the stream is done,
         * and rejects on error
         */
        new Promise<void>((resolve, reject) => {
            writable.on('finish', () => {
                resolve()
            })
            writable.on('error', (error) => {
                reject(error)
            })
        }),

        /**
         * Promise that rejects after a set timeout,
         * and calls React render's abort method
         */
        new Promise<void>((_, reject) => {
            setTimeout(() => {
                abort()
                reject(new Error('Timeout'))
            }, timeout)
        }),
    ])

    return data
}
