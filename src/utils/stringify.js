const stringify = params =>
  Object.keys(params)
    .map(key => encodeURI(key) + "=" + encodeURI(params[key]))
    .join("&");

export default stringify;
