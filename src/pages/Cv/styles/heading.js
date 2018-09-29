import { css } from 'emotion';

export default css({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',

  svg: {
    flexShrink: 0,
    marginBottom: '1rem',
    marginRight: '1rem',

    '@media only print': {
      filter: 'grayscale(100%)'
    }
  },

  span: {
    fontSize: '1.2rem',
    fontWeight: 600,
    marginBottom: '2rem',
    marginTop: -1
  }
});
