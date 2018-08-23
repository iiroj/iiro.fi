import React from 'react';
import PropTypes from 'prop-types';

import Layout from './src/components/Layout';

export const wrapPageElement = ({ element }) => <Layout>{element}</Layout>;

wrapPageElement.propTypes = {
  element: PropTypes.any.isrequired
};
