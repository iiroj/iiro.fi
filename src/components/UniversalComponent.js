import universal from 'react-universal-component';
import PropTypes from 'prop-types';

const options = {
  alwaysDelay: true,
  ignoreBabelRename: true,
  loadingTransition: false,
  minDelay: 500
};

const UniversalComponent = universal(({ src }) => src(), options);

UniversalComponent.propTypes = {
  src: PropTypes.func.isRequired
};

export default UniversalComponent;
