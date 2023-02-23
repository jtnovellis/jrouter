import React from "react";
import navigate from "../utils/navigate";

export default function About() {
  return (
    <div>
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi,
        exercitationem!
      </p>
      <button type="button" onClick={() => navigate("/")}>
        About
      </button>
    </div>
  );
}
