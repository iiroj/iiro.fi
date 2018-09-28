import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router';

import routes, { NOT_FOUND } from '../routes';
import Layout from './Layout';
import Loading from './Loading';
import { MessageProvider } from '../services/chat';
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
    messages: [],
    page: routes['/']
  };

  setLoading = () => {
    this.setState({ loading: true });
  };

  setNotLoading = () => {
    this.setState({ loading: false });
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  };

  render() {
    const { loading, page } = this.state;

    return (
      <Layout>
        <MessageProvider>
          <Loading visible={loading} />
          <UniversalComponent
            onBefore={this.setLoading}
            onAfter={this.setNotLoading}
            src={() => import(`../pages/${page}`)}
          />
        </MessageProvider>
      </Layout>
    );
  }
}

export default withRouter(App);
