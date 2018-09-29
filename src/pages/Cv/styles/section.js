import { css } from 'emotion';

export default css({
  display: 'flex',
  flexWrap: 'wrap',
  margin: '2rem 0',

  h2: {
    flex: '0 1 50mm',
    fontSize: 16,
    lineHeight: '24px',
    marginBottom: '2rem'
  },

  '> div': {
    flex: '1 1 100mm',
    paddingRight: '4rem'
  },

  dl: {
    dt: {
      float: 'left'
    },

    dd: {
      paddingLeft: '30mm'
    }
  },

  ul: {
    'li + li': {
      marginTop: '1rem'
    }
  }
});
