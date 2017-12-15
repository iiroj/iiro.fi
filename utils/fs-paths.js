const fs = require("fs");
const recursive = require("recursive-readdir");
const path = require("path");
const frontmatter = require("frontmatter");

const pagesDir = process.cwd() + "/src/pages";
const blogDir = process.cwd() + "/blog";

const resolvePagePath = string =>
  string
    .replace(pagesDir, "")
    .toLowerCase()
    .replace(".js", "")
    .replace(/\/index/, "/")
    .replace(/index/, "");

const resolveBlogPostPath = string => {
  const file = fs.readFileSync(string, "utf8");
  const parsed = frontmatter(file);
  const slug = parsed.data.slug;

  if (!slug) {
    return (
      "/blog/" +
      string
        .replace(blogDir, "")
        .split("/")[0]
        .toLowerCase()
    );
  }

  return "/blog/" + slug;
};

const getPaths = async () => {
  const pageFiles = await recursive(pagesDir, ["!*.js"]);
  const pagePaths = pageFiles.map(string => resolvePagePath(string));
  const blogFiles = await recursive(blogDir, ["!*.md"]);
  const blogPaths = blogFiles.map(string => resolveBlogPostPath(string));

  return pagePaths.concat(blogPaths);
};

module.exports = getPaths;
