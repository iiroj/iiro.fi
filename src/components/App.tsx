import * as React from "react";
import { History } from "history";

import { NotFound, routes } from "../routes";

import Reset from "./Reset";

const App = React.memo(({ history }: { history: History }) => {
  const Page = React.useMemo(
    () => routes.get(history.location.pathname) || NotFound,
    [history.location.pathname]
  );

  return (
    <>
      <Reset />
      <Page />
    </>
  );
});

export default App;
