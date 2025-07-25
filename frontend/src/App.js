import React from "react";
import ReactDOM from "react-dom/client";
import AppLayout from "./components/AppLayout";
import Aboutus from "./components/Aboutus";
import ErrorPage from "./components/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router";
import Body from "./components/Body";
import restaurantList from "./utils/mock_data";
import Aboutus from "./components/Aboutus";
import Contactus from "./components/Contactus";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout></AppLayout>,
    children: [
      {
        path: "/",
        element: <Body></Body>,
      },
      {
        path: "/Aboutus",
        element: <Aboutus></Aboutus>,
      },
      {
        path: "/Contactus",
        element: <Contactus></Contactus>,
      },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router}></RouterProvider>);
