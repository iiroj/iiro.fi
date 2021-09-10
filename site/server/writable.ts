import { PassThrough } from 'stream'

interface Writable {
    writable: PassThrough
    done: Promise<void>
    getData(): string
}

export const getWritable = (): Writable => {
    let data = ''

    const writable = new PassThrough({ encoding: 'utf-8' })
    writable.on('data', (chunk) => {
        data += chunk
    })

    const done = new Promise<void>((resolve, reject) => {
        writable.on('finish', () => {
            resolve()
        })
        writable.on('error', (error) => {
            reject(error)
        })
    })

    const getData = () => data

    return { writable, done, getData }
}
