import type { History } from 'history'
import type { ReactNode } from 'react'
import React from 'react'

import RouterContext from '../contexts/Router'
import useRoute from '../hooks/useRoute'

interface Props {
    children: ReactNode
    history: History
}

const Router = ({ children, history }: Props) => {
    const { loading, location, route, routes } = useRoute(history)
    const routerContext = {
        history,
        loading,
        location,
        route,
        routes,
    }

    return <RouterContext.Provider value={routerContext}>{children}</RouterContext.Provider>
}

Router.displayName = 'Router'

export default Router
