import React from "react";
import HomePage from "./pages/Home";
import About from "./pages/About";
import Router from "./components/Router";
import ErrorPage from "./pages/ErrorPage";

const router = [
  { path: "/", component: HomePage },
  { path: "/about", component: About },
];

export default function App() {
  return (
    <main>
      <Router routes={router} defaultComponent={ErrorPage} />
    </main>
  );
}
