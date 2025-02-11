import { createContext, useEffect, useState } from "react";
import PropTypes from "pros-types";

export const authContext = createContext({ user: null });

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect;
  return (
    <authContext.Provider value={{ user, setUser }}>
      {children}
    </authContext.Provider>
  );
};
AuthProvider.PropTypes = {
  children: PropTypes.element,
};
