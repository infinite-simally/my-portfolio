import { Canvas } from "@react-three/fiber";
import { Props } from "./ThreeContainer.types";

const ThreeContainer = ({ children, className }: Props) => {
  return (
    <div id='canvas-container' className={className}>
      <Canvas
        camera={{ fov: 25, position: [0, 0, 12] }}
        flat={true}
        dpr={[window.devicePixelRatio, 2]}
      >
        {children}
      </Canvas>
    </div>
  );
};

export default ThreeContainer;
