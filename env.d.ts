/// <reference types="@cloudflare/workers-types" />
/// <reference types="@remix-run/dev" />

// eslint-disable-next-line import/no-unassigned-import
import '@remix-run/server-runtime'

declare type CloudflareEnvironment = {
    __STATIC_CONTENT: string
    __STATIC_CONTENT_MANIFEST: string
    CF_BEACON_TOKEN: string
}

declare module '@remix-run/server-runtime' {
    export interface AppLoadContext {
        env: CloudflareEnvironment
        ctx: ExecutionContext
    }
}
