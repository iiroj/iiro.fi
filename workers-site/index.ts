import { getAssetFromKV } from '@cloudflare/kv-asset-handler'

/**
 * Whether the request should be responded with in plaintext:
 *
 * 1. `false` if the request's `Accept` header includes `text/html`
 * 1. `true` if the request's `Accept` header includes `text/plain`
 * 1. `true` if the request's `User-Agent` header starts with `curl`
 * 1. `true` if the request's `User-Agent` header starts with `Wget`
 * 1. `false` otherwise
 */
const isPlaintextRequest = (request: Request): boolean => {
    const acceptHeader = request.headers.get('Accept')

    if (acceptHeader?.includes('text/html')) {
        return false
    }

    if (acceptHeader?.includes('text/plain')) {
        return true
    }

    const userAgentHeader = request.headers.get('User-Agent')

    if (userAgentHeader?.startsWith('curl') || userAgentHeader?.startsWith('Wget')) {
        return true
    }

    return false
}

/** The plaintext response to be sent instead of rich HTML content */
const PLAINTEXT_BODY = `Iiro Jäppinen
- https://github.com/iiroj
- https://linkedin.com/in/iiroj
`

/** The `Content-Type: text/plain` header */
const PLAINTEXT_OPTIONS = {
    headers: { 'Content-Type': 'text/plain' },
}

/** Get plaintext response to a fetch event */
const getPlaintextResponse = async (event: FetchEvent): Promise<Response> => {
    const { pathname } = new URL(event.request.url)

    /** Only respond with 200 to the root pathname */
    if (pathname === '/') {
        return new Response(PLAINTEXT_BODY, { ...PLAINTEXT_OPTIONS, status: 200 })
    }

    /** Otherwise respond with 404 */
    return new Response('404 — Page Not Found', { ...PLAINTEXT_OPTIONS, status: 404 })
}

/** The static headers to be added to rich HTML responses */
const STATIC_HEADERS = [
    [
        'Content-Security-Policy',
        "default-src 'none'; connect-src 'self'; font-src 'self'; img-src 'self' data:; manifest-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'",
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

const notFoundError = new Error('Failed to respond with 404')

/**
 * Get the rich HTML response to a fetch event:
 *
 * 1. Get a file from Cloudflare Workers KV storage and assign static headers
 * 1. Else, get the 404 response file assign its headers
 * 1. Else, respond with error message and code 500
 */
const getResponse = async (event: FetchEvent): Promise<Response> => {
    try {
        const response = await getAssetFromKV(event)
        return withResponseHeaders(response)
    } catch (error) {
        try {
            const notFoundResponse = await getAssetFromKV(event, {
                mapRequestToAsset: (req) => new Request(`${new URL(req.url).origin}/404.html`, req),
            })

            return withResponseHeaders(
                new Response(notFoundResponse.body, {
                    ...notFoundResponse,
                    status: 404,
                })
            )
        } catch {
            throw notFoundError
        }
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
    try {
        if (isPlaintextRequest(event.request)) {
            const plaintextResponse = getPlaintextResponse(event)
            return event.respondWith(plaintextResponse)
        }

        const response = getResponse(event)
        return event.respondWith(response)
    } catch {
        event.respondWith(new Response('500 — Internal Error', { ...PLAINTEXT_OPTIONS, status: 500 }))
    }
})
