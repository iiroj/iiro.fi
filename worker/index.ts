import { getAssetFromKV, MethodNotAllowedError, NotFoundError } from '@cloudflare/kv-asset-handler'
import * as build from '@remix-run/dev/server-build'
import type { AppLoadContext } from '@remix-run/server-runtime'
import { createRequestHandler } from '@remix-run/server-runtime'

import { getHeaders } from './headers'

const handleRemixRequest = createRequestHandler(build, process.env.NODE_ENV)

export default {
    async fetch(request: Request, env: AppLoadContext['env'], ctx: ExecutionContext) {
        try {
            /** @todo figure out a better way to create FetchEvent */
            const event = {
                request,
                waitUntil: (promise) => ctx.waitUntil(promise),
            } as FetchEvent

            const options = {
                ASSET_NAMESPACE: env.__STATIC_CONTENT,
                ASSET_MANIFEST: JSON.parse(env.__STATIC_CONTENT_MANIFEST) as Record<string, string>,
            }

            return await getAssetFromKV(event, options)
        } catch (error) {
            if (error instanceof MethodNotAllowedError) {
                return new Response('Method not allowed', { status: 405 })
            } else if (!(error instanceof NotFoundError)) {
                return new Response('An unexpected error occurred', { status: 500 })
            }
        }

        try {
            const response = await handleRemixRequest(request, { env, ctx })
            return new Response(response.body, {
                headers: getHeaders(response.headers),
                status: response.status,
                statusText: response.statusText,
            })
        } catch (error) {
            console.log(error)
            return new Response('An unexpected error occurred', { status: 500 })
        }
    },
}
