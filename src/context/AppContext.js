import React, { useState, createContext } from 'react';

const AppContext = createContext();

const AppProvider = (props) => {
  const [counter, setCounter] = useState(0);
  return (
    <AppContext.Provider value={[counter, setCounter]}>{props.children}</AppContext.Provider>
  );
};

export { AppContext, AppProvider };