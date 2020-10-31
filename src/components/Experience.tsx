import * as React from "react";

import { highlight as highlightStyle } from "../design";

import { Experience as ExperienceType } from "../constants/experience";

interface Props extends ExperienceType {
  highlight?: boolean;
}

const Experience = ({ company, highlight, jobTitle, url }: Props) => (
  <>
    <strong css={highlight && highlightStyle}>{jobTitle}</strong>{" "}
    <span>at </span>
    <a href={url} rel="noopener noreferrer" target="_blank">
      {company}
    </a>
  </>
);

export default Experience;
