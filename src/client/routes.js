const HOME = '/';
const FEEDBACK = '/feedback';
const PORTFOLIO = '/portfolio';
const NOT_FOUND = '/404';

export const routesByName = {
  HOME,
  FEEDBACK,
  PORTFOLIO
};

export const routesByPath = {
  [HOME]: {
    component: 'Home'
  },
  [FEEDBACK]: {
    component: 'Feedback'
  },
  [PORTFOLIO]: {
    component: 'Portfolio'
  },
  [NOT_FOUND]: {
    component: 'NotFound'
  }
};
