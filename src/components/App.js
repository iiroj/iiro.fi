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
    loading: false,
    page: routes['/']
  };

  setLoading = () => this.setState({ loading: true });

  setNotLoading = () => this.setState({ loading: false });

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    const { loading, page } = this.state;

    return (
      <Layout>
        <Loading visible={loading} />
        <UniversalComponent
          onBefore={this.setLoading}
          onAfter={this.setNotLoading}
          src={() => import(`../pages/${page}`)}
        />
      </Layout>
    );
  }
}

export default withRouter(App);
