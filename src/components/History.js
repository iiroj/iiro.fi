import PropTypes from "prop-types";
import React from "react";

const HistoryContext = React.createContext({ history: { location: {} } });

HistoryContext.displayName = "HistoryContext";
HistoryContext.Consumer.displayName = "HistoryContext";

export const HistoryProvider = ({ children, history }) => (
  <HistoryContext.Provider value={{ history }}>
    {children}
  </HistoryContext.Provider>
);

HistoryProvider.propTypes = {
  children: PropTypes.any.isRequired,
  history: PropTypes.object.isRequired
};

export const withHistory = Component =>
  function withHistory(props) {
    return (
      <HistoryContext.Consumer>
        {({ history }) => <Component {...props} history={history} />}
      </HistoryContext.Consumer>
    );
  };
