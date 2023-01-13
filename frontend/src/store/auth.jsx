import { useState, createContext, useMemo } from "react";
import propTypes from "prop-types";

export const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const value = useMemo(
    () => ({ isLogged, setIsLogged, isAdmin, setIsAdmin }),
    [isLogged, setIsLogged, isAdmin, setIsAdmin]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

// create a hook to use the context

UserProvider.propTypes = {
  children: propTypes.node.isRequired,
};
