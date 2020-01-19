import { css } from "@emotion/react";
import { Helmet } from "react-helmet-async";
import * as React from "react";

import { minWidth, spacing } from "../design";
import { NextPage } from "next";

const main = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: `${spacing.medium} ${spacing.small} ${spacing.small}`,

  ...minWidth.tablet({
    padding: `${spacing.large} ${spacing.medium}`
  })
});

const container = css({
  alignItems: "stretch",
  display: "flex",
  minHeight: "100%"
});

const NotFound: NextPage<{}> = () => (
  <div css={container}>
    <Helmet>
      <title>Page Not Found</title>
    </Helmet>

    <main css={main}>
      <header>
        <h1>404 — Page Not Found</h1>
      </header>
    </main>
  </div>
);

export default React.memo(NotFound);
