import { Canvas } from "@react-three/fiber";
import Sphere from "./Spheres/Spheres";

import styles from "./MainAnimation.module.scss";

const MainAnimation = () => {
  return (
    <div id='canvas-container' className={styles.CanvasContainer}>
      <Canvas
        camera={{ fov: 25, position: [0, 0, 12] }}
        flat={true}
        dpr={[window.devicePixelRatio, 2]}
      >
        <pointLight position={[0, 5, 3]} intensity={0.55} />
        <ambientLight intensity={0.45} color='#fff' />
        <Sphere position={[0, 0, 0]} />
      </Canvas>
    </div>
  );
};

export default MainAnimation;
