import manifest from '__STATIC_CONTENT_MANIFEST' // eslint-disable-line import/no-unresolved
import { getAssetFromKV, mapRequestToAsset, MethodNotAllowedError, NotFoundError } from '@cloudflare/kv-asset-handler'

import { getHeaders } from './headers'

const ASSET_MANIFEST = JSON.parse(manifest) as Record<string, string>

const isHTMLRequest = (url: string) => new URL(url).pathname.endsWith('.html')

const fetchHandler: ExportedHandlerFetchHandler<{ __STATIC_CONTENT: string }> = async (request, env, ctx) => {
    const options = {
        ASSET_NAMESPACE: env.__STATIC_CONTENT,
        ASSET_MANIFEST,
    }

    const waitUntil = (promise: Promise<Response>) => ctx.waitUntil(promise)

    try {
        const assetRequest = mapRequestToAsset(request, options)

        const event = { request: assetRequest, waitUntil } as FetchEvent

        const response = await getAssetFromKV(event, options)
        return new Response(response.body, {
            headers: getHeaders(response.headers, isHTMLRequest(assetRequest.url)),
            status: response.status,
        })
    } catch (error) {
        if (error instanceof NotFoundError) {
            const notFoundRequest = new Request(new URL('/404.html', request.url))
            const notFoundEvent = { request: notFoundRequest, waitUntil } as FetchEvent
            const notFoundResponse = await getAssetFromKV(notFoundEvent, options)
            return new Response(notFoundResponse.body, {
                headers: getHeaders(notFoundResponse.headers, true),
                status: 404,
            })
        }

        if (error instanceof MethodNotAllowedError) {
            return new Response('Method not allowed', { status: 405 })
        }

        return new Response('An unexpected error occurred', { status: 500 })
    }
}

export default {
    fetch: fetchHandler,
}
