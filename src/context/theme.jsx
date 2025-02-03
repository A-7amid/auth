import React, { createContext, useContext, useMemo, useState } from "react";

const ThemeContext = createContext();

const useTheme = () => {
  const theme = useContext(ThemeContext);

  if (!theme) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return theme;
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const handleTheme = () => {
    setTheme((prevTheme) => (prevTheme == "light" ? "dark" : "light"));
  };

  const values = useMemo(
    () => ({ theme, setTheme, handleTheme }),
    [theme, setTheme, handleTheme]
  );

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export { useTheme, ThemeProvider };
