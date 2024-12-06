import React, { createContext } from 'react';


export const DataContext = createContext();

// Create the provider component
export const DataProvider = ({ children }) => {
  const sharedData = "Hello from Context API!";

  return (
    <DataContext.Provider value={sharedData}>
      {children}
    </DataContext.Provider>
  );
};
