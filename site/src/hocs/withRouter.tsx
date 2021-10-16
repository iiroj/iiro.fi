import type { History } from 'history'
import type { ComponentPropsWithoutRef, FC } from 'react'
import React from 'react'

import Router from '../components/Router'

type HistoryProp = { history: History }
type WithRouterProp<C extends FC> = FC<ComponentPropsWithoutRef<C> & HistoryProp>

const withRouter = <C extends FC<any>>(Component: C): WithRouterProp<C> => {
    const WithRouter: WithRouterProp<C> = ({ history, ...rest }) => (
        <Router history={history}>
            <Component {...(rest as ComponentPropsWithoutRef<C>)} />
        </Router>
    )

    WithRouter.displayName = Component.displayName ? `WithRouter(${Component.displayName})` : 'WithRouter'

    return WithRouter
}

export default withRouter
