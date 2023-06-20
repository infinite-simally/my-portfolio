import React from "react";
import { Props } from "./Text.types";

const Text = ({
  tag,
  fontSize = 16,
  fontFamily = "'Roboto', sans-serif",
  fontWeight = 400,
  lineHeight = `${+fontSize * 1.5}px}`,
  textTransform = "none",
  textDecoration = "none",
  fontVariant = "",
  children,
  className,
}: Props) => {
  const style = {
    fontSize,
    fontWeight,
    lineHeight,
    textTransform,
    textDecoration,
    fontFamily,
    fontVariant,
  };

  const props = { style, className };
  return React.createElement(tag, { ...props }, children);
};

export default Text;
