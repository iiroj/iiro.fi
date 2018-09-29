import React from 'react';
import { injectGlobal } from 'emotion';
import FontFaceObserver from 'fontfaceobserver';
import PropTypes from 'prop-types';

const IBMPlexSans400 = new FontFaceObserver('IBM Plex Sans', { style: 'normal', weight: 400 });
const IBMPlexSans400Italic = new FontFaceObserver('IBM Plex Sans', { style: 'italic', weight: 400 });
const IBMPlexSans600 = new FontFaceObserver('IBM Plex Sans', { style: 'normal', weight: 600 });
const IBMPlexSans600Italic = new FontFaceObserver('IBM Plex Sans', { style: 'italic', weight: 600 });

export default class Layout extends React.PureComponent {
  static propTypes = {
    children: PropTypes.any.isRequired
  };

  componentDidMount() {
    Promise.all([
      IBMPlexSans400.load(),
      IBMPlexSans400Italic.load(),
      IBMPlexSans600.load(),
      IBMPlexSans600Italic.load()
    ]);
  }

  render = () => this.props.children;
}

injectGlobal(
  {
    '@font-face': {
      fontFamily: 'IBM Plex Sans',
      fontStyle: 'normal',
      fontWeight: 400,
      src:
        'local("IBM Plex Sans"), local("IBMPlexSans"), url(https://fonts.gstatic.com/s/ibmplexsans/v2/zYXgKVElMYYaJe8bpLHnCwDKhdHeFaxOedc.woff2) format("woff2"), url(https://fonts.gstatic.com/s/ibmplexsans/v2/zYX-KVElMYYaJe8bpLHnCwDKhdTuF6ZP.woff) format("woff")',
      unicodeRange:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD'
    }
  },
  {
    '@font-face': {
      fontFamily: 'IBM Plex Sans',
      fontStyle: 'italic',
      fontWeight: 400,
      src:
        'local("IBM Plex Sans Italic"), local("IBMPlexSans-Italic"), url(https://fonts.gstatic.com/s/ibmplexsans/v2/zYX-KVElMYYaJe8bpLHnCwDKhdTuF6ZJW9XjDg.woff2) format("woff2"), url(https://fonts.gstatic.com/s/ibmplexsans/v2/zYXgKVElMYYaJe8bpLHnCwDKhdHeEw.woff) format("woff")',
      unicodeRange:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD'
    }
  },
  {
    '@font-face': {
      fontFamily: 'IBM Plex Sans',
      fontStyle: 'normal',
      fontWeight: 600,
      src:
        'local("IBM Plex Sans SemiBold"), local("IBMPlexSans-SemiBold"), url(https://fonts.gstatic.com/s/ibmplexsans/v3/zYX9KVElMYYaJe8bpLHnCwDKjQ76AIFsdP3pBms.woff2) format("woff2"), url(https://fonts.gstatic.com/s/ibmplexsans/v3/zYX9KVElMYYaJe8bpLHnCwDKjQ76AIFscg.woff) format("woff")',
      unicodeRange:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD'
    }
  },
  {
    '@font-face': {
      fontFamily: 'IBM Plex Sans',
      fontStyle: 'italic',
      fontWeight: 600,
      src:
        'local("IBM Plex Sans SemiBold Italic"), local("IBMPlexSans-SemiBoldItalic"), url(https://fonts.gstatic.com/s/ibmplexsans/v3/zYX7KVElMYYaJe8bpLHnCwDKhdTmyIJcdvfuJGl18Q.woff2) format("woff2"), url(https://fonts.gstatic.com/s/ibmplexsans/v3/zYX7KVElMYYaJe8bpLHnCwDKhdTmyIJcdvfo.woff) format("woff")',
      unicodeRange:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD'
    }
  },
  {
    html: {
      height: '100%',
      fontSize: 12
    },

    body: {
      backgroundColor: 'white',
      color: 'hsl(0, 0%, 30%)',
      fontFamily:
        '"IBM Plex Sans", -apple-system,  BlinkMacSystemFont,  "Segoe UI",  Roboto,  Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      fontSize: 16,
      fontWeight: 400,
      height: '100%',
      lineHeight: 1.5
    },

    '#root': {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100%',
      width: '100%'
    },

    '*': {
      boxSizing: 'border-box',
      fontSize: 'inherit',
      fontWeight: 'inherit',
      lineHeight: 'inherit',
      margin: 0,
      padding: 0
    },

    a: {
      color: 'inherit',
      textDecoration: 'inherit'
    },

    em: {
      fontStyle: 'italic'
    },

    strong: {
      fontWeight: 600
    },

    'ul, ol': {
      listStyle: 'none'
    }
  }
);
