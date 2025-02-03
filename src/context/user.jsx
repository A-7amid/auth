import React from "react";
import { createContext, useContext } from "react";
import { users } from "../dummydata";
import { useNavigate } from "react-router-dom";

const UsersContext = createContext();

const useAuth = () => {
  const user = useContext(UsersContext);

  if (!user) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return user;
};

const AuthProvider = ({ children }) => {
  return (
    <UsersContext.Provider value={{ users }}>{children}</UsersContext.Provider>
  );
};

export { AuthProvider, useAuth };
