import "@babel/polyfill";

import { loadableReady } from "@loadable/component";

import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

loadableReady(() => {
  ReactDOM.hydrate(
    <BrowserRouter>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>,
    document.getElementById("root")
  );
});
