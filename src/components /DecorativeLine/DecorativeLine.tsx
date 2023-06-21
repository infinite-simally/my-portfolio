import { Props } from "./DecorativeLine.types";

const DecorativeLine = ({
  color,
  linePosition,
  height,
  opacity = 0.5,
  rotate,
}: Props) => {
  const style = {
    position: "absolute",
    transform: `rotate(${rotate || 0})`,
    border: `0.5px solid ${color}`,
    opacity,
    height,
    ...linePosition,
  } as React.CSSProperties;

  return <hr style={style} />;
};

export default DecorativeLine;
