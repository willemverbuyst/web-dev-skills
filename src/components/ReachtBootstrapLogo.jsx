import React from 'react';
import { HTML } from 'drei';
import reactBootstrapL from '../img/react-bootstrap.png';

export default function ReactBootstrapLogo(props) {
  return (
    <mesh {...props}>
      <sphereBufferGeometry attach="geometry" args={[0.001, 0.001, 0.001]} />
      <meshBasicMaterial attach="material" color="#fff" />
      <HTML scaleFactor={2.5}>
        <img src={reactBootstrapL} alt="react-bootstrap" />
        <h2 style={{ fontSize: '3rem' }}>React-Bootstrap</h2>
      </HTML>
    </mesh>
  );
}
