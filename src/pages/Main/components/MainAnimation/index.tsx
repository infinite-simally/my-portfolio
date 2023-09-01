import ThreeContainer from "components/ThreeContainer";
import Sphere from "./Spheres/Spheres";

import styles from "./MainAnimation.module.scss";

const MainAnimation = () => {
  return (
    <ThreeContainer className={styles.CanvasContainer}>
      <pointLight position={[0, 5, 3]} intensity={0.55} />
      <ambientLight intensity={0.45} color='#fff' />
      <Sphere position={[0, 0, 0]} />
    </ThreeContainer>
  );
};

export default MainAnimation;
