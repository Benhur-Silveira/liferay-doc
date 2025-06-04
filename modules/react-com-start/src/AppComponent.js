import React from "react";

export default function AppComponent(props) {
  return (
    <div
      className={
        "d-flex flex-column justify-content-center w-100 bg-blue text-center"
      }
    >
      <h1>Eita</h1>
      <span>meu Hoje eu quero é pão e tu vai quereru oque?</span>
      {/*<h1>Hoje: {dayjs().format("DD/MM/YYYY")} </h1>*/}
    </div>
  );
}
