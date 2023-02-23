/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from "react";
import navigate from "../utils/navigate";

export default function Link({ target, to, children, ...props }) {
  const handleClick = (e) => {
    const isMainEvent = e.button === 0;
    const isModifiedEvent = e.metakey || e.altKey || e.ctrlKey || e.shiftKey;
    const isManageableEvent = target === undefined || target === "_self";

    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      e.preventDefault();
      navigate(to);
    }
  };

  return (
    <a onClick={handleClick} href={to} target={target} {...props}>
      {children}
    </a>
  );
}
