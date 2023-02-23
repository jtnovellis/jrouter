/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import EVENTS from "../constants";

export default function Router({
  routes = [],
  defaultComponent: DefaultComponent = () => <h1>404</h1>,
}) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    function onLocationChange() {
      setCurrentPath(window.location.pathname);
    }
    window.addEventListener(EVENTS.push, onLocationChange);
    window.addEventListener(EVENTS.pop, onLocationChange);
    return () => {
      window.removeEventListener(EVENTS.push, onLocationChange);
      window.removeEventListener(EVENTS.pop, onLocationChange);
    };
  }, []);

  const Page = routes.find(({ path }) => path === currentPath)?.component;
  return Page ? <Page /> : <DefaultComponent />;
}
