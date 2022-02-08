import React from 'react';
import { HTML } from 'drei';
import jestL from '../img/jest.png';

export default function JestLogo(props) {
  return (
    <mesh {...props}>
      <sphereBufferGeometry attach="geometry" args={[0.001, 0.001, 0.001]} />
      <meshBasicMaterial attach="material" color="#fff" />
      <HTML scaleFactor={2.5}>
        <img src={jestL} alt="jest" />
        <h2 style={{ fontSize: '3rem' }}>Jest</h2>
      </HTML>
    </mesh>
  );
}
