import { History } from 'history'
import type { ComponentProps, FunctionComponent } from 'react'
import React from 'react'

import Router from '../components/Router'

type HistoryProp = { history: History }
type WithRouter<C extends FunctionComponent> = FunctionComponent<ComponentProps<C> & HistoryProp>

const withRouter = <C extends FunctionComponent<any>>(Component: C): WithRouter<C> => {
    const WithRouter: WithRouter<C> = ({ history, ...rest }) => (
        <Router history={history}>
            <Component {...(rest as ComponentProps<C>)} />
        </Router>
    )

    WithRouter.displayName = Component.displayName ? `WithRouter(${Component.displayName})` : 'WithRouter'

    return WithRouter
}

export default withRouter
