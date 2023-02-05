import * as mime from 'mime';

/** Match "text/html", and "text/*" */
const HTML_MIME_TYPES = /\btext\/(?:html|\*)\b/i;

/** @returns true if Request accepts HTML response */
const getAcceptsHtmlResponse = (request: Request) => {
    const accept = request.headers.get('accept');
    return !!accept && HTML_MIME_TYPES.test(accept);
};

/** @returns response instance with additional HTML file -specific headers */
const withHtmlHeaders = (response: Response, acceptsHtmlResponse: boolean) => {
    const headers = new Headers(response.headers);
    headers.set('Vary', 'Accept');
    if (acceptsHtmlResponse) {
        headers.set('Link', '</styles.css>; rel=preload; as=style');
    }
    return new Response(response.body, { headers, status: response.status });
};

/** Rewrite requests for ".html" to ".md" if not accepted */
const handleMarkdownFallback: PagesFunction = async ({ env, next, request }) => {
    const url = new URL(request.url);

    /** Append "".html" extension when missing, assuming "index.html" as the index file */
    const filePath = url.pathname.endsWith('/')
        ? `${url.pathname}index.html`
        : mime.getType(url.pathname)
        ? url.pathname
        : `${url.pathname}.html`;

    const isHtmlResponse = filePath.endsWith('.html');

    if (!isHtmlResponse) {
        return next();
    }

    const acceptsHtmlResponse = getAcceptsHtmlResponse(request);

    const fileUrl = acceptsHtmlResponse ? url : new URL(filePath.replace('.html', '.md'), url);
    const response = await env.ASSETS.fetch(new Request(fileUrl, request));

    /** Rewrite 404 response to special "/404.html" or "/404.md" files */
    if (response.status === 404) {
        const notFoundFileUrl = new URL(acceptsHtmlResponse ? '/404' : '/404.md', url);
        const response = await env.ASSETS.fetch(new Request(notFoundFileUrl, request));
        const notFoundResponse = new Response(response.body, { headers: response.headers, status: 404 });
        return withHtmlHeaders(notFoundResponse, acceptsHtmlResponse);
    }

    /** Apply 404 status code to special "/404.html" and "/404.md" files */
    if (['/404', '/404.md'].includes(fileUrl.pathname)) {
        const notFoundResponse = new Response(response.body, { headers: response.headers, status: 404 });
        return withHtmlHeaders(notFoundResponse, acceptsHtmlResponse);
    }

    return withHtmlHeaders(response, acceptsHtmlResponse);
};

const SECURITY_HEADERS = {
    /** @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy */
    'Content-Security-Policy': `default-src 'self'; connect-src cloudflareinsights.com; script-src static.cloudflareinsights.com`,
    /** @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security */
    'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
    /** @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection */
    'X-XSS-Protection': '1; mode=block',
    /** @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options */
    'X-Frame-Options': 'DENY',
    /** @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options */
    'X-Content-Type-Options': 'nosniff',
    /** @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy */
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    /** @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy */
    'Cross-Origin-Embedder-Policy': 'require-corp; report-to="default";',
    /** @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy */
    'Cross-Origin-Opener-Policy': 'same-site; report-to="default";',
    /** @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Cross-Origin_Resource_Policy_(CORP) */
    'Cross-Origin-Resource-Policy': 'same-site',
};

const addStaticHeaders: PagesFunction = async ({ next, request }) => {
    const response = await next();
    const headers = new Headers(response.headers);
    for (const [headerName, headerValue] of Object.entries(SECURITY_HEADERS)) {
        headers.set(headerName, headerValue);
    }
    return new Response(response.body, { headers, status: response.status });
};

export const onRequest = [addStaticHeaders, handleMarkdownFallback];
