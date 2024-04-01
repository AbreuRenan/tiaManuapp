import React from "react";

export const AppContext = React.createContext();
export function AppContextComponent({ children }) {
  const [userData, setUserData] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  
  return (
    <AppContext.Provider
      value={{
        isLoading,
        setIsLoading,
        userData,
        setUserData,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
