import React, { Suspense } from "react";
import { Link, Routes, Route, Outlet, RouterProvider } from "react-router-dom";
import { isEmpty } from "lodash";

import router, { routes } from "router";

import ReactSvg from "assets/svg/react.svg";
import GithubSvg from "assets/svg/github.svg";
import "style/App.css";

const renderRoutes = (routes) => {
  return routes.map((r, index) => (
    <Route
      exect={true}
      key={`${r.path}${index}`}
      path={r.path}
      element={r.element}
    >
      {!isEmpty(r.children) && renderRoutes(r.children)}
    </Route>
  ));
};
console.log(<RouterProvider router={router} />);

export const Layout = () => {
  return (
    <main className="app-container">
      <div>
        <a
          href="https://github.com/huangsisheng/set-react-project"
          target="_blank"
        >
          <img className="github" src={GithubSvg} alt="" />
        </a>
        <img className="app-logo" src={ReactSvg} alt="" />
        <h1 className="app-title">Welcome to set-react-project</h1>

        <section>
          {/* <Link to="/home">home</Link> */}
          {/* <Link to="/about">about</Link> */}

          {/* <Suspense fallback={<div>...loading</div>}>
            <Routes>{renderRoutes(routes)}</Routes>
          </Suspense> */}

          <Suspense>
            <Outlet></Outlet>
          </Suspense>
        </section>

        <section className="app-refers">
          <a className="app-link" href="https://react.dev/" target="_blank">
            Learn React
          </a>
          <a
            className="app-link"
            href="https://react.dev/reference/react"
            target="_blank"
          >
            API Reference
          </a>
        </section>
      </div>
    </main>
  );
};

export default function App() {
  return <RouterProvider router={router} />;
}
