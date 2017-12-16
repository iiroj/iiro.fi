import * as glob from "../src/pages/*.js";

const url = string => {
  const url =
    "/" +
    string
      .toLowerCase()
      .replace(/\/index/, "/")
      .replace(/index/, "");

  if (url.endsWith("/")) return url;
  return url + "/";
};

export default Object.entries(glob).map(page => ({
  component: page[1],
  url: url(page[0]),
}));
