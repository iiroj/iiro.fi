import React from "react";
import { hydrate, render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./layouts/App";
import Pages from "./layouts/Pages";

const isProduction = process.env.NODE_ENV === "production";
const renderApp = isProduction ? hydrate : render;

renderApp(
  <BrowserRouter>
    <App>
      <Pages />
    </App>
  </BrowserRouter>,
  document.getElementById("root")
);

if (isProduction && "serviceWorker" in navigator) {
  navigator.serviceWorker.register("/service-worker.js");
}

if (!isProduction && module.hot) {
  module.hot.accept();
}
