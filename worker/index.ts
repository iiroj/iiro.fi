import manifest from '__STATIC_CONTENT_MANIFEST';
import { getAssetFromKV, mapRequestToAsset, MethodNotAllowedError, NotFoundError } from '@cloudflare/kv-asset-handler';

import { getHeaders } from './headers';

const ASSET_MANIFEST = JSON.parse(manifest) as Record<string, string>;

const mapHtmlToMarkdown = (request: Request) => {
    if (request.headers.get('accept')?.includes('text/html')) {
        return request;
    }

    return new Request(new URL(request.url.replace(/\.html$/, '.md')), request);
};

const fetch: ExportedHandlerFetchHandler<{ __STATIC_CONTENT: string }> = async (req, env, ctx) => {
    const options = {
        ASSET_NAMESPACE: env.__STATIC_CONTENT,
        ASSET_MANIFEST,
    };

    const waitUntil = (promise: Promise<Response>) => ctx.waitUntil(promise);

    const assetRequest = mapRequestToAsset(req, options);
    const isHtmlRequest = assetRequest.url.endsWith('.html');

    try {
        const request = isHtmlRequest ? mapHtmlToMarkdown(assetRequest) : assetRequest;
        const event = { request, waitUntil } as FetchEvent;
        const response = await getAssetFromKV(event, options);
        return new Response(response.body, {
            headers: getHeaders(response.headers, isHtmlRequest),
            status: response.status,
        });
    } catch (error) {
        if (error instanceof NotFoundError) {
            const notFoundRequest = new Request(new URL('/404.html', assetRequest.url), assetRequest);
            const request = isHtmlRequest ? mapHtmlToMarkdown(notFoundRequest) : notFoundRequest;
            const notFoundEvent = { request, waitUntil } as FetchEvent;
            const notFoundResponse = await getAssetFromKV(notFoundEvent, options);
            return new Response(notFoundResponse.body, {
                headers: getHeaders(notFoundResponse.headers, isHtmlRequest),
                status: 404,
            });
        }

        if (error instanceof MethodNotAllowedError) {
            return new Response('Method not allowed', { status: 405 });
        }

        return new Response('An unexpected error occurred', { status: 500 });
    }
};

export default { fetch };
