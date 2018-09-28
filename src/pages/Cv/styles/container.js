import { css } from 'emotion';

import Back from '../../../components/Back';

export default css({
  padding: '6.5rem 1rem 4rem 1rem',

  '@media (min-width: calc(210mm + 7rem))': {
    padding: '2rem 3.5rem'
  },

  '@media only print': {
    padding: '0',

    [Back]: {
      display: 'none'
    }
  }
});
