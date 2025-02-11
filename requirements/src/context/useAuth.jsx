import { createContext, useContext } from "react";

export const authContext = createContext({ user: null, setUser: () => ({}) });

const useAuth = () => useContext(authContext);

export default useAuth;
