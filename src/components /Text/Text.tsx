import { Props } from "./Text.types";

const Text = ({
  type,
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

  switch (type) {
    case "h1":
      return <h1 {...props}>{children}</h1>;
    case "h2":
      return <h2 {...props}>{children}</h2>;
    case "h3":
      return <h3 {...props}>{children}</h3>;
    case "label":
      return <label {...props}>{children}</label>;
    case "content":
      return <span {...props}>{children}</span>;
    case "p":
    default:
      return <p {...props}>{children}</p>;
  }
};

export default Text;
