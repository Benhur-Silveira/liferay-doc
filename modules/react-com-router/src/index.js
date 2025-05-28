import React from "react";
import ReactDOM from "react-dom";

import { AppRouter } from "./routes/routes";

export default function main(params) {
  ReactDOM.render(
    <AppRouter configuration={params.configuration.portletInstance} />,
    document.getElementById(params.portletElementId),
  );
}
