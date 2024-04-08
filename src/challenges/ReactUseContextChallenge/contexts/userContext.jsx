import { createContext, useState } from "react";

export const UsersContext = createContext({
  user: {},
});

export const UsersProvider = ({ children }) => {
  const [user, setUser] = useState("");

  const value = {
    user,
    setUser,
  };

  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
};
