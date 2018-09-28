import { css } from 'emotion';

export default css({
  backgroundColor: 'white',
  margin: '0 auto',
  maxWidth: '210mm',
  padding: '2rem',
  position: 'relative',

  '&::before': {
    boxShadow: '0 1rem 10rem rgba(0, 0, 0, 0.2)',
    content: '""',
    display: 'block',
    height: '100%',
    left: 0,
    top: 0,
    width: '100%',
    position: 'absolute',
    zIndex: -1
  },

  '@media (min-width: calc(210mm + 7rem))': {
    height: '297mm'
  },

  '@media only print': {
    height: '100vh',
    padding: 0,
    pageBreakAfter: 'always',
    width: '100vw',

    '&::before': {
      display: 'none'
    }
  }
});
