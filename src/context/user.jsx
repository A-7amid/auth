import React, { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { users } from "../dummydata";

const UserContext = createContext();

const useUser = () => {
  const user = useContext(UserContext);

  if (!user) {
    throw new Error("useUser must be used within a UserProvider");
  }
};

const UserProvider = ({ children }) => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData(document.getElementById("form"));

    users.filter((user) => {
      if (
        user.email == formData.get("email") &&
        user.password == formData.get("password")
      ) {
        navigate("/");
        localStorage.setItem(`${user.email}`, user.token);
      } else {
      }
    });
  };

  return <UserContext.Provider value={handleLogin}></UserContext.Provider>;
};

export { UserProvider, useUser };
