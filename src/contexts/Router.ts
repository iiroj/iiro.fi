import { LoadableComponent } from '@loadable/component'
import { History } from 'history'
import { createContext } from 'react'

import type { LocationState, Match } from '../hooks/useRoute'
import type { Route, RouteConfig } from '../routes'

export interface RouterContext {
    history: History
    loading: boolean
    location: LocationState
    route: { Route: LoadableComponent<any>; match: Match | null; test: RouteConfig }
    routes: Route[]
}

const Router = createContext<Partial<RouterContext>>({})

Router.displayName = 'Router'

export default Router
