import frontmatter from "frontmatter";
import remark from "remark";
import remarkReact from "remark-react";
import RemarkLowlight from "remark-react-lowlight";
import bash from "highlight.js/lib/languages/bash";
import js from "highlight.js/lib/languages/javascript";
import scss from "highlight.js/lib/languages/scss";

import * as glob from "../blog/**/*.md";

const kebabCase = string => string.replace(/([A-Z])/g, match => "-" + match.toLowerCase());
const titleCase = string => string.replace(/([A-Z])/g, match => " " + match);

const url = (string, frontmatter) => {
  if (frontmatter.slug) return `/blog/${frontmatter.slug}/`;

  const path = string.split("$");
  const slug = path[1] === "index" ? kebabCase(path[0]) : kebabCase(path[1]);

  return `/blog/${slug}/`;
};

const title = (string, frontmatter) => {
  if (frontmatter.title) return frontmatter.title;

  const path = string.split("$");
  const url = path[1] === "index" ? titleCase(path[0]) : titleCase(path[1]);
};

const post = md => {
  const globTitle = md[0];
  const parsed = frontmatter(md[1]);

  const body = remark()
    .use(remarkReact, {
      remarkReactComponents: {
        code: RemarkLowlight({
          bash,
          js,
          scss,
        }),
      },
    })
    .processSync(parsed.content).contents;

  return {
    body: body,
    date: new Date(parsed.data.date),
    title: title(globTitle, parsed.data),
    url: url(globTitle, parsed.data),
  };
};

export default Object.entries(glob).map(md => post(md));
