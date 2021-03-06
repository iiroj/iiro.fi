import React from 'react'

import useRoute from '../hooks/useRoute'
import { RouterContextProvider } from '../hooks/useRouter'

const Router = ({ children, history }) => {
    const { loading, location, route, routes } = useRoute(history)
    const { match, test } = route
    const routerContext = {
        history,
        loading,
        location,
        match,
        route,
        routes,
        test,
    }

    return <RouterContextProvider value={routerContext}>{children}</RouterContextProvider>
}

export default Router
