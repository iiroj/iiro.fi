import { createBrowserHistory } from "history";
import { HelmetProvider } from "react-helmet-async";
import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import { HistoryProvider } from "./components/History";

const history = createBrowserHistory();

const render = App =>
  ReactDOM.hydrate(
    <HistoryProvider history={history}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </HistoryProvider>,
    document.getElementById("root")
  );

if (process.env.NODE_ENV !== "production" && module.hot) {
  module.hot.accept("./components/App.js", () => {
    const App = require("./components/App").default;
    render(App);
  });
}

render(App);
