import type { EntryContext } from '@remix-run/cloudflare'
import { RemixServer } from '@remix-run/react'
import { renderToReadableStream } from 'react-dom/server'

const handleRequest = async (
    request: Request,
    responseStatusCode: number,
    responseHeaders: Headers,
    remixContext: EntryContext
) => {
    responseHeaders.set('Content-Type', 'text/html')
    const stream = await renderToReadableStream(<RemixServer context={remixContext} url={request.url} />)
    return new Response(stream, {
        status: responseStatusCode,
        headers: responseHeaders,
    })
}

export default handleRequest
