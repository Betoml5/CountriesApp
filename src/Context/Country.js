import React, { useState } from "react";
export const Context = React.createContext({});

export function CountryContextProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <Context.Provider
      value={{
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </Context.Provider>
  );
}
