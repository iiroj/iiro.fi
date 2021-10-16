import type { ReactElement } from 'react'
import type { Writable } from 'stream'

declare module 'react-dom/server' {
    type Options = {
        identifierPrefix?: string
        namespaceURI?: string
        onCompleteAll?: (this: void) => void
        onCompleteShell?: (this: void) => void
        // eslint-disable-next-line no-unused-vars
        onError?: (this: void, error: Error) => void
        progressiveChunkSize?: number
    }

    type Controls = {
        // eslint-disable-next-line no-unused-vars
        pipe<T extends Writable>(this: void, stream: T): T
        abort(this: void): void
    }

    // eslint-disable-next-line no-unused-vars
    export function renderToPipeableStream(this: void, node: ReactElement, config?: Options): Controls
}
