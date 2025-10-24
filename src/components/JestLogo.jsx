import React from "react";
import { Html } from "@react-three/drei";
import jestL from "../img/jest.png";

export default function JestLogo(props) {
  return (
    <mesh {...props}>
      <sphereBufferGeometry attach="geometry" args={[0.001, 0.001, 0.001]} />
      <Html>
        <img src={jestL} alt="jest" />
      </Html>
    </mesh>
  );
}
