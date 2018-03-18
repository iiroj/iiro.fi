module.exports = {
  webpack(config, options) {
    const { dev } = options;

    if (!dev) {
      config.devtool = "source-map";
    }

    return config;
  },
};
