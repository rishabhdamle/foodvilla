import ReactDOM from "react-dom/client";
import AppLayout from "./components/AppLayout";
import Aboutus from "./components/Aboutus";
import ErrorPage from "./components/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router";
import Body from "./components/Body";
import Aboutus from "./components/Aboutus";
import Contactus from "./components/Contactus";
import RestaurantMenu from "./components/RestaurantMenu";
import { lazy, Suspense } from "react";

const Grocery = lazy(() => import("./components/Grocery"));
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
      {
        path: "/Grocery",
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
            <Grocery></Grocery>
          </Suspense>
        ),
      },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router}></RouterProvider>);
