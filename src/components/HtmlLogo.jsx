import React from 'react';
import { HTML } from 'drei';
import htmlL from '../img/html.png';

export default function GitLogo(props) {
  return (
    <mesh {...props}>
      <sphereBufferGeometry attach="geometry" args={[0.001, 0.001, 0.001]} />
      <meshBasicMaterial attach="material" color="#fff" />
      <HTML scaleFactor={2.5}>
        <img src={htmlL} alt="html" />
        <h2 style={{ fontSize: '3rem' }}>HTML</h2>
      </HTML>
    </mesh>
  );
}
