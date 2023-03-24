import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Layout from "../layout";
// import Home from "pages/Home";
// import About from "pages/About";
const Home = React.lazy(() => import("pages/Home"));
const About = React.lazy(() => import("pages/About"));

export default createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);
