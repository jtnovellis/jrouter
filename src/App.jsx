import React from "react";
import HomePage from "./pages/Home";
import About from "./pages/About";
import Router from "./components/Router";

const router = [
  { path: "/", component: HomePage },
  { path: "/about", component: About },
];

export default function App() {
  return (
    <main>
      <Router routes={router} />
    </main>
  );
}
