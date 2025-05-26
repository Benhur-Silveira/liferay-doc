import React from "react";

export const ButtonUI = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};
