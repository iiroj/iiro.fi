import PropTypes from "prop-types";
import React, { useContext } from "react";

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

export const useHistory = () => {
  const { history } = useContext(HistoryContext);
  return history;
};
