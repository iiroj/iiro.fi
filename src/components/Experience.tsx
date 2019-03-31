import * as React from "react";

import { highlight as highlightStyle } from "../design";

import { Experience } from "../constants/experience";

interface Props extends Experience {
  highlight?: boolean;
}

export default ({ company, highlight, jobTitle, url }: Props) => (
  <>
    <strong css={highlight && highlightStyle}>{jobTitle}</strong>{" "}
    <span>at </span>
    <a href={url} rel="noopener noreferrer" target="_blank">
      {company}
    </a>
  </>
);
