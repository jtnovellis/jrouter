/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, Children } from "react";
import { match } from "path-to-regexp";
import EVENTS from "../constants";

export default function Router({
  children,
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

  const routesFromChildren = Children.map(children, ({ props, type }) => {
    const { name } = type;
    const isRoute = name === "Route";
    if (!isRoute) return null;
    return props;
  });

  const routeToUse = routes.concat(routesFromChildren);
  let routeParams = {};

  const Page = routeToUse.find(({ path }) => {
    if (path === currentPath) return true;
    const matchUrl = match(path, { decode: decodeURIComponent });
    const matched = matchUrl(currentPath);
    if (!matched) return false;
    routeParams = matched.params;
    return true;
  })?.component;

  return Page ? (
    <Page routeParams={routeParams} />
  ) : (
    <DefaultComponent routeParams={routeParams} />
  );
}
