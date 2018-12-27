import "@babel/polyfill";

import { loadableReady } from "@loadable/component";

import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

const render = App =>
  ReactDOM.hydrate(
    <BrowserRouter>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>,
    document.getElementById("root")
  );

loadableReady(() => render(App));

if (process.env.NODE_ENV !== "production" && module.hot) {
  module.hot.accept("./components/App.js", () => {
    const App = require("./components/App").default;
    render(App);
  });
}
