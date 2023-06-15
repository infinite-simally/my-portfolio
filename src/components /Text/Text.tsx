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

  switch (type) {
    case "h1":
      return (
        <h1 className={className} style={style}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 className={className} style={style}>
          {children}
        </h2>
      );
    case "h3":
      return (
        <h2 className={className} style={style}>
          {children}
        </h2>
      );
    case "label":
      return (
        <label className={className} style={style}>
          {children}
        </label>
      );
    case "content":
      return (
        <span className={className} style={style}>
          {children}
        </span>
      );
    case "p":
    default:
      return (
        <p className={className} style={style}>
          {children}
        </p>
      );
  }
};

export default Text;
