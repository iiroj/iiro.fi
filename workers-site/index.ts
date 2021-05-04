import { getAssetFromKV, NotFoundError } from '@cloudflare/kv-asset-handler'

const KV_OPTIONS = {
    cacheControl: {
        browserTTL: 60 * 60 /** One hour */,
        edgeTTL: 2 * 60 * 60 * 24 /** Two days */,
    },
}

/** The static headers to be added to rich HTML responses */
const STATIC_HEADERS = [
    [
        'Content-Security-Policy',
        "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'",
    ],
    /** Disable Google's FLoC */
    ['Permissions-Policy', 'interest-cohort=()'],
    ['Referrer-Policy', 'strict-origin-when-cross-origin'],
    ['Strict-Transport-Security', 'max-age=63072000; includeSubdomains; preload'],
    ['X-Content-Type-Options', 'nosniff'],
    ['X-Frame-Options', 'DENY'],
    ['X-XSS-Protection', '1; mode=block'],
]

/** Add static headers to responses with OK status */
const withResponseHeaders = async (response: Response): Promise<Response> => {
    if (!response.ok) return response

    for (const [key, value] of STATIC_HEADERS) {
        response.headers.set(key, value)
    }

    return response
}

/**
 * Get the rich HTML response to a fetch event:
 *
 * 1. Get a file from Cloudflare Workers KV storage and assign static headers
 * 1. Else, get the 404 response file assign its headers
 * 1. Else, respond with error message and code 500
 */
const getResponse = async (event: FetchEvent): Promise<Response> => {
    try {
        const response = await getAssetFromKV(event, KV_OPTIONS)
        return withResponseHeaders(response)
    } catch (error) {
        if (error instanceof NotFoundError) {
            const notFoundResponse = await getAssetFromKV(event, {
                mapRequestToAsset: (req) => new Request(`${new URL(req.url).origin}/404.html`, req),
            })

            return withResponseHeaders(
                new Response(notFoundResponse.body, {
                    ...notFoundResponse,
                    status: 404,
                    statusText: 'not found',
                })
            )
        }

        return new Response('500 — Internal Error', {
            headers: { 'Content-Type': 'text/plain' },
            status: 500,
            statusText: 'intrernal error',
        })
    }
}

/**
 * Listen to fetch events and get response:
 *
 * 1. If the request is for plaintext, respond accordingly
 * 1. Else, get rich HTML response with static headers
 * 1. Else, respond with status 500
 */
addEventListener('fetch', async (event: FetchEvent) => {
    const response = getResponse(event)
    return event.respondWith(response)
})
