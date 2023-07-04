import React from "react";
import { Props } from "./Text.types";
import "./Text.module.scss";

const Text = ({ tag, style, children, className }: Props) => {
  const props = { style, className };
  return React.createElement(tag, { ...props }, children);
};

export default Text;
