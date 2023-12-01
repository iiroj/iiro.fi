import React from "react";
import { renderToReadableStream } from "react-dom/server";

import Shell from "./Shell.js";

const renderReact = async ({ component: Component, signal }) => {
  const stream = await renderToReadableStream(
    <Shell>
      <Component />
    </Shell>,
    {
      signal: signal,
    },
  );

  return stream;
};

export default renderReact;
