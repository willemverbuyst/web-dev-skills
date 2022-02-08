import React from 'react';
import { HTML } from 'drei';
import styledComponentsL from '../img/styled-components.png';

export default function StyledComponentsLogo(props) {
  return (
    <mesh {...props}>
      <sphereBufferGeometry attach="geometry" args={[0.001, 0.001, 0.001]} />
      <meshBasicMaterial attach="material" color="#fff" />
      <HTML scaleFactor={2.5}>
        <img src={styledComponentsL} alt="styled-components" />
        <h2 style={{ fontSize: '3rem' }}>Styled-Components</h2>
      </HTML>
    </mesh>
  );
}
