import React, { useState, useEffect } from "react";
import EVENTS from "./constants";
import HomePage from "./pages/Home";
import About from "./pages/About";

export default function App() {
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

  return (
    <main>
      {currentPath === "/" && <HomePage />}
      {currentPath === "/about" && <About />}
    </main>
  );
}
