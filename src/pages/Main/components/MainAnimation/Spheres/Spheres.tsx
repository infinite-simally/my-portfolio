import { useRef, useEffect } from "react";

import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

import * as dat from "lil-gui";

// import colors from "../../styles/color-variables.module.scss";

const Sphere = (props: any) => {
  const sphere1ref = useRef<Mesh>(null!);
  const sphere2ref = useRef<Mesh>(null!);

  /* Debug UI */
  useEffect(() => {
    // Sphere-1 tewaks
    if (document.location.href.includes("debug")) {
      const gui = new dat.GUI();

      const sphere1Folder = gui.addFolder("Sphere-1 Folder");
      const sphere2Folder = gui.addFolder("Sphere-2 Folder");

      sphere1Folder
        .addColor(sphere1ref.current.material, "color")
        .name("sphere-1-color");
      sphere1Folder
        .add(sphere1ref.current.material, "roughness", 0, 1, 0.0001)
        .name("roughness-sphere-1");
      sphere1Folder
        .add(sphere1ref.current.material, "metalness", 0, 1, 0.0001)
        .name("metalness-sphere-1");
      sphere1Folder
        .addColor(sphere1ref.current.material, "emissive")
        .name("emissive-sphere-1");

      // Sphere-2 tewaks
      sphere2Folder
        .addColor(sphere2ref.current.material, "color")
        .name("sphere-2-color");
      sphere2Folder
        .add(sphere2ref.current.material, "roughness", 0, 1, 0.0001)
        .name("roughness-sphere-2");
      sphere2Folder
        .add(sphere2ref.current.material, "metalness", 0, 1, 0.0001)
        .name("metalness-sphere-2");
      sphere2Folder
        .addColor(sphere2ref.current.material, "emissive")
        .name("emissive-sphere-2");
    }
  }, [sphere1ref, sphere2ref]);

  /* Animate objects */
  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    // sphere1ref.current.position.x = -4;
    // sphere2ref.current.position.x = 1;
    sphere1ref.current.position.x = Math.sin(time) * 5;
    sphere1ref.current.position.y = Math.tan(time);
    sphere1ref.current.rotation.x = time + 0.05;
    sphere1ref.current.rotation.y = time + 0.05;

    sphere2ref.current.position.x = Math.tan(time);
    sphere2ref.current.position.y = Math.cos(time) * 4;
    sphere2ref.current.rotation.x = time + 0.05;
    sphere2ref.current.rotation.y = time + 0.05;
  });

  return (
    <>
      <mesh ref={sphere1ref}>
        <sphereGeometry args={[1.5, 24, 24]} />
        <meshPhysicalMaterial
          clearcoat={1}
          clearcoatRoughness={0.45}
          reflectivity={1}
          flatShading
          metalness={0}
          roughness={0}
          color='#a8b2ff'
        />
      </mesh>
      <mesh ref={sphere2ref}>
        <sphereGeometry args={[1.5, 24, 32]} />
        <meshPhysicalMaterial
          clearcoat={1}
          clearcoatRoughness={0.45}
          reflectivity={1}
          flatShading
          metalness={0}
          roughness={0}
          color='#b27ec2'
        />
      </mesh>
    </>
  );
};

export default Sphere;
