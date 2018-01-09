import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import Helmet from "react-helmet";

import App from "../src/layouts/App";
import Pages from "../src/layouts/Pages";
import Html from "../src/layouts/Html";

export default ({ path, assets }) => {
  const sheet = new ServerStyleSheet();
  const head = Helmet.rewind();

  const body = renderToString(
    sheet.collectStyles(
      <StaticRouter location={path}>
        <App>
          <Pages />
        </App>
      </StaticRouter>
    )
  );
  const css = sheet.getStyleElement();
  const bundle = assets.bundle;

  return renderToString(
    <Html head={head} css={css} bundle={bundle}>
      {body}
    </Html>
  );
};
