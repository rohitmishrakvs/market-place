// src/context/AppContext.js
import React, { createContext, useState } from 'react';

// Create a Context
const AppContext = createContext();

// Create a Provider component
const AppProvider = ({ children }) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    error: null,
  });

  const setData = (data) => {
    setState({ ...state, data, isLoading: false, error: null });
  };

  const setError = (error) => {
    setState({ ...state, data: null, isLoading: false, error });
  };

  return (
    <AppContext.Provider value={{ state, setData, setError }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
