import { Canvas } from "@react-three/fiber";
import { Props } from "./ThreeContainer.types";

const ThreeContainer = ({ children, className }: Props) => {
  return (
    <div id='canvas-container' className={className}>
      <Canvas>{children}</Canvas>
    </div>
  );
};

export default ThreeContainer;
