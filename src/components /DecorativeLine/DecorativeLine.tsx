import { Props } from "./DecorativeLine.type";

const DecorativeLine = ({
  size = "1px",
  color,
  lineStyle = "solid",
  linePosition,
  width,
  opacity = 0.5,
  rotate,
}: Props) => {
  const style = {
    // position: "absolute",
    transform: `rotate(${rotate || 0})`,
    // borderTop: `${size} ${lineStyle} ${color}`,
    opacity,
    width,
    ...linePosition,
  } as React.CSSProperties;

  return <hr style={style} />;
};

export default DecorativeLine;
