import React from "react";
import { ButtonUI } from "../shared/ui/button";
export const Home = () => {
  return (
    <div>
      <h1>Módulo Shared bundle - Liferay CLI</h1>
      <ButtonUI onClick={() => console.log("clicked")}>Click</ButtonUI>
    </div>
  );
};
