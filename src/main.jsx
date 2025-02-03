import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { UserProvider } from "./context/user";
import { ThemeProvider } from "./context/theme";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <UserProvider>
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    </UserProvider>
  </ThemeProvider>
);
