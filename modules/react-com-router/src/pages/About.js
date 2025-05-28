import React from "react";
import { useHistory } from "react-router-dom";
import { BTN_HOME } from "../constants/texts";

export const About = () => {
  const navigate = useHistory();
  return (
    <div className={"d-flex flex-column"}>
      <h1>About</h1>
      <button onClick={() => navigate.push("/")}>{BTN_HOME}</button>
    </div>
  );
};
