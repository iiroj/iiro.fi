import React, { PureComponent } from 'react';
import { injectGlobal } from 'react-emotion';
import reset from 'css-wipe/js';
import FontFaceObserver from 'fontfaceobserver';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import universal from 'react-universal-component';

injectGlobal`
  ${reset};

  html {
    height: 100%;
    font-size: 12px;
  }

  #root {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100%;
  }

  body {
    background-color: hsla(0, 0%, 100%, 1);
    color: hsla(0, 0%, 30%, 1);
    font-family: sans-serif;
    font-size: 16px;
    font-weight: 400;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }

  * {
    line-height: 1.5;
  }

  em {
    font-style: italic;
  }
`;

const plex = new FontFaceObserver('IBM Plex Sans');

const UniversalComponent = universal(({ page }) => import(`../pages/${page.component}`), {
  loadingTransition: false
});

class App extends PureComponent {
  componentDidMount() {
    injectGlobal(`@import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,400i');`);
    plex.load().then(injectGlobal`
      body {
        font-family: 'IBM Plex Sans', sans-serif;
      }
    `);
  }

  render() {
    const { page } = this.props;

    return <UniversalComponent page={page} />;
  }
}

App.propTypes = {
  page: PropTypes.shape({
    path: PropTypes.string.isRequired,
    component: PropTypes.string.isRequired
  }).isRequired
};

export default connect(({ page }) => ({ page }))(App);
