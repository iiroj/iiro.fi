import type { ReactElement } from 'react'
import type { Writable } from 'stream'

declare module 'react-dom/server' {
    type Options = {
        identifierPrefix?: string
        namespaceURI?: string
        onCompleteAll?: () => void
        onCompleteShell?: () => void
        // eslint-disable-next-line no-unused-vars
        onError?: (error: Error) => void
        progressiveChunkSize?: number
    }

    type Controls = {
        // eslint-disable-next-line no-unused-vars
        pipe<T extends Writable>(stream: T): T
        abort(): void
    }

    // eslint-disable-next-line no-unused-vars
    export function renderToPipeableStream(node: ReactElement, config?: Options): Controls
}
