import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LandingPage } from "./component/LandingPage.jsx";
import { AttendancePage } from "./component/AttendancePage.jsx";

import "./index.scss";
import { LoginPage } from "./component/LoginPage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/attendance",
    element: <AttendancePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
