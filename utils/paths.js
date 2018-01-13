const fs = require("fs");
const glob = require("glob");

const pagesDir = process.cwd() + "/src/pages";

const resolvePagePath = string =>
  string
    .replace(pagesDir, "")
    .toLowerCase()
    .replace(".js", "")
    .replace(/\/index/, "/")
    .replace(/index/, "");

const getPaths = () => {
  const pageFiles = glob.sync(`${pagesDir}/**/*.js`);
  const pagePaths = pageFiles.map(string => resolvePagePath(string));

  return pagePaths;
};

module.exports = getPaths;
