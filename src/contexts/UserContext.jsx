/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
export const UserContext = createContext({});
export default function UserContextProvider({ children }) {
  const [user, setUser] = useState({ email: "", Password: "" });
  const [isLogedIn, setIsLoggedIn] = useState(false);
  function logOut() {
    setUser({});
    setIsLoggedIn(false);
  }
  function login(form) {
    setUser(form);
    setIsLoggedIn(true);
  }
  useEffect(() => {
    if (user && user.email) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, logOut, login, isLogedIn }}>
      {children}
    </UserContext.Provider>
  );
}
