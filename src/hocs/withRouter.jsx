import React from 'react'

import Router from '../components/Router'

const withRouter = (Component) => {
    const WithRouter = ({ history, ...rest }) => (
        <Router history={history}>
            <Component {...rest} />
        </Router>
    )

    WithRouter.displayName = Component.displayName ? `WithRouter(${Component.displayName})` : 'WithRouter'

    return WithRouter
}

export default withRouter
