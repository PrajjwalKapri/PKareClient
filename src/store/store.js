import { createContext } from "react";

export const Context = createContext({
  isAuthenticated: false,
  user: {},
  setUserState: () => {},
  setIsAuthenticatedState: () => {},
});
