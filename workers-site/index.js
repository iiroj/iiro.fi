import { getAssetFromKV } from '@cloudflare/kv-asset-handler'

const isPlaintextRequest = (request) => {
    const acceptHeader = request.headers.get('Accept')
    const isAcceptPlaintext = !!acceptHeader && acceptHeader.includes('text/plain')

    if (isAcceptPlaintext) {
        return true
    }

    const userAgentHeader = request.headers.get('User-Agent')
    const isCurlUserAgent = userAgentHeader && userAgentHeader.startsWith('curl')
    const isWgetUserAgent = userAgentHeader && userAgentHeader.startsWith('Wget')

    if (isCurlUserAgent || isWgetUserAgent) {
        return true
    }

    return false
}

const PLAINTEXT_BODY = `Iiro Jäppinen
- https://github.com/iiroj
- https://linkedin.com/in/iiroj
`

const PLAINTEXT_OPTIONS = { headers: { 'Content-Type': 'text/plain' } }

const getPlaintextResponse = async (event) => {
    const url = new URL(event.request.url)

    if (url.pathname === '/') {
        return new Response(PLAINTEXT_BODY, { ...PLAINTEXT_OPTIONS, status: 200 })
    }

    return new Response('404 — Page Not Found', { ...PLAINTEXT_OPTIONS, status: 404 })
}

const STATIC_HEADERS = [
    [
        'Content-Security-Policy',
        "default-src 'none'; connect-src 'self'; font-src 'self'; img-src 'self' data:; manifest-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'",
    ],
    ['Referrer-Policy', 'strict-origin-when-cross-origin'],
    ['Strict-Transport-Security', 'max-age=63072000; includeSubdomains; preload'],
    ['X-Content-Type-Options', 'nosniff'],
    ['X-Frame-Options', 'DENY'],
    ['X-XSS-Protection', '1; mode=block'],
]

const withResponseHeaders = async (response) => {
    if (!response.ok) return response

    for (const [key, value] of STATIC_HEADERS) {
        response.headers.set(key, value)
    }

    return response
}

const getResponse = async (event) => {
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
        } catch {}

        return new Response(error.message || error.toString(), { status: 500 })
    }
}

addEventListener('fetch', async (event) => {
    try {
        if (isPlaintextRequest(event.request)) {
            const plaintextResponse = getPlaintextResponse(event)
            return event.respondWith(plaintextResponse)
        }

        const response = getResponse(event)
        return event.respondWith(response)
    } catch {
        event.respondWith(new Response('Internal Error', { status: 500 }))
    }
})
