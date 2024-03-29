import React from 'react';
import { Html } from '@react-three/drei';
import reactL from '../img/react.png';

export default function ReactLogo(props) {
  return (
    <mesh {...props}>
      <sphereBufferGeometry attach="geometry" args={[0.001, 0.001, 0.001]} />
      <Html>
        <img src={reactL} alt="react" />
      </Html>
    </mesh>
  );
}
