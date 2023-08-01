import React from "react";
import {  createHashRouter, RouterProvider } from "react-router-dom";
import About from "../About/About";
import Blog from "../Blog/Blog";
import Home from "../Home/Home";
import Login from "../login/Login";
import Master from "../Master/Master";
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
        { path: "login", element: <Login /> },
        { path: "about", element: <About /> },
        { path: "blog", element: <Blog /> },
        { path: "ViewCart", element: <ViewCart /> },
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
