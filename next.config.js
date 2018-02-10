const glob = require("glob");

const pageFiles = glob.sync("pages/**/!(_document)@(.js)");

const getPathMap = pageFiles.reduce((pathMap, file) => {
  const page = file.replace(/^pages/, "");
  const path = page
    .replace(/\.js$/, "")
    .concat("/")
    .replace(/index\/$/, "");

  pathMap[path] = { page: page };
  return pathMap;
}, {});

module.exports = {
  exportPathMap: () => getPathMap,
  webpack(config, options) {
    const { dev } = options;

    if (!dev) {
      config.devtool = "source-map";
    }

    return config;
  },
};
