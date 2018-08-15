import React from 'react';
import { injectGlobal } from 'react-emotion';
import FontFaceObserver from 'fontfaceobserver';
import PropTypes from 'prop-types';

const IBMPlexSans = new FontFaceObserver('IBM Plex Sans');

async function unregisterServiceWorkers() {
  const registrations = await navigator.serviceWorker.getRegistrations();
  if (!registrations) return;
  for (let registration of registrations) {
    await registration.unregister();
  }
}

export default class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.any.isRequired
  };

  componentDidMount() {
    // TODO: Remove this after a while
    if ('serviceWorker' in navigator) {
      unregisterServiceWorkers();
    }

    IBMPlexSans.load();
  }

  render = () => this.props.children;
}

injectGlobal`
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
    font-family: 'IBM Plex Sans',
                 -apple-system, 
                 BlinkMacSystemFont, 
                 "Segoe UI", 
                 Roboto, 
                 Helvetica,
                 Arial,
                 sans-serif,
                 "Apple Color Emoji",  /* Emojis*/
                 "Segoe UI Emoji", /* Emojis*/
                 "Segoe UI Symbol"; /* Emojis*/
    font-size: 16px;
    font-weight: 400;
    height: 100%;
    line-height: 1.5;
  }

  #___gatsby {
    height: 100%;

    > div {
      display: flex;
      flex-direction: column;
      height: 100%;
      overflow-x: hidden;
      overflow-y: auto;
      width: 100%;
    }
  }

  * {
    box-sizing: border-box;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    margin: 0;
    padding: 0;
  }

 a {
    color: inherit;
    text-decoration: inherit;
  }

  em {
    font-style: italic;
  }

  ul, ol {
    list-style: none;
  }
`;
