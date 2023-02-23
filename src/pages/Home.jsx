import React from "react";
import navigate from "../utils/navigate";

export default function HomePage() {
  return (
    <div>
      <h1>HomePage</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi,
        exercitationem!
      </p>
      <button type="button" onClick={() => navigate("/about")}>
        About
      </button>
    </div>
  );
}
