import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import About from "../About/About";
import Blog from "../Blog/Blog";
import Home from "../Home/Home";
import Master from "../Master/Master";
import Store from "../Store/Store";
import CheckOrder from "../CheckOrder/CheckOrder";
import ViewCart from "../ViewCart/ViewCart";
import { Register } from "../Register/Register";
import { Login } from "../login/Login";

export default function App() {
  let routes = createHashRouter([
    {
      path: "/",
      element: <Master />,
      errorElement: <p>NotFound</p>,
      children: [
        { index: true, element: <Home /> },
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
