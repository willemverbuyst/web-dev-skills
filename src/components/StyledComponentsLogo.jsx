import React from 'react';
import { Html } from '@react-three/drei';
import styledComponentsL from '../img/styled-components.png';

export default function StyledComponentsLogo(props) {
  return (
    <mesh {...props}>
      <sphereBufferGeometry attach="geometry" args={[0.001, 0.001, 0.001]} />
      <Html>
        <img src={styledComponentsL} alt="styled-components" />
      </Html>
    </mesh>
  );
}
