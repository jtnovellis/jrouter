import React from "react";
import Link from "../components/Link";

export default function HomePage() {
  return (
    <div>
      <h1>HomePage</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi,
        exercitationem!
      </p>
      <Link to="/about">About</Link>
    </div>
  );
}
