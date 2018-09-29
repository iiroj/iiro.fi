import { css } from 'emotion';

export default css({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',

  svg: {
    flexShrink: 0,
    marginBottom: '1rem',
    marginRight: '1rem'
  },

  span: {
    fontSize: '1.2rem',
    fontWeight: 600,
    marginBottom: '2rem',
    marginTop: -4
  }
});
