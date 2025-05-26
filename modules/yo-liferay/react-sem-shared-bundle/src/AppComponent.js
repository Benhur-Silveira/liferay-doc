import React from "react";
import { mask } from "react-yo-shared-bundle/utils";
export default class extends React.Component {
  render() {
    return (
      <div>
        <h1>{Liferay.Language.get("widget-name")}: React sem shared bundle</h1>
        <span>{mask({ mask: "cep", value: "12345-678" })}</span>
      </div>
    );
  }
}
