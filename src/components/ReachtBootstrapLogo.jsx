import React from 'react';
import { Html } from '@react-three/drei';
import reactBootstrapL from '../img/react-bootstrap.png';

export default function ReactBootstrapLogo(props) {
  return (
    <mesh {...props}>
      <sphereBufferGeometry attach="geometry" args={[0.001, 0.001, 0.001]} />
      <Html>
        <img src={reactBootstrapL} alt="react-bootstrap" />
      </Html>
    </mesh>
  );
}
