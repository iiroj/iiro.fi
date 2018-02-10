module.exports = {
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      "/feedback/": { page: "/feedback" },
      "/portfolio/": { page: "/portfolio" },
    };
  },
  webpack(config, options) {
    const { dev } = options;

    if (!dev) {
      config.devtool = "source-map";
    }

    return config;
  },
};
