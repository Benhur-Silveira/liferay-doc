import React from "react";
import { Title } from "./components/Title";
import { NAME } from "./languages/texts";
export default class extends React.Component {
  render() {
    return (
      <div className={"d-flex"}>
        <h1>{NAME}: </h1>
        <Title title={"React sem shared bundle"} />
      </div>
    );
  }
}
