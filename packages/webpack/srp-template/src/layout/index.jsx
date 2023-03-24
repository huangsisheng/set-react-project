import React, { Suspense, useRef, useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { SwitchTransition, CSSTransition } from "react-transition-group";

import ReactSvg from "assets/svg/react.svg";
import GithubSvg from "assets/svg/github.svg";
import "./index.css";

export default function Layout() {
  const [activeRoute, setActiveRoute] = useState("/");

  const nodeRef = useRef();
  const [routeState, setRouteState] = useState(false);

  const onRouteChange = (path) => {
    setActiveRoute(path);
    setRouteState((state) => !state);
  };
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
        <h1 className="app-title">
          <a
            href="https://www.npmjs.com/package/set-react-project"
            target="_blank"
          >
            Set React Project
          </a>
        </h1>

        <section>
          <NavLink
            onClick={onRouteChange}
            className={`app-link ${
              ["/", "/home"].includes(activeRoute) ? "active" : ""
            }`}
            to="/home"
          >
            home
          </NavLink>
          <NavLink onClick={onRouteChange} className="app-link" to="/about">
            about
          </NavLink>

          <SwitchTransition mode="out-in">
            <CSSTransition
              key={routeState}
              classNames="fade"
              timeout={800}
              nodeRef={nodeRef}
              addEndListener={(done) => {
                nodeRef.current.addEventListener("transitionend", done, false);
              }}
            >
              <div
                className="page-container"
                ref={(el) => (nodeRef.current = el)}
              >
                <Suspense>
                  <Outlet />
                </Suspense>
              </div>
            </CSSTransition>
          </SwitchTransition>
        </section>

        <section className="app-refers">
          <a className="app-refer" href="https://react.dev/" target="_blank">
            Learn React
          </a>
          <a
            className="app-refer"
            href="https://react.dev/reference/react"
            target="_blank"
          >
            API Reference
          </a>
        </section>
      </div>
    </main>
  );
}
