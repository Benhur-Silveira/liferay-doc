import React from "react";
import ReactDOM from "react-dom";

import { AppComponent } from "./AppComponent";

export default function main(params) {
  ReactDOM.render(
    <AppComponent
      portletNamespace={params.portletNamespace}
      contextPath={params.contextPath}
      portletElementId={params.portletElementId}
      configuration={params.configuration}
    />,
    document.getElementById(params.portletElementId),
  );
}
