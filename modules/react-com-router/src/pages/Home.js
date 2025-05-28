import React from "react";
import { useHistory } from "react-router-dom";
import { BTN_ABOUT } from "../constants/texts";

export const Home = () => {
  const navigate = useHistory();
  return (
    <div className={"d-flex flex-column"}>
      <h1>Home</h1>
      <button onClick={() => navigate.push("/about")}>{BTN_ABOUT}</button>
    </div>
  );
};
