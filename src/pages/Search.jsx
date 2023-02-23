/* eslint-disable react/prop-types */
import React from "react";

export default function Search({ routeParams }) {
  return (
    <div>
      <div>Searching {routeParams.id}</div>
    </div>
  );
}
