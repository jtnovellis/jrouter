/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { lazy, Suspense } from "react";
import Router from "./components/Router";
import Route from "./components/Route";

const HomePage = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Search = lazy(() => import("./pages/Search"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));

const router = [
  { path: "/", component: HomePage },
  { path: "/about", component: About },
];

export default function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Router routes={router} defaultComponent={ErrorPage}>
        <Route path="/search/:id" component={Search} />
      </Router>
    </Suspense>
  );
}
