import type { LoadableComponent } from '@loadable/component'
import loadable from '@loadable/component'

export interface RouteConfig {
    path: string
    exact?: boolean
    strict?: boolean
    sensitive?: boolean
}

export type Route<P = any> = [RouteConfig, LoadableComponent<P>]

const Root = loadable(() => import('./routes/Root'))
const rootRoute: Route = [{ path: '/', exact: true }, Root]

export const routes = [rootRoute]

const NotFound = loadable(() => import('./routes/NotFound'))
export const notFoundRoute: Route = [{ path: '/' }, NotFound]
