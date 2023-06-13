import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

const Sphere = (props: any) => {
  const ref = useRef<Mesh>(null!);

  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    ref.current.position.x = Math.cos(time) * 4;
    ref.current.position.y = Math.sin(time) * 2;
    ref.current.rotation.x += 0.01;
  });

  return (
    <>
      <mesh
        {...props}
        ref={ref}
        scale={clicked ? 1.5 : 1}
        onClick={(event) => click(!clicked)}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}
      >
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial
          wireframe={props.wireframe}
          color={hovered ? "hotpink" : "orange"}
        />
      </mesh>
    </>
  );
};

export default Sphere;
