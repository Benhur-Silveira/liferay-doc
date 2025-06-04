import React from "react";
import ReactDOM from "react-dom";

import { AppComponent } from "./AppComponent";

export default function main(params) {
  ReactDOM.render(
    <AppComponent />,
    document.getElementById(params.portletElementId),
  );
}
