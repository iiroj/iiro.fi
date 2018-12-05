/** @jsx jsx */

import { css, jsx } from "@emotion/core";
import React from "react";
import PropTypes from "prop-types";

import Fraktio from "../../../components/Fraktio/Logo";

const heading = css({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",

  svg: {
    flexShrink: 0,
    marginBottom: "1rem",
    marginRight: "1rem"
  },

  span: {
    fontSize: "1.2rem",
    fontWeight: 600,
    marginBottom: "2rem",
    marginTop: -4
  }
});

const Heading = ({ page }) => (
  <aside css={heading}>
    <Fraktio colored />
    <span>
      <time dateTime="2018-10-01">1 Oct 2018</time>
      {page && <span> — {page}</span>}
    </span>
  </aside>
);

Heading.propTypes = {
  page: PropTypes.string
};

export default Heading;
