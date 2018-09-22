import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router';

import routes, { NOT_FOUND } from '../routes';
import Layout from './Layout';
import Loading from './Loading';
import UniversalComponent from './UniversalComponent';

class App extends React.Component {
  static propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired
    }).isRequired
  };

  static getDerivedStateFromProps({ location }, state) {
    const page = routes[location.pathname] || NOT_FOUND;
    return page === state.page ? null : { page: routes[location.pathname] || NOT_FOUND };
  }

  state = {
    page: routes['/']
  };


  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    const { page } = this.state;

    return (
      <Layout>
        <UniversalComponent src={() => import(`../pages/${page}`)} />
      </Layout>
    );
  }
}

export default withRouter(App);
