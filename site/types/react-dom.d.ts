import type { Writable } from 'stream'

declare module 'react-dom/server' {
    type Options = {
        identifierPrefix?: string
        onCompleteAll?(): void
        onError?(): void
    }

    type Controls = {
        startWriting(): void
        abort(): void
    }

    // eslint-disable-next-line no-unused-vars
    export function pipeToNodeWritable(node: any, writable: Writable, config?: Options): Controls
}
