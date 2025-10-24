import React from "react";
import { Html } from "@react-three/drei";
import sqlL from "../img/sql.png";

export default function SqlLogo(props) {
  return (
    <mesh {...props}>
      <sphereBufferGeometry attach="geometry" args={[0.001, 0.001, 0.001]} />
      <Html>
        <img src={sqlL} alt="sql" />
      </Html>
    </mesh>
  );
}
