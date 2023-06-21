import { useRef } from "react";

import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

// import colors from "../../styles/color-variables.module.scss";

const Sphere = (props: any) => {
  const ref = useRef<Mesh>(null!);
  const sphere2ref = useRef<Mesh>(null!);

  // const [hovered, hover] = useState(false);
  // const [clicked, click] = useState(false);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    ref.current.position.x = Math.sin(time) * 4;
    ref.current.position.y = Math.cos(time) * 2 + delta;
    ref.current.rotation.x += 0.01;

    sphere2ref.current.position.x = Math.sin(time) * 2 + delta;
    sphere2ref.current.position.y = Math.cos(time) * 4;
    sphere2ref.current.rotation.x += 0.01;
  });

  return (
    <>
      <mesh ref={ref}>
        <sphereGeometry args={[3, 32, 32]} />
        <meshStandardMaterial color='#b585c5' />
      </mesh>
      <mesh
        ref={sphere2ref}
        // scale={clicked ? 1.5 : 1}
        // onClick={(event) => click(!clicked)}
        // onPointerOver={(event) => hover(true)}
        // onPointerOut={(event) => hover(false)}
      >
        <sphereGeometry args={[3, 32, 32]} />
        <meshStandardMaterial color='#7376c3' />
      </mesh>
    </>
  );
};

export default Sphere;
