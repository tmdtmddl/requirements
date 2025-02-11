import { createContext, useContext } from "react";
import { authContext } from "./AuthProvider";

const authContext = createContext({
  user: null,
  setUser: () => ({}),
});

const useAuth = () => useContext(authContext);

export default useAuth;
