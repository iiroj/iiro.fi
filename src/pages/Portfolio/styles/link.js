import { css } from 'emotion';

export default css({
  background: 'white !important',
  borderRadius: 2,
  color: '#333333 !important',
  textShadow: 'none',
  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
  margin: '1rem 0',
  display: 'inline-block',
  lineHeight: '16px',
  padding: '12px 16px',
  textDecoration: 'none',
  transition: 'color 125ms ease-in, box-shadow 125ms ease-in',

  '&:hover': {
    color: '#2171cc !important',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.2), 0 2px 4px rgba(0, 0, 0, 0.2)'
  },

  '&:active': {
    color: '#333333 !important',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.2), 0 2px 4px rgba(0, 0, 0, 0.2), 0 8px 16px rgba(0, 0, 0, 0.2)'
  }
});
