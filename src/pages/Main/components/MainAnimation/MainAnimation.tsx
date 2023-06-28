import ThreeContainer from "../../../../components /ThreeContainer/ThreeContainer";
import Sphere from "./Spheres/Spheres";

import styles from "./MainAnimation.module.scss";

const MainAnimation = () => {
  return (
    <ThreeContainer className={styles.CanvasContainer}>
      <pointLight position={[10, 10, 10]} castShadow />
      <ambientLight intensity={0.2} />
      <directionalLight position={[0.5, 0.5, 1]} color='white' />
      <Sphere position={[0, 0, 0]} />
    </ThreeContainer>
  );
};

export default MainAnimation;
