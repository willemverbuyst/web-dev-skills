import React from "react";
import { Html } from "@react-three/drei";
import sassL from "../img/sass.png";

export default function SassLogo(props) {
  return (
    <mesh {...props}>
      <sphereBufferGeometry attach="geometry" args={[0.001, 0.001, 0.001]} />
      <Html>
        <img src={sassL} alt="sass" />
      </Html>
    </mesh>
  );
}
