import universal from "react-universal-component";
import PropTypes from "prop-types";

const loading = () => null;

const options = {
  ignoreBabelRename: true,
  loading,
  loadingTransition: false
};

const UniversalComponent = universal(({ src }) => src(), options);

UniversalComponent.propTypes = {
  isSync: PropTypes.bool.isRequired,
  src: PropTypes.func.isRequired
};

export default UniversalComponent;
