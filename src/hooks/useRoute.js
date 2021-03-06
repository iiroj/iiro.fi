import { pathToRegexp } from 'path-to-regexp'
import { useEffect, useState } from 'react'

import { notFoundRoute, routes } from '../routes'

const cache = {}
const cacheLimit = 10000
let cacheCount = 0

/**
 * @see https://github.com/ReactTraining/react-router/blob/29e02a301a6d2f73f6c009d973f87e004c83bea4/packages/react-router/modules/matchPath.js#L7
 */
const compilePath = (path, options) => {
    const cacheKey = `${options.end}${options.strict}${options.sensitive}`
    const pathCache = cache[cacheKey] || (cache[cacheKey] = {})

    if (pathCache[path]) return pathCache[path]

    const keys = []
    const regexp = pathToRegexp(path, keys, options)
    const result = { regexp, keys }

    if (cacheCount < cacheLimit) {
        pathCache[path] = result
        cacheCount++
    }

    return result
}

/**
 * For given `pathname` and `test`, find the match.
 * @see https://github.com/ReactTraining/react-router/blob/29e02a301a6d2f73f6c009d973f87e004c83bea4/packages/react-router/modules/matchPath.js#L28
 */
const matchPath = (pathname, test) => {
    const { path, exact = false, strict = false, sensitive = false } = test
    if (!path && path !== '') return null

    const { regexp, keys } = compilePath(path, {
        end: exact,
        strict,
        sensitive,
    })
    const match = regexp.exec(pathname)
    if (!match) return null

    const [url, ...values] = match
    const isExact = pathname === url
    if (exact && !isExact) return null

    return {
        path,
        url: path === '/' && url === '' ? '/' : url,
        isExact,
        params: keys.reduce((params, key, i) => Object.assign(params, { [key.name]: values[i] }), {}),
    }
}

/**
 * From `location` get current route `match`, `test` and `component`
 */
const getRoute = (location) => {
    let match = null
    let test = notFoundRoute[0]
    let Route = notFoundRoute[1]

    // Find first match from route list
    for (const route of routes) {
        const routeMatch = matchPath(location.pathname, route[0])
        if (routeMatch) {
            match = routeMatch
            test = route[0]
            Route = route[1]
            break
        }
    }

    // Fallback to NotFound page
    if (!match) {
        match = matchPath(location.pathname, notFoundRoute[0]) // Will always match
    }

    return { Route, match, test }
}

/**
 * Hook to bind async route loading
 */
const useRoute = (history) => {
    // Route loading state
    const [loading, setLoading] = useState(false)
    // Current location
    const [location, setLocation] = useState(() => history.location)
    // Current route
    const [route, setRoute] = useState(() => getRoute(location))

    // Callback to update current route
    useEffect(() => {
        // If loading takes longer than 250 ms, set loading status
        const timeout = setTimeout(() => setLoading(true), 250)
        const route = getRoute(location)
        // loadable component async method
        route.Route.load().then(() => {
            clearTimeout(timeout)
            setLoading(false)
            setRoute(route)
        })
    }, [location])

    // Subscribe to history change events
    const unlistenCallback = history.listen(({ action, location }) => {
        setLocation({ action, ...location })
    })

    // No-op effect that returns unsubscriber to above
    useEffect(() => unlistenCallback, [unlistenCallback])

    return { loading, location, route, routes }
}

export default useRoute
