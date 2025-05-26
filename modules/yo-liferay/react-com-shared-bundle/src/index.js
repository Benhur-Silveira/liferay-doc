import React from "react";
import ReactDOM from "react-dom";

import { Home } from "./page/home";

export default function main({
  portletNamespace,
  contextPath,
  portletElementId,
  configuration,
}) {
  ReactDOM.render(<Home />, document.getElementById(portletElementId));
}
