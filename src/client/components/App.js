import React from 'react';
import { injectGlobal } from 'react-emotion';
import reset from 'css-wipe/js';
import FontFaceObserver from 'fontfaceobserver';
import PropTypes from 'prop-types';
import universal from 'react-universal-component';

import history from '../history';

injectGlobal`
  ${reset};

  @font-face {
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 400;
    src: local('IBM Plex Sans'),
         local('IBMPlexSans'),
         url(https://fonts.gstatic.com/s/ibmplexsans/v2/zYXgKVElMYYaJe8bpLHnCwDKhdHeFaxOedc.woff2) format('woff2'),
         url(https://fonts.gstatic.com/s/ibmplexsans/v2/zYX-KVElMYYaJe8bpLHnCwDKhdTuF6ZP.woff) format('woff');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  @font-face {
    font-family: 'IBM Plex Sans';
    font-style: italic;
    font-weight: 400;
    src: local('IBM Plex Sans Italic'),
         local('IBMPlexSans-Italic'),
         url(https://fonts.gstatic.com/s/ibmplexsans/v2/zYX-KVElMYYaJe8bpLHnCwDKhdTuF6ZJW9XjDg.woff2) format('woff2'),
         url(https://fonts.gstatic.com/s/ibmplexsans/v2/zYXgKVElMYYaJe8bpLHnCwDKhdHeEw.woff) format('woff');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  html {
    height: 100%;
    font-size: 12px;
  }

  body {
    background-color: hsla(0, 0%, 100%, 1);
    color: hsla(0, 0%, 30%, 1);
    font-family: -apple-system, 
                 BlinkMacSystemFont, 
                 "Segoe UI", 
                 Roboto, 
                 Helvetica,
                 Arial,
                 sans-serif,
                 "Apple Color Emoji",  /* Emojis*/
                 "Segoe UI Emoji", /* Emojis*/
                 "Segoe UI Symbol"; /* Emojis*/
    display: flex;
    flex-direction: column;
    font-size: 16px;
    font-weight: 400;
    min-height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    width: 100%;
  }

  * {
    line-height: 1.5;
  }

  em {
    font-style: italic;
  }
`;

const plex = new FontFaceObserver('IBM Plex Sans');

const UniversalComponent = universal(({ page }) => import(`../pages/${page}`), {
  loadingTransition: false
});

export default class Router extends React.Component {
  static propTypes = {
    pathname: PropTypes.string.isRequired
  };

  state = {
    pathname: this.props.pathname || '/404'
  };

  static pages = {
    '/': 'Home',
    '/feedback': 'Feedback',
    '/portfolio': 'Portfolio',
    '/404': 'NotFound'
  };

  static getPage = pathname => Router.pages[pathname.replace(/\.html$/, '')] || 'NotFound';

  async componentDidMount() {
    history.onChange(pathname => this.setState({ pathname }));

    try {
      await plex.load();
      injectGlobal({
        body: {
          fontFamily: "'IBM Plex Sans', sans-serif"
        }
      });
    } catch (error) {}
  }

  render() {
    const page = Router.getPage(this.state.pathname);
    return <UniversalComponent page={page} />;
  }
}
