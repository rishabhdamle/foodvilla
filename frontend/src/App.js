import ReactDOM from "react-dom/client";
import AppLayout from "./components/AppLayout";
import Aboutus from "./components/Aboutus";
import ErrorPage from "./components/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router";
import Body from "./components/Body";
import Aboutus from "./components/Aboutus";
import Contactus from "./components/Contactus";
import RestaurantMenu from "./components/RestaurantMenu";

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
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu></RestaurantMenu>,
      },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router}></RouterProvider>);
