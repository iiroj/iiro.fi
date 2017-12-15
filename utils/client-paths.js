import frontmatter from "frontmatter";

export const pageUrl = string => {
  const url =
    "/" +
    string
      .toLowerCase()
      .replace(/\/index/, "/")
      .replace(/index/, "");

  if (url.endsWith("/")) return url;
  return url + "/";
};

const kebabCase = string => string.replace(/([A-Z])/g, match => "-" + match.toLowerCase());

const blogUrl = (string, data) => {
  if (data.slug) return `/blog/${data.slug}/`;

  const path = string.split("$");
  const url = path[1] === "index" ? kebabCase(path[0]) : kebabCase(path[1]);

  return `/blog/${url}/`;
};

const titleCase = string => string.replace(/([A-Z])/g, match => " " + match);

const blogTitle = (string, data) => {
  if (data.title) return data.title;

  const path = string.split("$");
  const url = path[1] === "index" ? titleCase(path[0]) : titleCase(path[1]);
};

export const blogLink = (string, file) => {
  const data = frontmatter(file).data;

  return {
    title: blogTitle(string, data),
    url: blogUrl(string, data),
  };
};
