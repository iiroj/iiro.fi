import loadable from '@loadable/component'

const Root = loadable(() => import('./Root'))
const NotFound = loadable(() => import('./NotFound'))

export const routes = [[{ path: '/', exact: true }, Root]]

export const notFoundRoute = [{ path: '/' }, NotFound]
