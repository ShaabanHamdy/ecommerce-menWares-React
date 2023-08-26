import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import About from "../About/About";
import Blog from "../Blog/Blog";
import CheckOrder from "../CheckOrder/CheckOrder";
import Home from "../Home/Home";
import { Login } from "../login/Login";
import Master from "../Master/Master";
import { Register } from "../Register/Register";
import Store from "../Store/Store";
import ViewCart from "../ViewCart/ViewCart";

export default function App() {
  let routes = createHashRouter([
    {
      path: "/",
      element: <Master />,
      errorElement: <p>NotFound</p>,
      children: [
        { index: true, element: <Home /> },
        { path: "store", element: <Store /> },
        { path: "store", element: <Store /> },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },

        { path: "about", element: <About /> },
        { path: "blog", element: <Blog /> },
        { path: "CheckOrder", element: <CheckOrder /> },
        { path: "ViewCart/:id/:productName", element: <ViewCart /> },
      ],
    },
  ]);
  return (
    <>
      <div className="container-fluid">
        <RouterProvider router={routes} />
      </div>
    </>
  );
}
