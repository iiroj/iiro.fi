import { css } from 'emotion';

export default css({
  display: 'flex',
  flexWrap: 'wrap-reverse',

  div: {
    flex: '1 1 100mm',
    paddingRight: '4rem'
  },

  img: {
    filter: 'grayscale(100%) brightness(120%) contrast(80%)',
    flex: '0 1 50mm',
    height: '100%',
    marginBottom: 'auto',
    paddingBottom: '2rem'
  },

  h1: {
    fontWeight: 600,
    fontSize: '3rem',
    lineHeight: '3rem',
    marginBottom: '2rem'
  }
});
