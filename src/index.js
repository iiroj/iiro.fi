import "@babel/polyfill";

import { hydrate } from "emotion";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./components/App";

if (typeof window !== "undefined") {
  const ids = JSON.parse(document.getElementById("emotion-ids").innerHTML);
  hydrate(ids);

  ReactDOM.hydrate(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById("root")
  );
}
