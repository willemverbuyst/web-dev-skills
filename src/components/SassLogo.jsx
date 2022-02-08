import React from 'react';
import { HTML } from 'drei';
import sassL from '../img/sass.png';

export default function SassLogo(props) {
  return (
    <mesh {...props}>
      <sphereBufferGeometry attach="geometry" args={[0.001, 0.001, 0.001]} />
      <meshBasicMaterial attach="material" color="#fff" />
      <HTML scaleFactor={2.5}>
        <img src={sassL} alt="sass" />
        <h2 style={{ fontSize: '3rem' }}>Sass</h2>
      </HTML>
    </mesh>
  );
}
