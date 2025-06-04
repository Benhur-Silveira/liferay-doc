import React from "react";
import { mask } from "../shared/utils/mask";

export const TextMask = ({ mask: maskValue, value, title }) => {
  return (
    <div>
      <span>{title}</span>
      <span>{mask({ mask: maskValue, value })}</span>
    </div>
  );
};
