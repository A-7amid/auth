import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LoginPage from "./routes/LoginPage";
import NotFound from "./NotFound";
import React from "react";

export const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <NotFound /> },
  { path: "/login", element: <LoginPage /> },
]);
