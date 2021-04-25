import type { LoadableComponent } from '@loadable/component'
import loadable from '@loadable/component'

export interface RouteConfig {
    path: string
    exact?: boolean
    strict?: boolean
    sensitive?: boolean
}

export type Route<P = any> = [RouteConfig, LoadableComponent<P>]

const rootRoute: Route = [{ path: '/', exact: true }, loadable(() => import('./routes/Root'))]

export const routes = [rootRoute]

export const notFoundRoute: Route = [{ path: '/' }, loadable(() => import('./routes/NotFound'))]
