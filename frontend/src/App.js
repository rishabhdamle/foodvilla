import React from "react";
import ReactDOM from "react-dom/client";
import AppLayout from "./components/AppLayout";
import Aboutus from "./components/Aboutus";
import ErrorPage from "./components/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router";
const router = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/Aboutus",
    Component: Aboutus,
  },
  {
    path: "/Home",
    Component: AppLayout,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router}></RouterProvider>);
