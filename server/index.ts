import { createRequestHandler } from '@remix-run/cloudflare';
import { handleAsset } from '@remix-run/cloudflare-workers';
import * as build from '@remix-run/dev/server-build';

const handleRequest = createRequestHandler(build);

const handleEvent = async (event: FetchEvent) => {
    const asset = await handleAsset(event, build);
    if (asset) return asset;

    return handleRequest(event.request);
};

addEventListener('fetch', (event: FetchEvent) => {
    try {
        event.respondWith(handleEvent(event));
    } catch (error: unknown) {
        event.respondWith(new Response('Internal Server Error', { status: 500 }));
    }
});
