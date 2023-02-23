import React, { useState } from "react";

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  return (
    <main>
      {currentPath === "/" && <HomePage />}
      {currentPath === "/about" && <About />}
    </main>
  );
}

function About() {
  return (
    <div>
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi,
        exercitationem!
      </p>
      <a href="/">Home</a>
    </div>
  );
}

function HomePage() {
  return (
    <div>
      <h1>HomePage</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi,
        exercitationem!
      </p>
      <a href="/about">About</a>
    </div>
  );
}
