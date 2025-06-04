import React from "react";
import { mask } from "../shared/utils/mask";
export const TextMask = ({ title, mask: maskValue, value }) => {
  return (
    <div className={"d-flex"}>
      <span>{title}</span>&nbsp;
      <span>{mask({ mask: maskValue, value })}</span>
    </div>
  );
};
