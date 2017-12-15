const fs = require("fs");
const path = require("path");

const convertToPath = require("./convertToPath");

function getPaths() {
  const pagesDir = __dirname + "/../src/pages/";
  const paths = [];
  fs.readdirSync(pagesDir).forEach(fileName => {
    const string = path.parse(fileName).name;
    paths.push(convertToPath(string));
  });

  return paths;
}

module.exports = getPaths;
