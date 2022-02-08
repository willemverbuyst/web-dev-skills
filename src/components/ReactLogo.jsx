import React from 'react';
import { HTML } from 'drei';
import reactL from '../img/react.png';

export default function ReactLogo(props) {
  return (
    <mesh {...props}>
      <sphereBufferGeometry attach="geometry" args={[0.001, 0.001, 0.001]} />
      <meshBasicMaterial attach="material" color="#fff" />
      <HTML scaleFactor={2.5}>
        <img src={reactL} alt="react" />
        <h2 style={{ fontSize: '3rem' }}>React</h2>
      </HTML>
    </mesh>
  );
}
